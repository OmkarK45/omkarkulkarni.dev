import Link from 'next/link';

import Analytics from 'components/metrics/Analytics';
import Newsletter from 'components/metrics/Newsletter';
import Container from 'components/Container';
import GitHub from 'components/metrics/Github';
import Gumroad from 'components/metrics/Gumroad';
import TopTracks from 'components/TopTracks';
import { SiSpotify } from 'react-icons/si';

export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Omkar Kulkarni"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. Checkout my Top 10 Spotify®
            tracks. Song that I'm currently listening to will be shown in the
            below widget as well.
          </p>
        </div>
        <div className="flex flex-col w-full"></div>
        <div className="flex justify-between mb-4 mt-8 items-center w-full">
          <h2 className="font-bold text-3xl tracking-tight text-black dark:text-white">
            Top Tracks
          </h2>
          <div>
            <SiSpotify className="w-7 h-7 text-[#1DB954]" />
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
