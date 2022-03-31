import type { Action } from 'kbar';
import router from 'next/router';

import {
  HiOutlineCollection,
  HiOutlineDesktopComputer,
  HiOutlineDownload,
  HiOutlineDuplicate,
  HiOutlineHeart,
  HiOutlinePencil,
  HiOutlineSparkles,
  HiOutlineTerminal
} from 'react-icons/hi';

import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';

const SECTIONS = {
  blogs: 'Blogs',
  projects: 'Projects',
  dashboard: 'Dashboard',
  snippets: 'Snippets',
  home: 'Home',
  about: 'About',
  uses: 'Uses',
  tweets: 'Tweets',
  goto: 'Go to',
  general: 'General',
  socials: 'Socials'
};

export const actions: Array<Action> = [
  {
    id: 'download-resume',
    name: 'Download my resume',
    keywords: 'resume works experience internship hire',
    perform: () =>
      window.open(
        'https://drive.google.com/file/d/1At_ngmLUVgGqEI7RMCpU7ymysQxnnaYM/view?usp=sharing',
        '_blank'
      ),
    icon: HiOutlineDownload,
    section: SECTIONS.general
  },
  {
    id: 'copy-url',
    name: 'Copy URL',
    keywords: 'url copy',
    perform: () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
    },
    icon: HiOutlineDuplicate,
    section: SECTIONS.general
  },
  {
    id: 'blog',
    name: 'Writing',
    shortcut: ['b'],
    keywords: 'writing words blogs publications',
    perform: () => router.push('/blog'),
    section: SECTIONS.goto,
    subtitle: 'My thoughts on software engineering and React.JS',
    icon: HiOutlinePencil
  },
  {
    id: 'projects',
    name: 'Projects',
    shortcut: ['p'],
    keywords: 'creating projects',
    perform: () => router.push('/projects'),
    section: SECTIONS.goto,
    subtitle: 'Showcase of my projects I build over the last year.',
    icon: HiOutlineSparkles
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    shortcut: ['d'],
    keywords: 'dashboard spotify songs',
    perform: () => router.push('/dashboard'),
    section: SECTIONS.goto,
    subtitle:
      "Checkout my Top 10 Spotify® tracks. Song that I'm currently listening",
    icon: HiOutlineCollection
  },
  {
    id: 'snippets',
    name: 'Snippets',
    shortcut: ['s'],
    keywords: 'code snippets',
    perform: () => router.push('/snippets'),
    section: SECTIONS.goto,
    subtitle: 'Code snippets I use in my projects.',
    icon: HiOutlineTerminal
  },
  {
    id: 'uses',
    name: 'Uses',
    shortcut: ['u'],
    keywords: 'uses laptop phone wfh setup pc',
    perform: () => router.push('/uses'),
    section: SECTIONS.goto,
    subtitle: 'Gear that I use that make me productive',
    icon: HiOutlineDesktopComputer
  },
  {
    id: 'about',
    name: 'About Me',
    keywords: 'about me',
    perform: () => router.push('/about'),
    section: SECTIONS.goto,
    subtitle: 'My story and my life so far.',
    icon: HiOutlineHeart
  },
  {
    id: 'social-github',
    name: 'GitHub',
    keywords: 'github',
    perform: () => window.open('https://github.com/omkark45', '_blank'),
    section: SECTIONS.socials,
    icon: AiOutlineGithub
  },
  {
    id: 'social-twitter',
    name: 'Twitter',
    keywords: 'twitter',
    perform: () => window.open('https://twitter.com/omkar_k45', '_blank'),
    section: SECTIONS.socials,
    icon: AiOutlineTwitter
  }
];
