"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

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

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
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
  // Function to handle resume download
  const handleResumeDownload = () => {
    console.log("Resume downloaded from hero section at:", new Date().toISOString());
    // You can add analytics tracking here if needed
  };
  
  return (
    <section id="home" className="section bg-background pt-32 md:pt-40 pb-24 relative overflow-hidden">
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
      <div className="container-custom relative z-10 max-w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Left Content - Text */}
          <motion.div className="order-2 lg:order-1 text-center lg:text-left" variants={fadeInLeft}>
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
              className="dark-mode-text max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed text-lg"
              variants={fadeInUp}
            >
              I'm a software engineer who loves AI—especially building practical tools with large language models. I love solving complex logical problems and learning new things. I also play a lot of video games.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <motion.div whileHover={buttonHoverAnimation}>
                <Button className="px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" onClick={() => {
                  const contactSection = document.getElementById('contact-wrapper');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={buttonHoverAnimation}>
                <Button 
                  variant="outline" 
                  className="px-8 py-6 border-border hover:border-primary/50 transition-colors"
                  asChild
                >
                  <a 
                    href="/files/Resume_Khizar_Bin_Muzaffar.pdf" 
                    download="Resume_Khizar_Bin_Muzaffar.pdf"
                    onClick={handleResumeDownload}
                  >
                    <span>View Resume</span>
                    <Download className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Simple social proof */}
            <motion.div 
              className="mt-12 flex flex-col items-center lg:items-start"
              variants={fadeInUp}
            >
              <p className="text-sm text-muted-foreground mb-4">Worked with</p>
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                {/* Replace with actual company logos */}
                <motion.div 
                  className="text-foreground/50 font-medium"
                  whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                >
                  VOLVO CE
                </motion.div>
                <motion.div 
                  className="text-foreground/50 font-medium"
                  whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                >
                  AUTOLIV
                </motion.div>
                <motion.div 
                  className="text-foreground/50 font-medium"
                  whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                >
                  REMOTEBASE 
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={fadeInRight}
          >
            <motion.div 
              className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[550px] overflow-hidden rounded-2xl"
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(0, 0, 0, 0.15)",
                  "0 0 40px rgba(var(--primary), 0.2)",
                  "0 0 30px rgba(0, 0, 0, 0.15)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Image 
                src="/images/dp.jpeg" 
                alt="Khizar Bin Muzaffar" 
                fill
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 450px"
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: "center center",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 