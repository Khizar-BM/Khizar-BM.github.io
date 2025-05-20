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
    <div className="min-h-screen bg-background text-foreground relative">      
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
          <section id="home" className="relative">
            <HeroSection />
          </section>
          
          {/* About Me Section */}
          <section id="about" className="section relative">
            <SectionCornerGlow position="top-left-bottom-right" section="about" />
            <div className="container-custom">
              <SectionTitle 
                title="About Me"
                subtitle="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Get to know me section */}
                <div>
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
                    <a href="#contact" className="btn-primary">
                      CONTACT
                    </a>
                  </div>
                </div>
                
                {/* My skills section */}
                <SkillTabs />
              </div>
            </div>
          </section>
          
          {/* Projects Section with background */}
          <section id="projects-wrapper" className="relative">
            <SectionCornerGlow position="top-right-bottom-left" section="projects" />
            <ProjectsSection />
          </section>
          
          {/* Journey Section with background */}
          <section id="journey-wrapper" className="relative">
            <SectionCornerGlow position="top-left-bottom-right" section="journey" />
            <JourneySection />
          </section>
          
          {/* Contact Section with background */}
          <section id="contact-wrapper" className="relative">
            <SectionCornerGlow position="top-right-bottom-left" section="contact" />
            <ContactSection />
          </section>
        </main>
  
        {/* Footer */}
        <Footer />
        
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </div>
  )
} 