import clsx from 'clsx';
import { useThemeActions } from 'hooks/useThemeAction';
import {
  KBarPortal as BaseKBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
  ActionId
} from 'kbar';
import { useTheme } from 'next-themes';
import React, { useEffect, useMemo, useState } from 'react';

import type { ActionImpl } from 'kbar';
import { KBarFooter } from './KBarFooter';

export function KBarPortal() {
  useThemeActions();
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <BaseKBarPortal>
      <KBarPositioner className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity backdrop-blur dark:bg-opacity-30 dark:bg-gray-700">
        <KBarAnimator
          className={clsx(
            'w-full max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl shadow-2xl transition-all bg-white/90 dark:bg-gray-900 dark:bg-opacity-90 !backdrop-blur !backdrop-filter'
          )}
        >
          <KBarSearch className="outline-none h-12 w-full border-0 bg-transparent pl-5 pr-4 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-0 sm:text-sm" />
          <div className="pb-3 rounded-xl">
            <RenderResults theme={theme as 'light' | 'dark'} />
          </div>
          <KBarFooter />
        </KBarAnimator>
      </KBarPositioner>
    </BaseKBarPortal>
  );
}

function RenderResults({ theme }: { theme: 'light' | 'dark' }) {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div
            key={item}
            className="px-4  py-2 uppercase opacity-50 text-xs font-semibold dark:text-gray-100"
          >
            {item}
          </div>
        ) : (
          <ResultItem
            key={item.id}
            action={item}
            active={active}
            currentRootActionId={rootActionId}
            theme={theme}
          />
        )
      }
    />
  );
}

// note: put in separate file
interface ResultItemProps {
  action: ActionImpl;
  active: boolean;
  currentRootActionId: ActionId;
  theme: 'light' | 'dark';
}

/**
 * ref:  https://github.com/timc1/kbar/blob/70729bd130f4ea713441d78656bef0e9b5fdfc24/example/src/App.tsx#L183
 * */

export const ResultItem = React.forwardRef(
  (
    { action, active, currentRootActionId, theme }: ResultItemProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      console.log('CALLED ');
      const index = action.ancestors.findIndex(
        (anchestor) => anchestor.id === currentRootActionId
      );

      // +1 removes the currentRootAction; e.g.
      // if we are on the "Set theme" parent action,
      // the UI should not display "Set theme… > Dark"
      // but rather just "Dark"
      return action.ancestors.slice(0, index + 1);
    }, [action.ancestors, currentRootActionId]);

    const Icon = action.icon as React.ElementType;

    return (
      <div
        ref={ref}
        className={clsx(
          active &&
            'bg-gray-300/30 dark:bg-gray-300/30 text-gray-800 dark:text-gray-200',
          'flex select-none items-center rounded-md mx-2 px-2 py-2'
        )}
      >
        <div className="flex gap-3 items-center w-full text-base">
          <Icon
            className={clsx(
              'h-6 w-6 flex-none dark:text-white',
              active && 'text-opacity-100',
              {
                'text-gray-900 text-opacity-40': theme === 'light',
                'text-gray-500': theme === 'dark'
              }
            )}
          />
          <div className="flex items-center justify-between w-full flex-1">
            <div className="flex flex-col">
              <div>
                {ancestors.length > 0 &&
                  ancestors.map((ancestor) => (
                    <React.Fragment key={ancestor.id}>
                      <span className="mr-2 opacity-50">{ancestor.name}</span>
                      <span className="mr-2">&rsaquo;</span>
                    </React.Fragment>
                  ))}
                <span className="flex-auto truncate text-base">
                  {action.name}
                </span>
              </div>
              {action.subtitle && (
                <span className="text-xs">{action.subtitle}</span>
              )}
            </div>
            {action.shortcut?.length ? (
              <div>
                <span className="px-4 py-2 flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800">
                  {action.shortcut}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

ResultItem.displayName = 'ResultItem';
