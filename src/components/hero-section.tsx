"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="section bg-background pt-28 md:pt-36">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Profile Image */}
          <div className="avatar mb-6 border-4 border-background shadow-lg">
            {/* Replace with your actual image */}
            <div className="bg-muted flex items-center justify-center w-full h-full">
              <span className="text-4xl font-light">KM</span>
            </div>
          </div>
          
          {/* Name & Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Vinay Kumar
          </h1>
          
          <h2 className="text-primary text-xl md:text-2xl mb-6">
            Data Sorcerer
          </h2>
          
          {/* Description */}
          <p className="dark-mode-text max-w-2xl mx-auto mb-8">
            As a passionate data scientist, with expertise in machine learning, AI, and data 
            analytics, I thrive on the challenges of exploring complex data landscapes and 
            discovering meaningful patterns that drive innovation.
          </p>
          
          {/* Button */}
          <Button className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
} 