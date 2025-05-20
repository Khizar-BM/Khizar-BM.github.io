"use client"

import { useState, useEffect } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import TestimonialsSection from "@/components/testimonials-section"
import TimelineSection from "@/components/timeline-section"
import ChatBubble from "@/components/chat-bubble"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  
  // Simulate loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  
  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100
      
      sections.forEach(section => {
        const sectionId = section.getAttribute('id') || ''
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "timeline", label: "Journey" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" }
  ]
  
  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="text-4xl font-bold gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Khizar.dev
            </motion.div>
            <motion.div
              className="absolute bottom-10 w-40 h-1 bg-muted rounded-full overflow-hidden"
              initial={{ width: "10rem" }}
            >
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content */}
      <div className="min-h-screen">
        {/* Header/Navbar */}
        <header className="sticky top-0 z-10 backdrop-blur-md bg-background/70 border-b">
          <div className="container mx-auto flex justify-between items-center py-4">
            <div className="font-bold text-xl gradient-text">Khizar.dev</div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <a 
                  key={item.id}
                  href={`#${item.id === "home" ? "" : item.id}`}
                  className={`relative py-2 transition-colors group ${
                    activeSection === item.id ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`}
                  onClick={(e) => {
                    if (item.id === "home") {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  }}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${
                      activeSection === item.id ? "scale-x-100" : ""
                    }`}
                  />
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <ModeToggle />
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
                  {menuOpen ? (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container mx-auto py-4 flex flex-col space-y-4 bg-background/90 backdrop-blur-md">
                  {navItems.map(item => (
                    <a 
                      key={item.id}
                      href={`#${item.id === "home" ? "" : item.id}`}
                      className={`py-2 px-4 rounded-md ${
                        activeSection === item.id 
                          ? "bg-primary/10 text-primary" 
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                      onClick={(e) => {
                        setMenuOpen(false)
                        if (item.id === "home") {
                          e.preventDefault()
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main>
          <section id="home">
            <HeroSection />
          </section>
          
          <SkillsSection />
          
          <ProjectsSection />
          
          <TimelineSection />
          
          <TestimonialsSection />
          
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="border-t py-8 bg-gradient-to-b from-transparent to-muted/20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="gradient-text font-bold text-xl mb-2">Khizar.dev</div>
                <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Khizar. All rights reserved.</p>
              </div>
              
              <div className="flex space-x-8">
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Scroll to top button */}
        <AnimatePresence>
          {activeSection !== "home" && (
            <motion.button
              className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg hover:bg-primary transition-colors z-20"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat bubble */}
        <ChatBubble />
      </div>
    </>
  )
}
