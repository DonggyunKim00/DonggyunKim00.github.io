export interface SKILL_ITEM {
  type: 'Frontend' | 'Backend' | 'DevOps';
  icon: {
    src: string;
    alt: string;
  };
  name: string;
}

export const SKILL_ITEMS: SKILL_ITEM[] = [
  // Frontend
  {
    type: 'Frontend',
    icon: { src: '/skill/javascript.png', alt: 'JavaScript' },
    name: 'JavaScript',
  },
  {
    type: 'Frontend',
    icon: { src: '/skill/typescript.png', alt: 'TypeScript' },
    name: 'TypeScript',
  },
  {
    type: 'Frontend',
    icon: { src: '/skill/react.png', alt: 'React' },
    name: 'React',
  },
  {
    type: 'Frontend',
    icon: { src: '/skill/nextjs.png', alt: 'Next.js' },
    name: 'Next.js',
  },

  // Backend
  {
    type: 'Backend',
    icon: { src: '/skill/nodejs.webp', alt: 'Node.js' },
    name: 'Node.js',
  },
  {
    type: 'Backend',
    icon: { src: '/skill/supabase.png', alt: 'Supabase' },
    name: 'Supabase',
  },
  {
    type: 'Backend',
    icon: { src: '/skill/redis.png', alt: 'Redis' },
    name: 'Redis',
  },

  // DevOps
  {
    type: 'DevOps',
    icon: { src: '/skill/docker.png', alt: 'Docker' },
    name: 'Docker',
  },
  {
    type: 'DevOps',
    icon: { src: '/skill/vercel.webp', alt: 'Vercel' },
    name: 'Vercel',
  },
  {
    type: 'DevOps',
    icon: { src: '/skill/google-analytics.png', alt: 'Google Analytics' },
    name: 'Google Analytics',
  },
];
