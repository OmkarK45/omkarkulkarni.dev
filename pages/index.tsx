import {
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript
} from 'react-icons/si';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import ProjectCard from 'components/ProjectCard';
import { VideoLibrary, SocialMedia, Ecommerce } from 'components/Icons';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Hi, I'm Omkar Kulkarni.
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Developer specializing in Web Development.{' '}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I build end to end web applications using modern technologies.
              Checkout my blogs and projects.
            </p>
            <div className=" text-gray-600 dark:text-gray-400 mb-16 ">
              <div>I currently work with &nbsp;</div>
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
            <Image
              alt="Lee Robinson"
              height={176}
              width={176}
              src="/avatar.png"
              className="rounded-full "
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Past, Present, and Future of React State Management"
            slug="react-state-management"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <BlogPostCard
            title="Which Back End Should I Use As A Front-End Developer?"
            slug="backend"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
        </div>
        <Link href="/blog">
          <a className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts{' '}
            <HiOutlineArrowNarrowRight className="h-6 w-6 ml-2" />
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
            href="#"
            title="DogeSocial"
            brandColor={'#BE185D'}
            projectLogo={SocialMedia}
            stack={['typescript', 'nextjs', 'react', 'nodejs', 'posgresql']}
            description="DogeSocial is a place to share and see what your friends are upto."
          />
          <ProjectCard
            href="#"
            title="DogeFlix"
            brandColor={'#B45309            '}
            projectLogo={VideoLibrary}
            stack={['typescript', 'nextjs', 'react', 'nodejs', 'mongodb']}
            description="DogeFlix is a website showcasing latest and upcoming movie trailers."
          />
          <ProjectCard
            href="#"
            title="DogeMart"
            projectLogo={Ecommerce}
            brandColor={'#D97706'}
            stack={['typescript', 'nextjs', 'react', 'nodejs']}
            description="DogeMart is a eCommerce website where one can buy various goods."
          />
        </motion.ul>
        <Link href="/projects">
          <a className="flex items-center mt-6 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            See all projects{' '}
            <HiOutlineArrowNarrowRight className="h-6 w-6 ml-2" />
          </a>
        </Link>
        <span className="h-16" />
      </div>
    </Container>
  );
}
