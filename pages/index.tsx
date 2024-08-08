import {
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript
} from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import ProjectCard from 'components/ProjectCard';
import { VideoLibrary, SocialMedia, Ecommerce } from 'components/Icons';
import { Career, career } from 'data/work/career';
import CareerCard from 'components/CareerCard';
import { ExternalLink } from 'components/Footer';
import clsx from 'clsx';
import { trackEvent } from 'lib/analytics';
import { GetServerSideProps } from 'next';

export default function Home() {
  const redGradient =
    'bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-transparent bg-clip-text';
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-6">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Hi, I'm Omkar!
            </h1>
            <div className="space-y-3 mt-2">
              <span className="inline-flex">
                <div className="text-gray-600 dark:text-gray-400 text-lg flex items-center">
                  <div className="flex items-center">
                    <p>
                      I work at{' '}
                      <ExternalLink
                        className="relative inline-flex items-center shrink-0 text-gray-900 dark:text-gray-200"
                        href={'https://smallcase.com'}
                      >
                        smallcase
                      </ExternalLink>{' '}
                      as a software engineer.
                    </p>
                  </div>
                </div>
              </span>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                I have a passion for{' '}
                <span
                  className={clsx(
                    redGradient,
                    'transition-transform duration-500 ease-in-out hover:duration-300'
                  )}
                >
                  creating top-notch apps,{' '}
                </span>
                <span>a focus on </span> {'\n'}
                <span
                  className={clsx(
                    'bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-green-500',
                    'after:bg-gradient-to-r'
                  )}
                >
                  crafting seamless interfaces{' '}
                </span>
                and a deep{' '}
                <span className="group relative">
                  <span
                    className={clsx(
                      'absolute -inset-0',
                      'bg-gradient-to-r from-blue-500 to-purple-400',
                      'rounded-lg opacity-20 blur group-hover:opacity-40 group-hover:blur-md',
                      'animate-tilt transition-all duration-300 ease-in-out'
                    )}
                  ></span>
                  <span className="relative bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                    desire for perfection.
                  </span>
                </span>{' '}
              </p>
            </div>

            <div className="mt-3 text-gray-600 dark:text-gray-400 mb-16 ">
              <div>My favorite tech &nbsp;</div>
              <div className="mt-2">
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiReact color={'#61DBFB'} />
                  <p>React</p>
                </div>
                &nbsp;
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiTypescript color={'#007acc'} />
                  <p>TypeScript</p>
                </div>
                &nbsp;
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiNextdotjs className="text-black dark:text-white" />
                  <p>NextJS</p>
                </div>
                &nbsp;
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiGraphql color={'#E10098'} />
                  <p>GraphQL</p>
                </div>
                &nbsp;
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiPostgresql color={'#E10098'} />
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <img
              src="/avatar.jpg"
              alt="Omkar Kulkarni"
              className="aspect-1 rounded-full object-cover object-top pointer-events-none"
            />
          </div>
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          From the blog
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Getting started with Typescript on the backend with Node.js and Express"
            slug="getting-started-with-typescript-on-the-backend-with-nodejs-and-express"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Type-safe GraphQL Server with Pothos (Formerly GiraphQL)"
            slug="type-safe-graphql-server-with-pothos-formerly-giraphql"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <BlogPostCard
            title="Reusable form component in react using React Hook Form 🎣 and Zod 🛡"
            slug="reusable-form-component-in-react-using-react-hook-form-and-zod"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
        </div>
        <Link href="/blog">
          <a
            onClick={() => trackEvent('Clicked all blog CTA', {})}
            className="group mt-8 text-gray-600 dark:text-gray-400 hover:text-gray-600 transition ease-in-out duration-200"
          >
            Explore all blogs{' '}
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            >
              →
            </span>
          </a>
        </Link>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Projects
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I created a few projects to learn more about the technologies I use.
          You can check them out here. Let me know what you think!
        </p>
        <motion.ul className="w-full">
          <ProjectCard
            href="/projects/dogesocial"
            title="DogeSocial"
            brandColor={'#BE185D'}
            projectLogo={SocialMedia}
            stack={['typescript', 'nextjs', 'react', 'nodejs', 'posgresql']}
            description="DogeSocial is a place to share and see what your friends are upto."
          />
          <ProjectCard
            href="/projects/dogemart"
            title="DogeMart"
            projectLogo={Ecommerce}
            brandColor={'#D97706'}
            stack={['typescript', 'nextjs', 'react', 'nodejs']}
            description="DogeMart is a eCommerce website where one can buy various goods."
          />
          <ProjectCard
            href="/projects/dogeflix"
            title="DogeFlix"
            brandColor={'#B45309            '}
            projectLogo={VideoLibrary}
            stack={['typescript', 'nextjs', 'react', 'nodejs', 'mongodb']}
            description="DogeFlix is a website showcasing latest and upcoming movie trailers."
          />
        </motion.ul>
        <Link href="/projects">
          <a
            onClick={() => trackEvent('Clicked all projects CTA', {})}
            className="group text-gray-600 dark:text-gray-400 hover:text-gray-600 transition ease-in-out duration-200"
          >
            See all projects{' '}
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            >
              →
            </span>
          </a>
        </Link>
        <div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Work Experience
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            My work experience so far.
          </p>
          <ul className="w-full ">
            {career.map((c: Career, index) => (
              <CareerCard
                key={index}
                last={index === career.length - 1}
                career={c}
              />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log('>> SERVER GSSP LOG', JSON.stringify(query));
  return {
    props: query
  };
};
