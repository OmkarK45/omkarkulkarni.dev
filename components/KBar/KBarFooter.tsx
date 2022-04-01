import clsx from 'clsx';

export function KBarFooter() {
  return (
    <div className="flex flex-wrap items-center bg-gray-200 dark:bg-gray-800 py-2.5 px-4 text-xs text-gray-700 dark:text-gray-200">
      Press <KbdIcon label="Esc" />
      to exit.
    </div>
  );
}

function KbdIcon({ label }: { label: string }) {
  return (
    <kbd
      className={clsx(
        'mx-1 flex h-5 w-5 px-3 items-center justify-center rounded border bg-white dark:bg-gray-500 font-semibold sm:mx-2',
        'border-gray-600 text-gray-600 dark:text-gray-100'
      )}
    >
      {label}
    </kbd>
  );
}
