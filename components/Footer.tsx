import Link from 'next/link';
import Image from 'next/image';
import { HiHeart } from 'react-icons/hi';

import NowPlaying from 'components/NowPlaying';
import clsx from 'clsx';
import React from 'react';
import { trackEvent } from 'lib/analytics';
import LastUserLocation from './LastVisitor';

export const ExternalLink = ({
  href,
  children,
  className
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    onClick={() =>
      trackEvent('Clicked external link', {
        href
      })
    }
    className={clsx(
      'text-gray-500 hover:text-gray-600 transition cursor-newtab',
      className
    )}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

type Props = {
  location?: {
    city?: string;
    country?: string;
  };
};

export default function Footer(props: Props) {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="flex flex-col md:flex-row justify-around w-full">
        <NowPlaying />
        <div className="mb-8 flex-1 flex justify-start md:justify-end">
          <Image
            src="/sign.png"
            width="150px"
            height="70px"
            objectFit="contain"
            priority={true}
            className="transform -rotate-6 dark:invert pointer-events-none"
            alt="My Signature"
          />
        </div>
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
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
            <a
              onClick={() => trackEvent('Clicked uses CTA', {})}
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Uses
            </a>
          </Link>

          <Link href="/snippets">
            <a
              onClick={() => trackEvent('Clicked snippets CTA', {})}
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Snippets
            </a>
          </Link>
          <Link href="/tweets">
            <a
              onClick={() => trackEvent('Clicked tweets CTA', {})}
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Tweets
            </a>
          </Link>
        </div>
      </div>
      <LastUserLocation
        country={props?.location?.country ?? 'Unknown'}
        city={props?.location?.city ?? 'Unknown'}
      />
    </footer>
  );
}
