"use client"

import { useState, useEffect } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import HeroSection from "@/components/hero-section"
import { ChevronUp, Menu, X } from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSkillTab, setActiveSkillTab] = useState("webdev")
  
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
        <section id="about" className="section">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">ABOUT ME</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              Here you will find more information about me, what I do, and my current skills mostly in terms 
              of programming and technology
            </p>
            
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
                  <a href="#contact" className="px-6 py-3 bg-primary text-white font-medium inline-block hover:bg-primary/90 transition-colors">
                    CONTACT
                  </a>
                </div>
              </div>
              
              {/* My skills section */}
              <div>
                <h3 className="text-2xl font-bold mb-6">My Skills</h3>
                
                {/* Skill tabs */}
                <div className="flex mb-6 border-b border-border">
                  <button 
                    className={`px-4 py-2 font-medium transition-colors relative ${activeSkillTab === 'webdev' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                    onClick={() => setActiveSkillTab('webdev')}
                  >
                    Web Development
                    {activeSkillTab === 'webdev' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                    )}
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium transition-colors relative ${activeSkillTab === 'ml' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                    onClick={() => setActiveSkillTab('ml')}
                  >
                    AI & Machine Learning
                    {activeSkillTab === 'ml' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                    )}
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium transition-colors relative ${activeSkillTab === 'other' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                    onClick={() => setActiveSkillTab('other')}
                  >
                    Other Skills
                    {activeSkillTab === 'other' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                    )}
                  </button>
                </div>
                
                {/* Web Development Skills */}
                {activeSkillTab === 'webdev' && (
                  <div className="space-y-8">
                    {/* Frontend */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Frontend
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">React</span>
                            <span className="text-sm font-medium">90%</span>
                          </div>
                          <div className="h-2 bg-card rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">TypeScript</span>
                            <span className="text-sm font-medium">85%</span>
                          </div>
                          <div className="h-2 bg-card rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">HTML & CSS</span>
                            <span className="text-sm font-medium">85%</span>
                          </div>
                          <div className="h-2 bg-card rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Backend */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                        Backend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Node.js</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Express</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">RESTful APIs</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Middleware</span>
                      </div>
                    </div>
                    
                    {/* Libraries & Tools */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                        Libraries & Tools
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Redux</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Next.js</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Tailwind CSS</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">webpack</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">npm</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">JWT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* AI & Machine Learning Skills */}
                {activeSkillTab === 'ml' && (
                  <div className="space-y-8">
                    {/* Core ML */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        ML Frameworks
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">TensorFlow</span>
                            <span className="text-sm font-medium">90%</span>
                          </div>
                          <div className="h-2 bg-card rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">PyTorch</span>
                            <span className="text-sm font-medium">85%</span>
                          </div>
                          <div className="h-2 bg-card rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">scikit-learn</span>
                            <span className="text-sm font-medium">90%</span>
                          </div>
                          <div className="h-2 bg-card rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Advanced AI */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                        Advanced AI Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">LLMs</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Agents</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">RAG</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">NLP</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Computer Vision</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Deep Learning</span>
                      </div>
                    </div>
                    
                    {/* Data Tools */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                        Data Science Tools
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">pandas</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">NumPy</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Matplotlib</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Jupyter</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Python</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Data Viz</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Other Technical Skills */}
                {activeSkillTab === 'other' && (
                  <div className="space-y-8">
                    {/* Databases */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                        Database Technologies
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">SQL</span>
                            <span className="text-sm font-medium">90%</span>
                          </div>
                          <div className="h-2 bg-card rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">MongoDB</span>
                            <span className="text-sm font-medium">85%</span>
                          </div>
                          <div className="h-2 bg-card rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* DevOps & Tools */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        DevOps & System Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Git</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Linux</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Bash</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Docker</span>
                        <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">CI/CD</span>
                      </div>
                    </div>
                    
                    {/* Additional Skills */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                        Additional Skills
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">RESTful APIs</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">GraphQL</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Authentication</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Cloud Services</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Testing</span>
                        </div>
                        <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
                          <span className="font-medium">Agile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
        <section id="contact" className="section relative">
          <div className="container-custom">
            {/* Section heading */}
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
              {/* Left side - info and text */}
              <div className="md:col-span-5">
                <h3 className="text-2xl font-bold mb-5">Let's discuss your project</h3>
                
                <p className="text-muted-foreground mb-8">
                  I'm interested in freelance opportunities – especially ambitious or
                  large projects. However, if you have other requests or questions,
                  don't hesitate to contact me.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">hello@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - contact form */}
              <div className="md:col-span-7">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full py-3 px-4 bg-card border-0 outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full py-3 px-4 bg-card border-0 outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      className="w-full py-3 px-4 bg-card border-0 outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full py-3 px-4 bg-card border-0 outline-none resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="px-8 py-3 bg-primary text-white font-medium inline-flex items-center"
                    >
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
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
