export type Career = {
  title: string;
  description: string;
  time: string;
  type: string;
  url: string;
  tech: string[];
  logo: string;
};

export const career: Array<Career> = [
  {
    title: 'neend.app',
    description:
      'I worked with a really cool problem statement that aims to solve insomnia problems among indians. I refactored the codebase to make it more readable and maintainable. Directly worked with founder and PM to understand product requirements. I picked up and learnt react native from ground up during my internship.',

    time: 'Dec 2021 - May 2022 (6M)',
    type: 'Frontend Development Intern',
    url: 'https://neend.app/',
    tech: ['React Native', 'AWS', 'Firebase', 'Redux'],
    logo: 'https://pbs.twimg.com/profile_images/1490584086959648768/dkUZt-U4_400x400.jpg'
  },
  {
    title: 'neoG Camp.',
    description:
      'I worked for neoG Camp as an web development intern. Directly managed deployment workflows through Github actions and Azure. Bootstrapped entire monorepo with TypeScript for hassle-free headstart. I successfully integrated authentication system, internal tools and dashboard that benefitted neoG Camp.',
    time: 'Jun 2021 - Oct 2021 (5M)',
    type: 'Full Stack Development Intern',
    url: 'https://neog.camp/',
    tech: ['Next.JS', 'Node', 'TypeScript', 'MongoDB', 'Express', 'React'],
    logo: 'https://neog-lms.vercel.app/favicon.png'
  }
];
