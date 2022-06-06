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
      'I worked with a really cool problem statement that aims to solve insomnia problems among Indians. Directly worked with founder and PM to understand product requirements. I picked up and learnt react native from ground up during my internship.',

    time: 'Dec 2021 - May 2022 • 6 months',
    type: 'Frontend Development Intern',
    url: 'https://neend.app/',
    logo: 'https://pbs.twimg.com/profile_images/1490584086959648768/dkUZt-U4_400x400.jpg'
  },
  {
    title: 'neoG Camp.',
    description:
      'Directly managed deployment workflows through Github actions and Azure. Bootstrapped entire monorepo with TypeScript for hassle-free headstart. I successfully integrated authentication system, internal tools and dashboard that benefitted neoG Camp.',
    time: 'Jun 2021 - Oct 2021 • 5 months',
    type: 'SDE Intern',
    url: 'https://neog.camp/',
    logo: 'https://neog-lms.vercel.app/favicon.png'
  }
];
