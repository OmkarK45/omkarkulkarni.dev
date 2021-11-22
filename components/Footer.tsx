import Link from 'next/link';
import Image from 'next/image';
import { HiHeart } from 'react-icons/hi';

import NowPlaying from 'components/NowPlaying';

export const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition cursor-newtab"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full">
        <NowPlaying />
      </div>
      <div className="mb-8 mx-auto">
        <Image
          src="/sign.png"
          width="150px"
          height="70px"
          objectFit="contain"
          priority={true}
          className="transform -rotate-6 dark:invert"
        />
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/omkar_k45">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://instagram.com/omkar_k45">
            Instagram
          </ExternalLink>
          <ExternalLink href="https://github.com/omkark45">GitHub</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
          </Link>

          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
          <Link href="/tweets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </a>
          </Link>
        </div>
      </div>
      <p className="text-gray-500 inline-flex items-center">
        Portfolio by Lee Robinson. &copy; Lee Robinson. Used with permission{' '}
        {':)'}
      </p>
    </footer>
  );
}
