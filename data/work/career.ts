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
    title: 'neoG Camp. [Startup]',
    description:
      'I worked for neoG Camp as an web development intern. I successfully integrated authentication system, internal tools and dashboard that benefitted neoG Camp.',
    time: 'Jun 2021 - Oct 2021',
    type: 'type',
    url: 'https://neog.camp/',
    tech: ['Next.JS', 'Node', 'TypeScript', 'MongoDB', 'Express', 'React'],
    logo: 'https://media-exp1.licdn.com/dms/image/C560BAQGAaKUlU_c3Pw/company-logo_200_200/0/1607090848566?e=1645660800&v=beta&t=Wm7Ty8JNTrOXo2toWCWXPThnWTkNfp_eHV4PSPY3S1A'
  }
];
