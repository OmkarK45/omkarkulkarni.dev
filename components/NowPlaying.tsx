import useSWR from 'swr';
import React, { useEffect } from 'react';
import { animate } from 'motion';
import { SiSpotify } from 'react-icons/si';

import fetcher from 'lib/fetcher';
import { NowPlayingSong } from 'lib/types';
import { trackEvent } from 'lib/analytics';

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)'
        ]
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
  }, []);

  return (
    <div className="w-auto flex items-end overflow-hidden">
      <span
        id="bar1"
        className="w-1 mr-[3px] h-2 bg-gray-300 dark:bg-gray-500 opacity-75"
      />
      <span
        id="bar2"
        className="w-1 mr-[3px] h-1 bg-gray-300 dark:bg-gray-500"
      />
      <span
        id="bar3"
        className="w-1 h-3 bg-gray-300 dark:bg-gray-500 opacity-80"
      />
    </div>
  );
}

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <div className="mx-auto flex-1 max-w-md w-full items-center sm:flex-row mb-8 animate-scale shadow-sm">
      <div className="relative flex items-center p-5 space-x-4 rounded-md border border-gray-200 dark:border-gray-700">
        <div className="flex justify-center items-center text-gray-900 dark:text-gray-500">
          {data?.isPlaying ? (
            <img
              className="w-16 shadow-sm"
              src={data?.albumImageUrl}
              alt={data?.album}
            />
          ) : (
            <SiSpotify size={32} color={'#1ED760'} />
          )}
        </div>

        <a
          onClick={() =>
            trackEvent('Clicked on now playing', {
              song: data?.title,
              artist: data?.artist
            })
          }
          href={data?.songUrl}
        >
          <div className="flex-1 w-full">
            <p className="font-medium text-black dark:text-gray-100">
              {data?.isPlaying
                ? data.title.substring(0, 50) + '...'
                : 'Not Listening'}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-300 max-w-max truncate">
              {data?.isPlaying
                ? data.artist.substring(0, 50) + '...'
                : 'Spotify'}
            </p>
          </div>
        </a>

        {data?.isPlaying && (
          <div className="absolute bottom-1.5 right-1.5">
            <AnimatedBars />
          </div>
        )}
      </div>
    </div>
  );
}
