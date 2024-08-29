import Link from 'next/link';
import Image from 'next/image';

import ProsCard from 'components/ProsCard';
import ConsCard from 'components/ConsCard';
import Gumroad from 'components/metrics/Gumroad';
import Analytics from 'components/metrics/Analytics';
import Step from 'components/Step';
import ImageWithTheme from 'components/ImageWithTheme';
import SplitImage from 'components/SplitImage';
import { Split } from 'components/SplitImage';
import { BlurImage } from 'components/BlurImage';
import { MdOutlineReplay } from 'react-icons/md';

import React, { useRef, useState } from 'react';
import { LightBoxImage } from './LightboxImage';
import clsx from 'clsx';
import { Snack } from 'mdx-embed/dist/components/snack';

export function Pre(props: React.ComponentPropsWithRef<'pre'>) {
  return (
    <pre {...props}>
      {props.children}
      <style jsx>{`
        pre {
          position: relative;
          border-radius: 8px;
        }
      `}</style>
    </pre>
  );
}

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return (
    <Image alt={props.alt} className="rounded-lg overflow-hidden" {...props} />
  );
}

function Code(props: React.ComponentProps<'code'>) {
  const language = props.className?.includes('language')
    ? props.className.replace('language-', '').replace(' code-highlight', '')
    : null;
  return (
    <code {...props}>
      <span className={clsx('inline-block', language && 'mt-5')}>
        {language && (
          <div className="absolute top-0 mb-10 px-3 py-1 bg-gray-800 text-white border border-t-0 border-gray-600 rounded-b-md left-0">
            <span className="font-medium select-none ">{language}</span>
          </div>
        )}
        {props.children}
      </span>
    </code>
  );
}

type VideoPlayerProps = {
  videoPath: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoPath }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full rounded-md"
        src={videoPath}
        autoPlay
        muted
        playsInline
        controls={false}
        onEnded={handleVideoEnd}
      />

      {!isPlaying && (
        <button
          onClick={handleReplay}
          className="gap-1 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold"
        >
          <MdOutlineReplay /> Replay
        </button>
      )}
    </div>
  );
};

const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
  Analytics,
  ConsCard,
  Gumroad,
  ProsCard,
  Step,
  code: Code,
  SplitImage,
  Split,
  LightBoxImage,
  BlurImage,
  pre: Pre,
  Snack,
  VideoPlayer
};

export default MDXComponents;
