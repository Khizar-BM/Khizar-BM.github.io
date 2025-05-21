import React from 'react';
import { TimelineItem } from '@/components/journey/TimelineComponents';

// Define experience data
export const experienceData: TimelineItem[] = [
  {
    id: "exp-1",
    period: "2025",
    title: "Thesis Worker",
    organization: "Autoliv",
    description: (
      <ul>
        <li>Generated Synthetic Crash Data</li>
        <li>Implemented GAN and Diffusion based models</li>
        <li>Carried out thorough evaluations to ensure quality of the generated data</li>
      </ul>
    ),
    position: "right"
  },
  {
    id: "exp-2",
    period: "2024",
    title: "Summer Intern",
    organization: "Volvo Construction Equipment",
    description: (
      <ul>
        <li> Crafted a real-time human-awareness detection pipeline using ROS, enabling improved safety protocols on construction sites.</li>
        <li>Evaluated sensor performance (LiDAR, infrared, mono/stereo cameras) under diﬀerent weather conditions, optimizing site monitoring accuracy.</li>
        <li>Deployed a YOLOv8 segmentation model on embedded hardware, reducing
        model size by 80% and enhancing on-site data processing eﬃciency.</li>
      </ul>
    ),
    position: "left"
  },
  {
    id: "exp-3",
    period: "2021 - 2023",
    title: "Associate Software Engineer",
    organization: "Remotebase",
    description: (
      <ul>
        <li>Optimized client engagement by integrating a blog template and analytics
        tools, boosting conversions by 15%</li>
        <li>Implemented AWS-based data storage solutions, ensuring reliable and scalable management of interview recordings and form submissions.</li>
        <li>Developed a dynamic client pricing tool, resulting in a more eﬃcient sales
        process and a 20% reduction in client onboarding time.</li>
      </ul>
    ),
    position: "right"
  }
];

// Define education data
export const educationData: TimelineItem[] = [
  {
    id: "edu-1",
    period: "2023 - 2025",
    title: "Master's in Computer Science",
    organization: "Åbo Akademi University / Mälardalens University",
    description: "A double master's degree in Computer Science with an Erasmus Mundus Scholarship. Focused on artificial intelligence and software engineering with a thesis on synthetic data generation.",
    position: "right"
  },
  {
    id: "edu-2",
    period: "2019 - 2023",
    title: "Bachelor's in Computer Science",
    organization: "National University of Science and Technology, Pakistan",
    description: "Awarded the prestigious Presidential Gold Medal for securing the highest CGPA in the program. Completed coursework in algorithms, data structures and software engineering.",
    position: "left"
  },
  {
    id: "edu-3",
    period: "2020",
    title: "Deep Learning Specialization",
    organization: "Coursera (deeplearning.ai)",
    description: "Completed 5-course specialization covering neural networks, optimization algorithms, and deep learning applications.",
    position: "right"
  }
];

// Define journey tab info
export interface JourneyTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: TimelineItem[];
}

// Create journey tabs data
export const journeyTabs: JourneyTab[] = [
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    items: experienceData
  },
  {
    id: "education",
    label: "Education",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
      </svg>
    ),
    items: educationData
  }
]; 