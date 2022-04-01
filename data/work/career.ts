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
      "I'm currently working as a frontend engineering intern. I am currently focusing on React Native development of the app.",
    time: 'Dec 2021 - Present',
    type: 'Frontend Development Intern',
    url: 'https://neend.app/',
    tech: ['React Native', 'AWS', 'Firebase', 'Rust', 'Redux'],
    logo: 'https://pbs.twimg.com/profile_images/1490584086959648768/dkUZt-U4_400x400.jpg'
  },
  {
    title: 'neoG Camp.',
    description:
      'I worked for neoG Camp as an web development intern. I successfully integrated authentication system, internal tools and dashboard that benefitted neoG Camp.',
    time: 'Jun 2021 - Oct 2021',
    type: 'Full Stack Development Intern',
    url: 'https://neog.camp/',
    tech: ['Next.JS', 'Node', 'TypeScript', 'MongoDB', 'Express', 'React'],
    logo: 'https://neog-lms.vercel.app/favicon.png'
  }
];
