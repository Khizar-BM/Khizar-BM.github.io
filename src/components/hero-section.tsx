"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.17, 0.67, 0.83, 0.67]
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const buttonHoverAnimation = {
  scale: 1.03,
  transition: { type: "spring", stiffness: 400, damping: 10 }
}

export default function HeroSection() {
  return (
    <section id="home" className="section bg-background pt-32 md:pt-40 pb-24 relative">
    
      
      {/* Radial gradient highlight */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[600px] opacity-[1.5] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)/15%) 0%, transparent 60%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Profile Image */}
          <motion.div 
            className="mb-10"
            variants={imageAnimation}
          >
            <motion.div 
              className="avatar border-4 border-background relative"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(0, 0, 0, 0.2)",
                  "0 0 30px rgba(var(--primary), 0.3)",
                  "0 0 20px rgba(0, 0, 0, 0.2)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {/* Replace with your actual image */}
              <div className="bg-card flex items-center justify-center w-full h-full">
                <span className="text-4xl font-light">VK</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Name & Title */}
          <motion.div variants={fadeInUp}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
              variants={fadeInUp}
            >
              Khizar Bin Muzaffar
            </motion.h1>
            
            <motion.div 
              className="inline-flex items-center mb-7"
              variants={fadeInUp}
            >
              <div className="h-px w-5 bg-primary/40 mr-3"></div>
              <h2 className="text-primary text-xl md:text-2xl">
                AI Engineer
              </h2>
              <div className="h-px w-5 bg-primary/40 ml-3"></div>
            </motion.div>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="dark-mode-text max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
            variants={fadeInUp}
          >
            As a passionate data scientist, with expertise in machine learning, AI, and data 
            analytics, I thrive on the challenges of exploring complex data landscapes and 
            discovering meaningful patterns that drive innovation.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap gap-5 justify-center"
            variants={fadeInUp}
          >
            <motion.div whileHover={buttonHoverAnimation}>
              <Button className="px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={buttonHoverAnimation}>
              <Button variant="outline" className="px-8 py-6 border-border hover:border-primary/50 transition-colors">
                View Resume
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Simple social proof */}
          <motion.div 
            className="mt-16 flex flex-col items-center"
            variants={fadeInUp}
          >
            <p className="text-sm text-muted-foreground mb-4">Worked with</p>
            <motion.div 
              className="flex flex-wrap justify-center gap-8 opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {/* Replace with actual company logos */}
              <motion.div 
                className="text-foreground/50 font-medium"
                whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              >
                COMPANY A
              </motion.div>
              <motion.div 
                className="text-foreground/50 font-medium"
                whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              >
                COMPANY B
              </motion.div>
              <motion.div 
                className="text-foreground/50 font-medium"
                whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              >
                COMPANY C
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 