import React from 'react';
import { SkillSection } from '@/components/about/skills/DynamicSkillSection';

// Icons for categories
const MLIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2 text-primary" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const AITechIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2 text-primary" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
  </svg>
);

const DataToolsIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2 text-primary" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const FrontendIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2 text-primary" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const BackendIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2 text-primary" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const LibrariesIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2 text-primary" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2 text-primary" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
  </svg>
);

const DevOpsIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2 text-primary" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const AdditionalSkillsIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2 text-primary" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

// Define the skill data for ML category
export const mlSkillsData: SkillSection[] = [
  {
    title: "ML Frameworks",
    icon: <MLIcon />,
    displayType: "progress",
    skills: [
      { name: "Langchain", percentage: 90 },
      { name: "TensorFlow", percentage: 90 },
      { name: "PyTorch", percentage: 85 },
    ]
  },
  {
    title: "Advanced AI Technologies",
    icon: <AITechIcon />,
    displayType: "badge",
    skills: [
      { name: "LLMs" },
      { name: "Agents" },
      { name: "RAG" },
      { name: "NLP" },
      { name: "Computer Vision" },
      { name: "Deep Learning" }
    ]
  },
  {
    title: "Data Science Tools",
    icon: <DataToolsIcon />,
    displayType: "card",
    skills: [
      { name: "pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Jupyter" },
      { name: "OpenAI" },
      { name: "MCP" }
    ]
  }
];

// Define the skill data for Web Dev category
export const webDevSkillsData: SkillSection[] = [
  {
    title: "Frontend",
    icon: <FrontendIcon />,
    displayType: "progress",
    skills: [
      { name: "React", percentage: 90 },
      { name: "TypeScript", percentage: 85 },
      { name: "HTML & CSS", percentage: 85 }
    ]
  },
  {
    title: "Backend",
    icon: <BackendIcon />,
    displayType: "badge",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "RESTful APIs" },
      { name: "PostgreSQL" }
    ]
  },
  {
    title: "Libraries & Tools",
    icon: <LibrariesIcon />,
    displayType: "card",
    skills: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ]
  }
];

// Define the skill data for Other Skills category
export const otherSkillsData: SkillSection[] = [
  {
    title: "Database Technologies",
    icon: <DatabaseIcon />,
    displayType: "progress",
    skills: [
      { name: "SQL", percentage: 90 },
      { name: "MongoDB", percentage: 85 }
    ]
  },
  {
    title: "DevOps & System Tools",
    icon: <DevOpsIcon />,
    displayType: "badge",
    skills: [
      { name: "Git" },
      { name: "Linux" },
      { name: "Bash" },
      { name: "Docker" },
      { name: "CI/CD" }
    ]
  },
  {
    title: "Additional Skills",
    icon: <AdditionalSkillsIcon />,
    displayType: "card",
    skills: [
      { name: "openCV" },
      { name: "Database Design" },
      { name: "Data Structures" },
      { name: "AWS" },
      { name: "Prompt Engineering" },
    ]
  }
];

// Define skill tab info
export interface SkillTab {
  id: string;
  label: string;
  sections: SkillSection[];
}

// Define the skill tabs
export const skillTabs: SkillTab[] = [
  {
    id: "ml",
    label: "AI & Machine Learning",
    sections: mlSkillsData
  },
  {
    id: "webdev",
    label: "Web Development",
    sections: webDevSkillsData
  },
  {
    id: "other",
    label: "Other Skills",
    sections: otherSkillsData
  }
]; 