import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "FastAPI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {

    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],  
},

    {
  title: "FastAPI Backend Developer",
  companyName: "Self Projects & Learning",
  icon: backend,
  iconBg: "#E6DEDD",
  date: "2024 - Present",
  points: [
    "Building scalable backend systems using FastAPI for AI-driven applications.",
    "Designing and integrating REST APIs to handle user queries and external data sources.",
    "Implementing modular architecture with structured outputs for efficient data processing.",
    "Testing and optimizing API performance for reliability and scalability.",
  ],
},
  
  {
  title: "Backend Developer",
  companyName: "Self Projects & Learning",
  icon: backend,
  iconBg: "#383E56",
  date: "2024 - Present",
  points: [
    "Developing backend services for web applications using FastAPI and Node.js.",
    "Designing RESTful APIs for handling data processing and client-server communication.",
    "Working with databases like MongoDB to store, retrieve, and manage application data.",
    "Ensuring scalability, performance optimization, and clean code structure in backend systems.",
  ],
},
  
  {
    title: "AI Engineer (Intern)",
  companyName: "Self Projects & Learning",
  icon: creator,
  iconBg: "#383E56",
  date: "2024 - Present",
  points: [
    "Developing AI-based applications using APIs and modern backend frameworks like FastAPI.",
    "Designing modular systems that process user queries, fetch external data, and rank results using structured outputs.",
    "Working on end-to-end AI system development including data processing, model integration, and deployment.",
    "Continuously learning Machine Learning concepts and applying them in real-world projects.",
  ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
    "Sanjana has a strong interest in AI and consistently builds projects that demonstrate her problem-solving skills and understanding of backend systems.",
    name: "Faculty Mentor",
  designation: "Assistant Professor",
  company: "NIIT",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {testimonial:
    "Sanjana demonstrated strong dedication and technical skills during her internship, contributing effectively to backend development and API integration tasks.",
  name: "Team Lead",
  designation: "Backend Team",
  company: "Cloud Elevate Technology",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    
  testimonial:
    "Sanjana made valuable contributions during her internship at SyntexHub, showing strong skills in backend development and a keen ability to learn and adapt quickly.",
  name: "Project Mentor",
  designation: "Senior Developer",
  company: "SyntexHub",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "AI News Intelligence System",
  description:
    "An AI-powered application that processes user queries, fetches news from external APIs, and ranks results using a modular architecture with structured outputs for better relevance.",
  tags: [
    {
      name: "FastAPI",
      color: "blue-text-gradient",
    },
    {
      name: "AI",
      color: "green-text-gradient",
    },
    {
      name: "API",
      color: "pink-text-gradient",
    },
  ],
    image: carrent,
    sourceCodeLink: "https://github.com/Sanjana0024",
  },
  {
     name: "AI Chatbot Assistant",
  description:
    "Developed an AI-powered chatbot that can understand user queries and generate intelligent responses using natural language processing and API integration, providing a conversational interface for users.",
  tags: [
    {
      name: "AI",
      color: "blue-text-gradient",
    },
    {
      name: "NLP",
      color: "green-text-gradient",
    },
    {
      name: "FastAPI",
      color: "pink-text-gradient",
    },
  ],
    image: jobit,
    sourceCodeLink: "https://github.com/Sanjana0024",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Sanjana0024",
  },
  {
  name: "AI Multi-Agent Orchestrator",
  description:
    "Developed a multi-agent AI system that orchestrates multiple agents to process user queries, fetch data from external APIs, and generate structured, ranked responses using a modular architecture.",
  tags: [
    {
      name: "AI",
      color: "blue-text-gradient",
    },
    {
      name: "LLM",
      color: "green-text-gradient",
    },
    {
      name: "FastAPI",
      color: "pink-text-gradient",
    },
  ],
  image: jobit,
  sourceCodeLink: "https://github.com/Sanjana0024",
},
{
  name: "YouTube AI Transcriptor",
  description:
    "Developed an AI-powered system that extracts and transcribes audio from YouTube videos into text using speech-to-text models, enabling users to quickly access and analyze video content.",
  tags: [
    {
      name: "AI",
      color: "blue-text-gradient",
    },
    {
      name: "NLP",
      color: "green-text-gradient",
    },
    {
      name: "FastAPI",
      color: "pink-text-gradient",
    },
  ],
  image: jobit,
  sourceCodeLink: "https://github.com/Sanjana0024",
},
{
  name: "Virasat AI",
  description:
    "Developed an AI-powered application focused on preserving and exploring Indian cultural heritage, allowing users to discover traditions, historical information, and regional insights through an intelligent interface.",
  tags: [
    {
      name: "AI",
      color: "blue-text-gradient",
    },
    {
      name: "React",
      color: "green-text-gradient",
    },
    {
      name: "API",
      color: "pink-text-gradient",
    },
  ],
  image: jobit,
  sourceCodeLink: "https://github.com/Sanjana0024",
},
];

export { services, technologies, experiences, testimonials, projects };  