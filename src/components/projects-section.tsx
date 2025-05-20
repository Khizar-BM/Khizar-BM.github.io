"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Project data
const projects = [
  {
    id: 1,
    title: "AI-Powered Assistant",
    description: "A sophisticated conversational agent built with state-of-the-art NLP techniques and LLMs to provide contextual assistance.",
    category: "Artificial Intelligence",
    image: "/project-1.jpg", // Replace with actual image path
    icon: "🤖",
    tags: ["React", "Python", "OpenAI"],
    link: "#"
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "A comprehensive dashboard for visualizing complex datasets with real-time updates and customizable views.",
    category: "Data Visualization",
    image: "/project-2.jpg", // Replace with actual image path
    icon: "📊",
    tags: ["D3.js", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 3,
    title: "Mobile Health App",
    description: "A mobile application that uses ML algorithms to provide personalized health recommendations and track fitness goals.",
    category: "Mobile Development",
    image: "/project-3.jpg", // Replace with actual image path
    icon: "📱",
    tags: ["React Native", "TensorFlow", "Firebase"],
    link: "#"
  }
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  
  return (
    <section id="projects" className="py-20 relative">
      {/* Section background */}
      <div className="absolute inset-0 gradient-grid z-[-1] opacity-50" />
      
      {/* Section heading */}
      <div className="container mx-auto mb-16">
        <div className="flex flex-col items-start gap-4">
          <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
            Case Studies
          </div>
          <div className="flex items-end gap-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
            <div className="hidden md:block h-px flex-grow bg-border" />
          </div>
          <p className="text-foreground/70 max-w-2xl text-lg">
            Showcasing a selection of my most impactful work in software engineering and AI development.
          </p>
        </div>
      </div>
      
      {/* Projects display */}
      <div className="container mx-auto">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div 
                className="relative h-[400px] rounded-xl frosted-card overflow-hidden cursor-pointer"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project background */}
                <div className="absolute inset-0 glass">
                  {/* Replace with actual image once available */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">
                    {project.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col">
                  <div className="mb-4">
                    <Badge variant="outline" className="bg-foreground/5 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div className="text-5xl mb-4">
                    {project.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div 
                    className="mt-auto"
                  >
                    <Button 
                      asChild 
                      variant="outline"
                      className={`w-full animated-border ${activeProject === project.id ? 'after:opacity-100' : 'after:opacity-0'}`}
                    >
                      <a href={project.link}>View Project</a>
                    </Button>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ opacity: activeProject === project.id ? 1 : 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* More projects link */}
        <div className="flex justify-center mt-16">
          <Button variant="ghost" className="text-primary group relative overflow-hidden">
            <span className="relative z-10">View All Projects</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/50 group-hover:h-full transition-all duration-300 -z-10" />
          </Button>
        </div>
      </div>
    </section>
  )
} 