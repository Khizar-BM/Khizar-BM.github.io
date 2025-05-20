"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import ProjectCarousel from "./ProjectCarousel";
import FeaturedProject from "./FeaturedProject";

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
    <section id="projects" className="section">
      <div className="container-custom">
        <SectionTitle 
          title="Projects"
          subtitle="Here you will find some of the personal and client projects that I created, each project containing its own case study"
        />
        
        {/* Featured Project */}
        <FeaturedProject 
          title={featuredProject.title}
          description={featuredProject.description}
          imageSrc={featuredProject.imageSrc}
          tags={featuredProject.tags}
          demoLink={featuredProject.demoLink}
          codeLink={featuredProject.codeLink}
        />
        
        <h3 className="text-xl font-bold mb-8 mt-12">Other Projects</h3>
        
        {/* Projects Carousel */}
        <ProjectCarousel />
        
        {/* View All Projects link */}
        <div className="flex justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 border border-border rounded-md hover:bg-card transition-colors text-sm font-medium flex items-center gap-2"
          >
            <span>View All Projects on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 