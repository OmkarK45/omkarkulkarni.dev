import React from 'react';
import {
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript
} from 'react-icons/si';
import cn from 'classnames';

const STACK_TO_ICON = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  posgresql: SiPostgresql
} as const;

interface ProjectCardProps {
  title: string;
  description: string;
  stack: Array<keyof typeof STACK_TO_ICON>;
  href: string;
  projectLogo: any;
  brandColor: string;
}

export default function ProjectCard({
  title,
  description,
  href,
  projectLogo,
  stack,
  brandColor
}: ProjectCardProps) {
  const Logo = projectLogo;

  return (
    <a
      className="mb-4 block w-full transform transition duration-300 hover:scale-110 hover:shadow-lg active:scale-95 active:shadow-none"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center justify-between border border-gray-200 dark:border-gray-800 rounded p-4">
        <div className="flex items-center">
          <div
            className={cn(
              ' ml-2 mr-4 !bg-opacity-10 bg-yellow-700 p-2 rounded-full'
            )}
          >
            <span className="sr-only">{title}</span>
            <Logo
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              style={{ color: brandColor }}
            />
          </div>
          <div>
            <div className="flex space-x-2">
              <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {title}
              </h4>
            </div>
            <p className="leading-5 text-gray-700 dark:text-gray-300 ">
              {description}
            </p>
            <div className="flex flex-wrap mt-2 gap-2">
              {stack.map((stackItem, idx) => {
                const Icon = STACK_TO_ICON[stackItem];
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center py-1 text-xs font-semibold text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-1">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-xs capitalize"> {stackItem}</p>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
