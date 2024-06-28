export type Career = {
  title: string;
  description: string;
  time: string;
  type: string;
  url: string;
  logo: string;
};

import { differenceInYears, differenceInMonths, subYears } from 'date-fns';

function calculateDifference(startDate: Date, endDate: Date) {
  let years = differenceInYears(endDate, startDate);
  let months = differenceInMonths(subYears(endDate, years), startDate);

  return `${years} years ${months} months`;
}

export const career: Array<Career> = [
  {
    title: 'smallcase',
    description:
      'I work as a SDE 2 in the Experience team at smallcase. My team focuses on shipping new features on the smallcase app (over 50,00,000+ downloads) and smallcase.com. I work with React Native, TypeScript & Next.JS',

    time: `June 2022 - Present • Full time • ${calculateDifference(
      new Date('2022-06-06'),
      new Date(Date.now())
    )}`,
    type: 'SDE 2',
    url: 'https://smallcase.com/',
    logo: '/static/images/smallcase.png'
  },
  {
    title: 'neend.app',
    description:
      'During my internship, I was directly involved in shipping different features for the neend mobile app. I learnt React Native and its usage in enterprise level applications.',

    time: 'Dec 2021 - May 2022 • 6 months',
    type: 'Frontend Development Intern',
    url: 'https://neend.app/',
    logo: 'https://pbs.twimg.com/profile_images/1490584086959648768/dkUZt-U4_400x400.jpg'
  }
  // {
  //   title: 'neoG Camp.',
  //   description:
  //     'Directly managed deployment workflows through Github actions and Azure. Bootstrapped entire monorepo with TypeScript for hassle-free headstart. I successfully integrated authentication system, internal tools and dashboard that benefitted neoG Camp.',
  //   time: 'Jun 2021 - Oct 2021 • 5 months',
  //   type: 'SDE Intern',
  //   url: 'https://neog.camp/',
  //   logo: 'https://neog-lms.vercel.app/favicon.png'
  // }
];
