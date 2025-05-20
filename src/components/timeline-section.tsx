"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Building, Briefcase, ArrowRight, ArrowDown, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TimelineEvent {
  id: number
  title: string
  company: string
  period: string
  description: string
  type: "education" | "work" | "achievement"
  icon: React.ReactNode
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "Computer Science Degree",
    company: "University of Technology",
    period: "2016 - 2020",
    description: "Graduated with a focus on artificial intelligence and machine learning. Completed several research projects on natural language processing.",
    type: "education",
    icon: <Calendar className="h-8 w-8" />
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "TechStart Inc.",
    period: "2020 - 2021",
    description: "Worked on full-stack development using React, Node.js, and AWS. Implemented CI/CD pipelines and contributed to microservices architecture.",
    type: "work",
    icon: <Building className="h-8 w-8" />
  },
  {
    id: 3,
    title: "AI Engineer",
    company: "DataVision Technologies",
    period: "2021 - 2022",
    description: "Developed machine learning models for computer vision applications. Created APIs for model integration and trained custom neural networks.",
    type: "work",
    icon: <Briefcase className="h-8 w-8" />
  },
  {
    id: 4,
    title: "Lead Developer",
    company: "InnovateLab",
    period: "2022 - Present",
    description: "Leading a team of developers working on cutting-edge AI solutions. Architecting scalable systems and mentoring junior developers.",
    type: "work",
    icon: <Briefcase className="h-8 w-8" />
  }
]

export default function TimelineSection() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  
  // Interactive selection
  const handleEventClick = (id: number) => {
    setSelectedEvent(selectedEvent === id ? null : id)
  }
  
  // Reset selection on mobile when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setSelectedEvent(null)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <section id="timeline" className="relative py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 gradient-grid z-[-1]" />
      
      <div 
        ref={containerRef}
        className="container mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore the key milestones in my professional career.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />
          
          {/* Timeline events */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring"
                }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:ml-auto md:pr-16' : 'md:mr-auto md:pl-16'
                } ml-16 md:w-1/2`}
              >
                {/* Line to center */}
                <div 
                  className={`hidden md:block absolute top-6 w-12 h-0.5 bg-gradient-to-r ${
                    index % 2 === 0 
                      ? 'right-0 from-accent/50 to-primary' 
                      : 'left-0 from-primary to-accent/50'
                  }`}
                />
                
                {/* Mobile line */}
                <div className="absolute left-[-2rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent/50 md:hidden" />
                
                {/* Icon */}
                <motion.div 
                  className={`absolute top-0 left-[-3.5rem] md:left-auto ${
                    index % 2 === 0 ? 'md:right-[-2rem]' : 'md:left-[-2rem]'
                  } w-12 h-12 rounded-full glass flex items-center justify-center text-primary z-10`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
                  <span className="relative">{event.icon}</span>
                </motion.div>
                
                {/* Content card */}
                <motion.div
                  className={`glass p-1 rounded-xl ${
                    selectedEvent === event.id ? 'animated-border' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleEventClick(event.id)}
                >
                  <div className="p-5 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-xl">{event.title}</h3>
                      <span className="text-sm text-foreground/70 rounded-full px-3 py-1 bg-background/50">
                        {event.period}
                      </span>
                    </div>
                    
                    <p className="text-foreground/80 font-medium mb-2">
                      {event.company}
                    </p>
                    
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: selectedEvent === event.id ? "auto" : 0,
                        opacity: selectedEvent === event.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-foreground/70 mt-4">
                        {event.description}
                      </p>
                    </motion.div>
                    
                    <div className="mt-4 flex justify-end">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleEventClick(event.id)
                        }}
                      >
                        {selectedEvent === event.id ? (
                          <>
                            <span className="mr-1">Less</span>
                            <ArrowUp size={16} />
                          </>
                        ) : (
                          <>
                            <span className="mr-1">More</span>
                            <ArrowDown size={16} />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </motion.div>
                
                {/* Date dot */}
                <div 
                  className={`absolute top-6 left-[-2rem] md:left-auto ${
                    index % 2 === 0 ? 'md:right-[-1.5rem]' : 'md:left-[-1.5rem]'
                  } w-3 h-3 rounded-full bg-primary z-10`}
                >
                  <div className="absolute w-full h-full rounded-full bg-primary animate-ping opacity-75" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Present marker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: timelineEvents.length * 0.2 }}
            className="absolute left-4 md:left-1/2 bottom-0 transform md:-translate-x-1/2 flex flex-col items-center"
          >
            <div className="w-5 h-5 rounded-full glass border-2 border-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <span className="mt-2 gradient-text font-bold">Present</span>
          </motion.div>
        </div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild className="btn-3d">
            <a href="#contact">
              Let's Work Together <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 