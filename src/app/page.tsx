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
import { Menu, X } from "lucide-react"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  
  // Simulate loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
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
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "journey", label: "Journey" },
    { id: "contact", label: "Contact" }
  ]
  
  return (
    <>
      {/* Simple loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-2xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Loading...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content */}
      <div className="min-h-screen">
        {/* Simple header */}
        <header className="fixed top-0 w-full z-10 bg-background/95 border-b border-border">
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <a href="#" className="text-lg font-medium">
              Khizar<span className="text-primary">.</span>dev
            </a>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-2 py-1 text-sm transition-colors ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <ModeToggle />
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
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
                transition={{ duration: 0.2 }}
              >
                <div className="container mx-auto py-3 flex flex-col space-y-3 bg-background border-t border-border">
                  {navItems.map(item => (
                    <a 
                      key={item.id}
                      href={`#${item.id}`}
                      className={`py-2 px-2 ${
                        activeSection === item.id 
                          ? "text-primary" 
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="pt-16">
          {/* Main sections */}
          <HeroSection />
          
          <section id="about" className="bg-card">
            <div className="section-container">
              <h2 className="heading-with-line">About Me</h2>
              <div className="max-w-3xl">
                <p className="text-muted-foreground mb-4">
                  Hi there! I'm Khizar Mohammed, a data scientist specializing in data analytics, predictive modeling, natural 
                  language processing, and machine learning. With my skills in Python, SQL, and various AI technologies, I'm dedicated 
                  to helping businesses make informed decisions and stay ahead in today's data-driven world.
                </p>
                <p className="text-muted-foreground">
                  I bring a blend of technical expertise, hands-on experience, and a commitment to clear communication 
                  in every project. Whether it's uncovering hidden patterns, predicting future trends, or automating 
                  processes with AI, I deliver results that make a difference.
                </p>
              </div>
            </div>
          </section>
          
          <SkillsSection />
          
          <ProjectsSection />
          
          <TimelineSection />
          
          <ContactSection />
        </main>

        {/* Simple Footer */}
        <footer className="border-t py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Khizar Mohammed. All rights reserved.</p>
              </div>
              
              <div className="flex space-x-6">
                <a href="mailto:example@email.com" className="text-sm text-muted-foreground hover:text-primary">example@email.com</a>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Simple scroll to top button */}
        <AnimatePresence>
          {activeSection !== "home" && (
            <motion.button
              className="fixed bottom-6 right-6 w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
