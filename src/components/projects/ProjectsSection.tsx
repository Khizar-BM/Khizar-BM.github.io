"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ProjectCarousel from "./ProjectCarousel";
import FeaturedProject from "./FeaturedProject";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

export function ProjectsSection() {
  const featuredProject = {
    title: "AI-Powered Personal Assistant",
    description: "A sophisticated conversational agent that leverages state-of-the-art natural language processing and machine learning to provide personalized assistance. Features include task management, information retrieval, and contextual recommendations with a seamless user experience.",
    imageSrc: "https://placehold.co/1200x800/111827/FFFFFF?text=Featured+Project",
    tags: ["React", "TypeScript", "OpenAI API", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#"
  };

  return (
    <motion.section 
      id="projects" 
      className="section"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="container-custom"
        variants={fadeIn}
      >
        <motion.div variants={fadeInUp}>
          <SectionTitle 
            title="Projects"
            subtitle="Here you will find some of the personal and client projects that I created, each project containing its own case study"
          />
        </motion.div>
        
        {/* Featured Project */}
        <motion.div 
          variants={fadeInUp}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <FeaturedProject 
            title={featuredProject.title}
            description={featuredProject.description}
            imageSrc={featuredProject.imageSrc}
            tags={featuredProject.tags}
            demoLink={featuredProject.demoLink}
            codeLink={featuredProject.codeLink}
          />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-bold mb-8 mt-12"
          variants={fadeInUp}
        >
          Other Projects
        </motion.h3>
        
        {/* Projects Carousel */}
        <motion.div variants={fadeInUp}>
          <ProjectCarousel />
        </motion.div>
        
        {/* View All Projects link */}
        <motion.div 
          className="flex justify-center"
          variants={fadeInUp}
        >
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 border border-border rounded-md hover:bg-card transition-colors text-sm font-medium flex items-center gap-2"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "hsl(var(--primary)/10)",
              borderColor: "hsl(var(--primary)/30)" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span>View All Projects on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 