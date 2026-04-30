import {
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
} from "react-icons/si";

export const toolUsed = [
  {
    name: "React",
    description:
      "Architecting modern, high-performance SPAs with reusable component logic and reactive state management.",
    icon: <SiReact className="text-[#61DAFB]" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    description:
      "Building fast, SEO-optimised full-stack React applications with server-side rendering and static generation.",
    icon: <SiNextdotjs />,
    category: "Frontend",
  },
  {
    name: "Python",
    description:
      "Powering AI research, machine learning pipelines, data processing, and robust backend ecosystems.",
    icon: <SiPython className="text-[#3776AB]" />,
    category: "AI & Backend",
  },
  {
    name: "FastAPI",
    description:
      "High-performance Python APIs with automatic documentation, async support, and type-safe request handling.",
    icon: <SiFastapi className="text-[#009688]" />,
    category: "AI & Backend",
  },
  {
    name: "NestJS",
    description:
      "Scalable Node.js server-side framework built with TypeScript, ideal for complex enterprise architectures.",
    icon: <SiNestjs className="text-[#E0234E]" />,
    category: "Backend",
  },
  {
    name: "Node.js",
    description:
      "Building event-driven, non-blocking server-side applications — the backbone of the MERN stack.",
    icon: <SiNodedotjs className="text-[#339933]" />,
    category: "Backend",
  },
  {
    name: "C#",
    description:
      "Developing secure, high-throughput backend systems and enterprise-grade desktop or cloud applications.",
    icon: <SiSharp className="text-[#239120]" />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    description:
      "Designing flexible, scalable NoSQL schemas for complex, data-driven applications requiring agile iteration.",
    icon: <SiMongodb className="text-[#47A248]" />,
    category: "Database",
  },
  {
    name: "MySQL / SQL",
    description:
      "Managing relational databases with structured, optimised queries for efficient transactional data handling.",
    icon: <SiMysql className="text-[#4479A1]" />,
    category: "Database",
  },
  {
    name: "Tailwind CSS",
    description:
      "Rapidly styling responsive, pixel-perfect interfaces with a utility-first CSS framework built for scale.",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    category: "Styling",
  },
];
