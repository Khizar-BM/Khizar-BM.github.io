"use client"

import { useState, useEffect } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import HeroSection from "@/components/hero-section"
import { ChevronUp, Menu, X } from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
      
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
  
  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "What I Do" },
    { id: "projects", label: "Projects" },
    { id: "journey", label: "Journey" },
    { id: "contact", label: "Let's Work Together" }
  ]
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 w-full bg-background/95 border-b border-border z-40">
        <div className="container-custom flex justify-between items-center py-5">
          <a href="#" className="text-xl font-medium">
            Synerqy
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
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
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map(item => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Me Section */}
        <section id="about" className="section bg-card">
          <div className="container-custom">
            <h2 className="section-title">About Me</h2>
            <div className="max-w-3xl">
              <p className="dark-mode-text mb-4">
                Hi there! I'm a data scientist specializing in data analytics, predictive modeling, natural 
                language processing, and machine learning. With a robust background in Python, SQL, and AI technologies
                for analyzing datasets, I'm dedicated to helping businesses make informed decisions and stay ahead in 
                today's data-driven world.
              </p>
              <p className="dark-mode-text">
                I bring a blend of technical expertise, hands-on experience, and a commitment to clear communication 
                in every project. Whether it's uncovering hidden patterns, predicting future trends, or automating 
                processes with AI, I deliver results that make a difference.
              </p>
            </div>
          </div>
        </section>
        
        {/* What I Do Section */}
        <section id="skills" className="section">
          <div className="container-custom">
            <h2 className="section-title">What I Do</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Data Analysis */}
              <div className="border-card">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.4 15.4c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2Z"/><path d="M13.8 10.6c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2Z"/><path d="M9.2 15.4c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2Z"/></svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Data Analysis & Visualization</h3>
                <p className="dark-mode-text text-sm">
                  From data exploration to actionable insights, I design compelling visualizations and create robust data pipelines for your business needs.
                </p>
              </div>
              
              {/* Predictive Analytics */}
              <div className="border-card">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5.6 5.6a1 1 0 0 0 1.4 0L16 10"/><path d="m15 14 2.3-2.3a1 1 0 0 1 1.4 0L22 15"/></svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Predictive Analytics and Forecasting</h3>
                <p className="dark-mode-text text-sm">
                  From data to insight, I craft predictive models that navigate patterns, forecast trends, and guide decision-making with precision.
                </p>
              </div>
              
              {/* NLP */}
              <div className="border-card">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v9"/><path d="M3 15h18"/><path d="M9 22h6"/><path d="M5 15v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/></svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Natural Language Processing</h3>
                <p className="dark-mode-text text-sm">
                  From text to insight, I craft Natural Language Processing solutions that decode sentiment, extract meaning, and unlock the power of text.
                </p>
              </div>
              
              {/* AI Chatbots */}
              <div className="border-card">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/></svg>
                </div>
                <h3 className="text-lg font-medium mb-2">AI Chatbots</h3>
                <p className="dark-mode-text text-sm">
                  From concept to conversation, I build AI chatbots that enhance customer interactions, streamline support, and solve business objectives.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="section bg-card">
          <div className="container-custom">
            <h2 className="section-title">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project filters */}
              <div className="lg:col-span-3 flex flex-wrap gap-3 mb-8">
                <span className="tag">Machine Learning</span>
                <span className="tag">SQL</span>
                <span className="tag">Power BI</span>
                <span className="tag">RDBMS</span>
                <span className="tag">Spatial Data Science</span>
              </div>
              
              {/* Project 1 */}
              <div className="project-card">
                <div className="aspect-video relative bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
                <div className="p-5">
                  <h3 className="font-medium mb-2">Project Name/Description</h3>
                  <p className="dark-mode-text text-sm mb-3">Technology used</p>
                  <div className="flex justify-end">
                    <a href="#" className="text-primary text-sm">View Details</a>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="project-card">
                <div className="aspect-video relative bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
                <div className="p-5">
                  <h3 className="font-medium mb-2">Project Name/Description</h3>
                  <p className="dark-mode-text text-sm mb-3">Technology used</p>
                  <div className="flex justify-end">
                    <a href="#" className="text-primary text-sm">View Details</a>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="project-card">
                <div className="aspect-video relative bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
                <div className="p-5">
                  <h3 className="font-medium mb-2">Project Name/Description</h3>
                  <p className="dark-mode-text text-sm mb-3">Technology used</p>
                  <div className="flex justify-end">
                    <a href="#" className="text-primary text-sm">View Details</a>
                  </div>
                </div>
              </div>
              
              {/* More projects button */}
              <div className="lg:col-span-3 flex justify-center mt-4">
                <a href="#" className="text-primary border border-primary/50 rounded-sm px-8 py-2 hover:bg-primary/5 transition-colors">
                  View All
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container-custom">
            <h2 className="section-title">Let's Work Together</h2>
            
            <div className="flex justify-center">
              <a href="mailto:email@example.com" className="text-primary hover:text-primary/80 transition-colors">
                vinaysaini707@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <p className="text-sm dark-mode-text">© 2023 All rights reserved.</p>
            
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  )
}
