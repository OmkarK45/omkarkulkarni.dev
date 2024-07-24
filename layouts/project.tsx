/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Project } from 'contentlayer/generated';
import { SiGithub } from 'react-icons/si';
import { ExternalLink } from 'components/Footer';
import { HiOutlineCubeTransparent } from 'react-icons/hi';
import { BgAnimation } from 'components/BgAnimation';
import { BlurImage } from 'components/BlurImage';

const editUrl = (slug) =>
  `https://github.com/omkark45/omkarkulkarni.dev/edit/main/data/blog/${slug}.mdx`;

export default function ProjectLayout({
  project,
  children
}: PropsWithChildren<{
  project: Project;
}>) {
  return (
    <Container
      title={`${project.title} – Omkar Kulkarni`}
      description={project.description}
      image={`https://omkarkulkarni.tech${project.image}`}
      date={project.publishedAt}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <span className="flex aspect-w-16 aspect-h-9 w-full relative  mb-4 rounded-lg shadow-xl overflow-hidden">
          <BlurImage
            layout="fill"
            alt={'Project Banner'}
            className="shadow-xl"
            src={project.image}
          />
        </span>

        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {project.title}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3 justify-start items-center my-4 text-sm font-medium text-gray-600 dark:text-gray-300">
          <div className="inline-flex gap-2 items-center">
            <SiGithub className="text-lg text-gray-800 dark:text-white" />
            <ExternalLink href={project.github}>Repository</ExternalLink>
          </div>
          <p>-</p>
          <div className="inline-flex gap-2 items-center">
            <HiOutlineCubeTransparent className="text-lg text-gray-800 dark:text-white" />
            <ExternalLink href={project.link}>Live Demo</ExternalLink>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Omkar Kulkarni"
              height={24}
              width={24}
              src="/avatar.png"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Omkar Kulkarni / '}
              {/* {, 'MMMM dd, yyyy'} */}
              {project.publishedAt}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {project.readingTime.text}
            {` • `}
            {project.wordCount} characters
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </Container>
  );
}
