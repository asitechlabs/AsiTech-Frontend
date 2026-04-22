import {
  SiReact,
  SiPython,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiSharp,
  SiMysql,
} from 'react-icons/si';

export const toolUsed = [
  {
    name: 'React',
    description:
      'Architecting modern, high-performance SPAs with reusable component logic.',
    icon: <SiReact className="text-[#61DAFB]" />,
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    description:
      'Building fast, SEO-optimized full-stack React applications with SSR and SSG.',
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    category: 'Frontend',
  },
  {
    name: 'Python',
    description:
      'Powering AI research, data pipelines, and robust backend ecosystems.',
    icon: <SiPython className="text-[#3776AB]" />,
    category: 'AI & Backend',
  },
  {
    name: 'C#',
    description:
      'Developing secure, scalable backend systems and enterprise applications.',
    icon: <SiSharp className="text-[#239120]" />,
    category: 'Backend',
  },
  {
    name: 'Node.js',
    description:
      'Building event-driven, non-blocking server-side applications.',
    icon: <SiNodedotjs className="text-[#339933]" />,
    category: 'Backend',
  },
  {
    name: 'MongoDB',
    description:
      'Designing scalable NoSQL schemas for complex, data-driven applications.',
    icon: <SiMongodb className="text-[#47A248]" />,
    category: 'Database',
  },
  {
    name: 'SQL',
    description:
      'Managing relational databases with structured queries for efficient data handling.',
    icon: <SiMysql className="text-[#4479A1]" />,
    category: 'Database',
  },
  {
    name: 'Tailwind CSS',
    description:
      'Rapidly styling responsive interfaces with utility-first CSS frameworks.',
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    category: 'Styling',
  },
];
