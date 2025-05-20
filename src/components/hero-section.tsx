"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="section bg-background pt-32 md:pt-40 pb-24 relative">
    
      
      {/* Radial gradient highlight */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[600px] opacity-[1.5] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)/15%) 0%, transparent 60%)'
        }}
      ></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profile Image */}
          <div className="mb-10">
            <div className="avatar border-4 border-background relative">
              {/* Replace with your actual image */}
              <div className="bg-card flex items-center justify-center w-full h-full">
                <span className="text-4xl font-light">VK</span>
              </div>
            </div>
          </div>
          
          {/* Name & Title */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              Khizar Bin Muzaffar
            </h1>
            
            <div className="inline-flex items-center mb-7">
              <div className="h-px w-5 bg-primary/40 mr-3"></div>
              <h2 className="text-primary text-xl md:text-2xl">
                Data Sorcerer
              </h2>
              <div className="h-px w-5 bg-primary/40 ml-3"></div>
            </div>
          </div>
          
          {/* Description */}
          <p className="dark-mode-text max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
            As a passionate data scientist, with expertise in machine learning, AI, and data 
            analytics, I thrive on the challenges of exploring complex data landscapes and 
            discovering meaningful patterns that drive innovation.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-5 justify-center">
            <Button className="px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="outline" className="px-8 py-6 border-border hover:border-primary/50 transition-colors">
              View Resume
            </Button>
          </div>
          
          {/* Simple social proof */}
          <div className="mt-16 flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-4">Worked with</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {/* Replace with actual company logos */}
              <div className="text-foreground/50 font-medium">COMPANY A</div>
              <div className="text-foreground/50 font-medium">COMPANY B</div>
              <div className="text-foreground/50 font-medium">COMPANY C</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 