"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CTO",
    company: "TechVision AI",
    content: "Working with Khizar was an incredible experience. Their expertise in AI and software engineering helped us transform our product from a simple idea to a robust solution.",
    avatar: "AJ"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Lead",
    company: "InnovateLab",
    content: "Khizar's attention to detail and commitment to excellence made a huge difference in our project. Their ability to balance technical expertise with creative solutions is outstanding.",
    avatar: "SC"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Founder",
    company: "DataFlow Inc",
    content: "We needed someone who could handle both complex engineering challenges and understand our business needs. Khizar delivered on all fronts with impressive results.",
    avatar: "MR"
  },
  {
    id: 4,
    name: "Emma Peterson",
    role: "Engineering Manager",
    company: "NextGen Systems",
    content: "Khizar's deep knowledge of modern frameworks and AI technologies helped us accelerate our development process. Their work consistently exceeded our expectations.",
    avatar: "EP"
  }
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout>()
  
  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  // Parallax effect on mouse move
  useEffect(() => {
    if (!containerRef.current) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const container = containerRef.current!
      const rect = container.getBoundingClientRect()
      
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (clientX - centerX) / 25
      const deltaY = (clientY - centerY) / 25
      
      const quoteIcons = container.querySelectorAll('.quote-icon')
      quoteIcons.forEach((icon, i) => {
        const factor = i % 2 === 0 ? 1 : -1
        if (icon instanceof HTMLElement) {
          icon.style.transform = `translate(${deltaX * factor}px, ${deltaY * factor}px)`
        }
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(nextTestimonial, 6000)
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [])
  
  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
  }
  
  const resumeAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
    autoplayRef.current = setInterval(nextTestimonial, 6000)
  }
  
  // Variants for animations
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    })
  }
  
  return (
    <section 
      id="testimonials" 
      className="relative py-20 overflow-hidden"
      ref={containerRef}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 quote-icon opacity-10">
        <Quote size={128} className="text-primary" />
      </div>
      <div className="absolute bottom-20 left-20 w-24 h-24 quote-icon opacity-10">
        <Quote size={96} className="text-secondary" />
      </div>
      <div className="absolute top-40 left-1/4 w-16 h-16 quote-icon opacity-10">
        <Quote size={64} className="text-accent" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Client Testimonials</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Feedback from some of the amazing people and companies I've had the pleasure to work with.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial card */}
          <div className="glass rounded-2xl p-1 animated-border">
            <div className="py-12 px-6 md:px-12 rounded-2xl backdrop-blur-sm">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full glass flex items-center justify-center text-2xl md:text-3xl font-bold relative z-10 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                      <span className="relative">{testimonials[activeIndex].avatar}</span>
                    </div>
                    <motion.div 
                      className="absolute -bottom-2 -right-2 w-full h-full rounded-full border-2 border-primary"
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                      }}
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4 relative">
                      <Quote size={36} className="absolute -top-2 -left-2 text-primary/20" />
                      <p className="text-lg md:text-xl italic relative z-10 pl-6">
                        {testimonials[activeIndex].content}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold gradient-text">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-foreground/70">
                        {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-primary scale-125" 
                    : "bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 text-foreground shadow-md pointer-events-auto"
              onClick={prevTestimonial}
            >
              <ChevronLeft />
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 text-foreground shadow-md pointer-events-auto"
              onClick={nextTestimonial}
            >
              <ChevronRight />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 