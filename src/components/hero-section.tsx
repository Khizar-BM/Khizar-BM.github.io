"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center md:order-2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="avatar-container mx-auto shadow-md">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-5xl font-light">KM</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Text Content */}
          <div className="text-center md:text-left md:order-1">
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Khizar Mohammed
              </h1>
              
              <h2 className="text-xl md:text-2xl text-primary font-medium mb-3">
                Data Sorcerer
              </h2>
              
              <p className="text-muted-foreground max-w-md mx-auto md:mx-0 mb-8">
                As a passionate data scientist with expertise in machine learning, AI, and data 
                analytics, I thrive on the challenges of exploring complex data landscapes and 
                discovering meaningful patterns that drive innovation.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button className="btn-simple">
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline">
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 