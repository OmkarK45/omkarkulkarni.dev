export type Career = {
  title: string;
  description: string;
  time: string;
  type: string;
  url: string;
  logo: string;
};

export const career: Array<Career> = [
  {
    title: 'smallcase',
    description:
      'I work as a SDE-I at smallcase. smallcase enables you to invest in ideas rather than in stocks based on market capitalisation.',

    time: 'June 2022 - Present • Full time',
    type: 'SDE 1',
    url: 'https://smallcase.com/',
    logo: '/static/images/smallcase.png'
  },
  {
    title: 'neend.app',
    description:
      'During my internship, I had the opportunity to work on a fascinating problem statement that aimed to address insomnia issues among the Indian population. I was fortunate to collaborate closely with the founder and product manager to gain a comprehensive understanding of the product requirements. One of the most exciting aspects of my internship was the chance to learn React Native from scratch, as it was directly relevant to the project I was working on.',

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
