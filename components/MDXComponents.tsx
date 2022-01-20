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

import React from 'react';
import { LightBoxImage } from './LightboxImage';

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
    <code {...props} className="relative">
      {language && (
        <div className="absolute -top-5 px-3 py-1 bg-gray-800 text-white border border-t-0 border-gray-600 rounded-b-md left-0">
          <span className="font-medium  select-none ">{language}</span>
        </div>
      )}
      <div className="mt-5">{props.children}</div>
    </code>
  );
}

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
  LightBoxImage
};

export default MDXComponents;
