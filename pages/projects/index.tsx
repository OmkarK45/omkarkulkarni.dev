import { allProjects } from '.contentlayer/data';
import { pick } from 'lib/utils';
import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { VideoLibrary, SocialMedia, Ecommerce } from 'components/Icons';

import Container from 'components/Container';

export default function Projects({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log({ projects });
  return (
    <Container
      title="Projects – Omkar Kulkarni"
      description="The projects I built with various technologies and my thoughts about them."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Projects
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          I've been learning web development since 2 years. I've built a few
          projects with various stacks and technologies. Check them out and let
          me know what you think!
        </p>

        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
          {/* PROJECT CARD DETAIL */}
          {projects.map((project, idx) => {
            return (
              <div className="rounded h-full" key={idx}>
                <ProjectCard {...project} />
              </div>
            );
          })}
          {/* PROJECT CARD DETAIL END */}
        </div>
      </div>
    </Container>
  );
}

function ProjectCard({ title, description, image, link, slug, github, logo }) {
  return (
    <Link passHref href={`/projects/${slug}`}>
      <div className="flex cursor-pointer items-center justify-center w-full h-full rounded-lg overflow-hidden shadow-sm border border-gray-300/50 dark:border-gray-700 transform transition duration-300 hover:scale-110 hover:shadow-lg active:scale-95 active:shadow-none">
        <div className="flex items-center justify-center w-full h-full ">
          <div className="w-80 bg-white dark:bg-gray-800 h-full flex flex-col ">
            <img className="w-full" src={image} alt="sunset" />
            <div className="px-5 pt-4 pb-6 flex-1">
              <a
                href={link}
                className="text-xl inline-block font-semibold no-underline leading-tight dark:text-gray-100 "
              >
                <span>{title}</span>
              </a>
              <p className="text-sm leading-4 pt-3 dark:text-gray-400 text-gray-500">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function getStaticProps() {
  const projects = allProjects.map((project) =>
    pick(project, [
      'title',
      'logo',
      'description',
      'image',
      'link',
      'github',
      'publishedAt',
      'slug'
    ])
  );

  return { props: { projects } };
}
