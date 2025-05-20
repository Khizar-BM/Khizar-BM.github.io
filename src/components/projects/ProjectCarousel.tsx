"use client";

import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "Modern, responsive e-commerce platform with product filtering and user authentication.",
    imageSrc: "https://placehold.co/600x450/111827/FFFFFF?text=Project+1",
    imageAlt: "E-commerce Website",
    tags: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "AI Chat Interface",
    description: "Interactive chat interface using natural language processing with API integration.",
    imageSrc: "https://placehold.co/600x450/111827/FFFFFF?text=Project+2",
    imageAlt: "AI Chat Interface",
    tags: ["Python", "React", "OpenAI"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio site using responsive design and dark/light mode.",
    imageSrc: "https://placehold.co/600x450/111827/FFFFFF?text=Project+3",
    imageAlt: "Portfolio Website",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Analytics Platform",
    description: "ML-powered platform predicting trends with actionable insights.",
    imageSrc: "https://placehold.co/600x450/111827/FFFFFF?text=Project+4",
    imageAlt: "Analytics Platform",
    tags: ["Python", "scikit-learn"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 5,
    title: "Task Manager",
    description: "Task management app with drag-and-drop interface and reminders.",
    imageSrc: "https://placehold.co/600x450/111827/FFFFFF?text=Project+5",
    imageAlt: "Task Manager",
    tags: ["Vue.js", "Firebase"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat app with WebSocket integration and file sharing.",
    imageSrc: "https://placehold.co/600x450/111827/FFFFFF?text=Project+6",
    imageAlt: "Chat Application",
    tags: ["Node.js", "Socket.io"],
    demoLink: "#",
    codeLink: "#"
  }
];

export default function ProjectCarousel() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Calculate visible items based on viewport
  const calculateVisibleItems = () => {
    if (typeof window === 'undefined') return 3;
    
    const width = window.innerWidth;
    if (width < 640) {
      return 1; // Mobile: show 1
    } else if (width < 1024) {
      return 2; // Tablet: show 2
    } else {
      return 3; // Desktop: show 3
    }
  };
  
  // Initialize carousel on mount
  useEffect(() => {
    const handleResize = () => {
      const newVisibleItems = calculateVisibleItems();
      if (newVisibleItems !== visibleItems) {
        setVisibleItems(newVisibleItems);
        // Ensure current position is still valid with new visible items count
        setCurrentPosition(prev => Math.min(prev, projects.length - newVisibleItems));
      }
    };
    
    // Set initial values
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visibleItems]);
  
  // Move carousel
  const moveCarousel = (position: number) => {
    // Clamp the position to valid range
    const maxPosition = projects.length - visibleItems;
    const newPosition = Math.max(0, Math.min(position, maxPosition));
    setCurrentPosition(newPosition);
  };
  
  // Carousel control handlers
  const handlePrevClick = () => moveCarousel(currentPosition - 1);
  const handleNextClick = () => moveCarousel(currentPosition + 1);
  const handleDotClick = (index: number) => moveCarousel(index);
  
  return (
    <div className="mb-12">
      {/* Carousel container */}
      <div className="relative mb-6">
        {/* Previous button */}
        <button 
          id="carousel-prev" 
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center shadow-sm hover:bg-background transition-colors
            ${currentPosition === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePrevClick}
          aria-label="Previous project"
          aria-disabled={currentPosition === 0}
        >
          <ChevronLeft size={20} />
        </button>
        
        {/* Carousel track */}
        <div className="overflow-hidden px-4">
          <div 
            id="carousel-track" 
            ref={trackRef}
            className="flex gap-4 transition-transform duration-500"
            style={{ 
              transform: `translateX(-${currentPosition * (330 + 16)}px)` 
            }}
          >
            {projects.map(project => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                tags={project.tags}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
        </div>
        
        {/* Next button */}
        <button 
          id="carousel-next" 
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center shadow-sm hover:bg-background transition-colors
            ${currentPosition === projects.length - visibleItems ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNextClick}
          aria-label="Next project"
          aria-disabled={currentPosition === projects.length - visibleItems}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* Carousel dots */}
      <div id="carousel-dots" className="flex justify-center gap-2 mt-6">
        {Array.from({ length: projects.length - visibleItems + 1 }).map((_, index) => (
          <button 
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentPosition ? 'bg-primary' : 'bg-card border border-border'}`} 
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
} 