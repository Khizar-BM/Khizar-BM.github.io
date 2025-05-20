"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-pattern noise opacity-5 z-[-1]" />
      <div className="absolute inset-0 gradient-bg z-[-1]" />
      
      {/* Hero content */}
      <div className="container mx-auto z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 text-primary text-sm gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              <span className="text-foreground">I'm Khizar,</span> 
              <br />
              <span className="gradient-text">Software Engineer</span> 
              <br />
              <span className="text-foreground">&</span> <span className="gradient-text">AI Specialist</span>
            </h1>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Crafting elegant solutions to complex problems with code and
              cutting-edge AI technologies. Focused on creating premium, sophisticated
              experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-5 pt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button className="px-6 py-6 rounded-md btn-elegant">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="px-6 py-6 rounded-md">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-5 text-sm text-muted-foreground pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="h-px w-12 bg-border"></div>
              <span>Trusted by innovative teams worldwide</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Elegant image container */}
              <div className="aspect-[4/5] relative rounded-md overflow-hidden elegant-border">
                <div className="absolute inset-0 bg-muted/30 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl font-light tracking-wider">KM</div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 border border-accent/20"></div>
                <div className="absolute -top-2 -left-2 w-24 h-24 border border-primary/20"></div>
              </div>
              
              {/* Subtle floating elements */}
              <motion.div 
                className="absolute top-8 -right-4 py-2 px-4 bg-background border border-border rounded-sm text-sm text-muted-foreground shadow-sm frosted-card"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Software Architecture
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 py-2 px-4 bg-background border border-border rounded-sm text-sm text-muted-foreground shadow-sm frosted-card"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                AI & Machine Learning
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
} 