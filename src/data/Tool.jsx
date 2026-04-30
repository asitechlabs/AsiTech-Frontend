import {
  SiDocker,
  SiFastapi,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRobotframework,
  SiTypescript,
} from "react-icons/si";

export const toolUsed = [
  // ───────────────── FRONTEND ─────────────────
  {
    name: "React",
    description:
      "Building scalable SPAs with reusable components and reactive state architecture.",
    icon: <SiReact className="text-[#61DAFB]" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    description:
      "Full-stack React framework with SSR, SSG, and optimized performance for modern web apps.",
    icon: <SiNextdotjs />,
    category: "Frontend",
  },
  // {
  //   name: "Vue.js",
  //   description:
  //     "Progressive framework for building interactive UIs with reactive data binding.",
  //   icon: <SiVuedotjs className="text-[#42B883]" />,
  //   category: "Frontend",
  // },
  // {
  //   name: "Nuxt.js",
  //   description:
  //     "Vue-based full-stack framework with SSR, routing, and modular architecture.",
  //   icon: <SiNextdotjs className="text-[#00DC82]" />,
  //   category: "Frontend",
  // },

  // ───────────────── BACKEND ─────────────────
  // {
  //   name: "Node.js",
  //   description:
  //     "Event-driven backend runtime for scalable and high-performance APIs.",
  //   icon: <SiNodedotjs className="text-[#339933]" />,
  //   category: "Backend",
  // },
  {
    name: "FastAPI",
    description:
      "High-performance Python API framework with async support and auto documentation.",
    icon: <SiFastapi className="text-[#009688]" />,
    category: "Backend",
  },
  {
    name: "NestJS",
    description:
      "Enterprise-grade Node.js framework built with TypeScript for scalable backend systems.",
    icon: <SiNestjs className="text-[#E0234E]" />,
    category: "Backend",
  },

  // {
  //   name: "Laravel",
  //   description:
  //     "Elegant PHP framework for secure, structured and scalable backend development.",
  //   icon: <SiLaravel className="text-[#FF2D20]" />,
  //   category: "Backend",
  // },

  // ───────────────── LANGUAGES ─────────────────
  {
    name: "Python",
    description:
      "AI, automation, backend systems, and data science powerhouse language.",
    icon: <SiPython className="text-[#3776AB]" />,
    category: "Language",
  },
  // {
  //   name: "JavaScript",
  //   description:
  //     "Core language of the web powering frontend and backend development.",
  //   icon: <SiJavascript className="text-[#F7DF1E]" />,
  //   category: "Language",
  // },
  {
    name: "TypeScript",
    description:
      "Strongly typed JavaScript for scalable and maintainable applications.",
    icon: <SiTypescript className="text-[#3178C6]" />,
    category: "Language",
  },

  // ───────────────── DATABASE ─────────────────
  {
    name: "MongoDB",
    description:
      "Flexible NoSQL database for scalable, document-based applications.",
    icon: <SiMongodb className="text-[#47A248]" />,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    description:
      "Powerful relational database with advanced querying and JSON support.",
    icon: <SiPostgresql className="text-[#4169E1]" />,
    category: "Database",
  },
  // {
  //   name: "MySQL",
  //   description:
  //     "Reliable relational database for structured data and transactional systems.",
  //   icon: <SiMysql className="text-[#4479A1]" />,
  //   category: "Database",
  // },

  // ───────────────── STYLING ─────────────────
  // {
  //   name: "Tailwind CSS",
  //   description:
  //     "Utility-first CSS framework for fast, responsive UI development.",
  //   icon: <SiTailwindcss className="text-[#06B6D4]" />,
  //   category: "Styling",
  // },
  // {
  //   name: "Bootstrap",
  //   description:
  //     "Responsive UI framework with prebuilt components and grid system.",
  //   icon: <SiBootstrap className="text-[#7952B3]" />,
  //   category: "Styling",
  // },
  // {
  //   name: "ShadCN UI",
  //   description:
  //     "Modern component system built on Radix UI and Tailwind for elegant interfaces.",
  //   icon: <SiRadixui className="text-white" />,
  //   category: "Styling",
  // },

  // ───────────────── AI / AGENTS ─────────────────
  {
    name: "AI Chatbot",
    description:
      "Conversational AI systems for automated support, engagement, and interaction.",
    icon: <SiRobotframework className="text-[#10A37F]" />,
    category: "AI",
  },
  // {
  //   name: "AI Agent Systems",
  //   description:
  //     "Autonomous AI workflows for decision-making, automation, and task execution.",
  //   icon: <SiAndroid className="text-[#10A37F]" />,
  //   category: "AI",
  // },

  // ───────────────── DEVOPS ─────────────────
  {
    name: "Docker",
    description:
      "Containerization platform for consistent deployment across environments.",
    icon: <SiDocker className="text-[#2496ED]" />,
    category: "DevOps",
  },
];
