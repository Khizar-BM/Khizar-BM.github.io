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
import { Menu, X } from "lucide-react"

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
    { id: "timeline", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" }
  ]
  
  return (
    <>
      {/* Elegant loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="text-3xl font-light tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-foreground">K</span>
              <span className="gradient-text">M</span>
            </motion.div>
            <motion.div
              className="absolute bottom-16 w-24 h-px bg-border overflow-hidden"
              initial={{ width: "6rem" }}
            >
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content */}
      <div className="min-h-screen">
        {/* Elegant header/Navbar */}
        <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b border-border/40">
          <div className="container mx-auto flex justify-between items-center py-5 px-6">
            <a href="#" className="text-xl tracking-wide">
              <span className="text-foreground font-light">Khizar</span>
              <span className="text-primary font-normal">.</span>
              <span className="text-foreground/70 font-light">dev</span>
            </a>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-10">
              {navItems.map(item => (
                <a 
                  key={item.id}
                  href={`#${item.id === "home" ? "" : item.id}`}
                  className={`relative py-1 px-1 tracking-wide text-sm transition-colors btn-elegant ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={(e) => {
                    if (item.id === "home") {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-5">
              <ModeToggle />
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden focus:outline-none rounded-md p-1"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-muted-foreground" />
                )}
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
                <div className="container mx-auto py-4 px-6 flex flex-col space-y-3 bg-background/95 backdrop-blur-sm border-t border-border/20">
                  {navItems.map(item => (
                    <a 
                      key={item.id}
                      href={`#${item.id === "home" ? "" : item.id}`}
                      className={`py-2 px-3 text-sm ${
                        activeSection === item.id 
                          ? "text-primary" 
                          : "text-muted-foreground"
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

        {/* Elegant Footer */}
        <footer className="border-t py-12 border-border/40 bg-gradient-to-b from-transparent to-muted/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="text-xl tracking-wide">
                  <span className="text-foreground font-light">Khizar</span>
                  <span className="text-primary font-normal">.</span>
                  <span className="text-foreground/70 font-light">dev</span>
                </div>
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Khizar. All rights reserved.</p>
              </div>
              
              <div className="flex space-x-12">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Scroll to top button - more subtle */}
        <AnimatePresence>
          {activeSection !== "home" && (
            <motion.button
              className="fixed bottom-10 right-10 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shadow-sm hover:border-primary transition-colors z-20"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
