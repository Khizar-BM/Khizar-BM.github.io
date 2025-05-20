"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import HeroSection from "@/components/hero-section"
import { SkillTabs } from "@/components/about/SkillTabs"
import { ProjectsSection } from "@/components/projects/ProjectsSection"
import { JourneySection } from "@/components/journey/JourneySection"
import { ContactSection } from "@/components/contact/ContactSection"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionCornerGlow } from "@/components/background/SectionBackground"

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
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY + 100
      
      sections.forEach(section => {
        const sectionId = section.getAttribute('id') || ''
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground relative"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >      
      {/* Content */}
      <div className="relative">
        {/* Header/Navbar */}
        <Header />
  
        <main className="relative">
          {/* Hero Background - explicitly placed at the top */}
          <div className="absolute top-0 left-0 right-0 h-screen">
            <SectionCornerGlow position="top-right-bottom-left" section="home" />
          </div>
          
          {/* Hero Section */}
          <motion.section 
            id="home" 
            className="relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <HeroSection />
          </motion.section>
          
          {/* About Me Section */}
          <motion.section 
            id="about-wrapper" 
            className="section relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionCornerGlow position="top-left-bottom-right" section="about" />
            <div className="container-custom">
              <SectionTitle 
                title="About Me"
                subtitle="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
              />
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
                variants={staggerContainer}
              >
                {/* Get to know me section */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I'm a <span className="text-foreground">Frontend Focused Web Developer</span> building and managing the 
                      front-end of Websites and Web Applications that leads to the success of 
                      the overall product. Check out some of my work in the <span className="text-foreground">Projects</span> section.
                    </p>
                    <p>
                      I also like sharing content related to the stuff that I have learned over the 
                      years in <span className="text-foreground">Web Development</span> so it can help other people of the Dev 
                      Community. Feel free to Connect or Follow me on my <a href="#" className="text-primary hover:underline">Linkedin</a> and
                      <a href="#" className="text-primary hover:underline ml-1">Instagram</a> where I post useful content related to Web Development and 
                      Programming
                    </p>
                    <p>
                      I'm open to <span className="text-foreground">Job</span> opportunities where I can contribute, learn and grow. If 
                      you have a good opportunity that matches my skills and experience then don't hesitate to <span className="text-foreground">contact</span> me.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a href="#contact-wrapper" className="btn-primary">
                      CONTACT
                    </a>
                  </div>
                </motion.div>
                
                {/* My skills section */}
                <motion.div variants={fadeInUp}>
                  <SkillTabs />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
          
          {/* Projects Section with background */}
          <motion.section 
            id="projects-wrapper" 
            className="relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionCornerGlow position="top-right-bottom-left" section="projects" />
            <ProjectsSection />
          </motion.section>
          
          {/* Journey Section with background */}
          <motion.section 
            id="journey-wrapper" 
            className="relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionCornerGlow position="top-left-bottom-right" section="journey" />
            <JourneySection />
          </motion.section>
          
          {/* Contact Section with background */}
          <motion.section 
            id="contact-wrapper" 
            className="relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionCornerGlow position="top-right-bottom-left" section="contact" />
            <ContactSection />
          </motion.section>
        </main>
  
        {/* Footer */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.footer>
        
        {/* Scroll to top button with animation */}
        <ScrollToTop />
      </div>
    </motion.div>
  )
} 