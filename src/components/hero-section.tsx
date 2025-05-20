"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const blobRef1 = useRef<HTMLDivElement>(null)
  const blobRef2 = useRef<HTMLDivElement>(null)
  const blobRef3 = useRef<HTMLDivElement>(null)

  // Handle mouse movement for magnetic blob effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      const deltaX = (clientX - centerX) * 0.015
      const deltaY = (clientY - centerY) * 0.015
      
      if (blobRef1.current && blobRef2.current && blobRef3.current) {
        blobRef1.current.style.transform = `translate(${deltaX * -1}px, ${deltaY * -1}px)`
        blobRef2.current.style.transform = `translate(${deltaX * 0.5}px, ${deltaY * 0.5}px)`
        blobRef3.current.style.transform = `translate(${deltaX * 0.3}px, ${deltaY * -0.8}px)`
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background blobs */}
      <div 
        ref={blobRef1}
        className="blob blob-1 w-[500px] h-[500px] left-[10%] top-[10%]"
      />
      <div 
        ref={blobRef2}
        className="blob blob-2 w-[450px] h-[450px] right-[15%] top-[15%]"
      />
      <div 
        ref={blobRef3}
        className="blob blob-3 w-[400px] h-[400px] left-[25%] bottom-[15%]"
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 gradient-grid z-[-1]" />

      {/* Hero content */}
      <div className="container mx-auto z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Software Engineer</span> 
              <br />& <span className="relative">
                AI Specialist
                <motion.svg 
                  className="absolute -bottom-4 md:-bottom-6 left-0 w-full h-3 md:h-4 text-primary"
                  viewBox="0 0 150 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path 
                    d="M2 8.5C16.6667 2.5 94 -0.7 148 8.5" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.svg>
              </span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-md">
              Building elegant solutions to complex problems with code and
              cutting-edge AI technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="btn-3d">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild className="sparkle-button">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
            
            <motion.div 
              className="flex items-center gap-4 text-sm text-foreground/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">G</div>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">A</div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">M</div>
              </div>
              <span>Trusted by innovative teams worldwide</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-[1px] border-primary/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-[10%] rounded-full border-[1px] border-secondary/20 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-[20%] rounded-full border-[1px] border-accent/20 animate-[spin_15s_linear_infinite]" />
              
              {/* Central image/avatar */}
              <div className="absolute inset-[30%] rounded-full glass flex items-center justify-center overflow-hidden border border-white/10 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                <span className="text-5xl font-bold relative z-10">KM</span>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute top-[15%] left-[20%] w-12 h-12 rounded-lg glass flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
                <span className="text-xl">⚛️</span>
              </div>
              <div className="absolute bottom-[25%] right-[15%] w-12 h-12 rounded-lg glass flex items-center justify-center animate-[float_7s_ease-in-out_infinite_-2s]">
                <span className="text-xl">🤖</span>
              </div>
              <div className="absolute top-[30%] right-[20%] w-12 h-12 rounded-lg glass flex items-center justify-center animate-[float_5s_ease-in-out_infinite_-1s]">
                <span className="text-xl">🧠</span>
              </div>
              <div className="absolute bottom-[15%] left-[25%] w-12 h-12 rounded-lg glass flex items-center justify-center animate-[float_8s_ease-in-out_infinite_-3s]">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-foreground/60">Scroll to explore</span>
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </div>
    </section>
  )
} 