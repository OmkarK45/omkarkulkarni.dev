import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Omkar Kulkarni">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hello! I'm Omkar. I started learning web development in May 2020,
            and I fell in love with it ever since.
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}
