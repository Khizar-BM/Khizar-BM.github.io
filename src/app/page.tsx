"use client"

import { useState, useEffect, useRef } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import HeroSection from "@/components/hero-section"
import { ChevronUp, Menu, X } from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSkillTab, setActiveSkillTab] = useState("webdev")
  const [activeJourneyTab, setActiveJourneyTab] = useState("experience")
  
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
  
  // Carousel functionality
  useEffect(() => {
    const track = document.getElementById('carousel-track');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    const dots = document.querySelectorAll('#carousel-dots button');
    
    if (!track || !prevButton || !nextButton || dots.length === 0) return;
    
    // Calculate visible items based on viewport
    const calculateVisibleItems = () => {
      const containerWidth = track.parentElement?.clientWidth || 0;
      // Calculate based on responsive breakpoints
      if (containerWidth < 640) {
        return 1; // Mobile: show 1
      } else if (containerWidth < 1024) {
        return 2; // Tablet: show 2
      } else {
        return 3; // Desktop: show 3
      }
    };
    
    let currentPosition = 0;
    let visibleItems = calculateVisibleItems();
    
    const cards = Array.from(track.children);
    const cardWidth = cards[0]?.getBoundingClientRect().width || 330;
    const cardMargin = 16; // gap-4 = 16px
    
    const totalCards = cards.length;
    const maxPosition = totalCards - visibleItems;
    
    // Move carousel
    const moveCarousel = (position: number) => {
      // Clamp the position to valid range
      currentPosition = Math.max(0, Math.min(position, maxPosition));
      
      // Calculate the transform
      const translateX = currentPosition * (cardWidth + cardMargin);
      track.style.transition = 'transform 0.5s ease';
      track.style.transform = `translateX(-${translateX}px)`;
      
      // Update active dot
      dots.forEach((dot, i) => {
        if (i === currentPosition) {
          dot.classList.add('bg-primary');
          dot.classList.remove('bg-card', 'border-border', 'border');
        } else {
          dot.classList.remove('bg-primary');
          dot.classList.add('bg-card', 'border-border', 'border');
        }
      });
      
      // Update button states - using aria-disabled instead of disabled property
      if (currentPosition === 0) {
        prevButton.setAttribute('aria-disabled', 'true');
        prevButton.classList.add('opacity-50', 'cursor-not-allowed');
      } else {
        prevButton.setAttribute('aria-disabled', 'false');
        prevButton.classList.remove('opacity-50', 'cursor-not-allowed');
      }
      
      if (currentPosition === maxPosition) {
        nextButton.setAttribute('aria-disabled', 'true');
        nextButton.classList.add('opacity-50', 'cursor-not-allowed');
      } else {
        nextButton.setAttribute('aria-disabled', 'false');
        nextButton.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    };
    
    // Handle window resize
    const handleResize = () => {
      const newVisibleItems = calculateVisibleItems();
      if (newVisibleItems !== visibleItems) {
        visibleItems = newVisibleItems;
        moveCarousel(Math.min(currentPosition, totalCards - visibleItems));
      }
    };
    
    // Set up event listeners
    const handlePrevClick = () => moveCarousel(currentPosition - 1);
    const handleNextClick = () => moveCarousel(currentPosition + 1);
    
    prevButton.addEventListener('click', handlePrevClick);
    nextButton.addEventListener('click', handleNextClick);
    
    // Set up dot click handlers
    const dotClickHandlers = Array.from(dots).map((dot, i) => {
      const handler = () => moveCarousel(i);
      dot.addEventListener('click', handler);
      return { dot, handler };
    });
    
    // Add touch support
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;
    let startTranslateX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      isDragging = true;
      startTranslateX = currentPosition * (cardWidth + cardMargin);
      // Remove transition during dragging for better performance
      track.style.transition = 'none';
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      touchEndX = e.touches[0].clientX;
      const diffX = touchStartX - touchEndX;
      track.style.transform = `translateX(-${startTranslateX + diffX}px)`;
    };
    
    const handleTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      
      // Add transition back
      track.style.transition = 'transform 0.5s ease';
      
      const diffX = touchStartX - touchEndX;
      // Determine if we should move to next or previous slide
      if (Math.abs(diffX) > 50) { // Threshold of 50px
        if (diffX > 0) {
          // Swipe left, move right
          moveCarousel(currentPosition + 1);
        } else {
          // Swipe right, move left
          moveCarousel(currentPosition - 1);
        }
      } else {
        // Small movement, snap back
        moveCarousel(currentPosition);
      }
    };
    
    // Add mouse drag support (similar to touch)
    let mouseStartX = 0;
    let mouseEndX = 0;
    let isMouseDragging = false;
    
    const handleMouseDown = (e: MouseEvent) => {
      mouseStartX = e.clientX;
      isMouseDragging = true;
      startTranslateX = currentPosition * (cardWidth + cardMargin);
      track.style.transition = 'none';
      track.style.cursor = 'grabbing';
      // Prevent default drag behavior
      e.preventDefault();
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDragging) return;
      mouseEndX = e.clientX;
      const diffX = mouseStartX - mouseEndX;
      track.style.transform = `translateX(-${startTranslateX + diffX}px)`;
    };
    
    const handleMouseUp = () => {
      if (!isMouseDragging) return;
      isMouseDragging = false;
      
      track.style.transition = 'transform 0.5s ease';
      track.style.cursor = 'grab';
      
      const diffX = mouseStartX - mouseEndX;
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          moveCarousel(currentPosition + 1);
        } else {
          moveCarousel(currentPosition - 1);
        }
      } else {
        moveCarousel(currentPosition);
      }
    };
    
    // Handle mouse leaving the window
    const handleMouseLeave = () => {
      if (isMouseDragging) {
        handleMouseUp();
      }
    };
    
    // Add event listeners for touch and mouse
    track.addEventListener('touchstart', handleTouchStart as EventListener);
    track.addEventListener('touchmove', handleTouchMove as EventListener);
    track.addEventListener('touchend', handleTouchEnd);
    
    track.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    window.addEventListener('resize', handleResize);
    
    // Initial setup
    moveCarousel(0);
    
    // Add keyboard navigation for accessibility
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only respond to keyboard events when the carousel is in the viewport
      const rect = track.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isInViewport) return;

      switch (e.key) {
        case 'ArrowLeft':
          moveCarousel(currentPosition - 1);
          e.preventDefault();
          break;
        case 'ArrowRight':
          moveCarousel(currentPosition + 1);
          e.preventDefault();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up
    return () => {
      prevButton.removeEventListener('click', handlePrevClick);
      nextButton.removeEventListener('click', handleNextClick);
      
      dotClickHandlers.forEach(({ dot, handler }) => {
        dot.removeEventListener('click', handler);
      });
      
      track.removeEventListener('touchstart', handleTouchStart as EventListener);
      track.removeEventListener('touchmove', handleTouchMove as EventListener);
      track.removeEventListener('touchend', handleTouchEnd);
      
      track.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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
        <section id="projects" className="section">
          <div className="container-custom">
            {/* Section heading */}
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Featured Project Card */}
              <div className="mb-12 overflow-hidden rounded-lg border border-border/40 bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="overflow-hidden">
                    <div className="h-full">
                      <img 
                        src="https://placehold.co/800x600/111827/FFFFFF?text=Featured+Project" 
                        alt="Featured Project"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">Featured Project</span>
                      <h3 className="text-xl font-bold">ML Image Recognition</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      A comprehensive platform for image recognition using state-of-the-art machine learning algorithms with a custom-built UI for easy interaction. Supports multiple ML models and real-time analysis.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">TensorFlow</span>
                      <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">React</span>
                      <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">Python</span>
                      <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">Computer Vision</span>
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors flex items-center">
                        <span>Live Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                      <a href="#" className="px-4 py-2 bg-card border border-border text-sm font-medium rounded-md hover:bg-card/80 transition-colors flex items-center">
                        <span>View Code</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Carousel */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6">More Projects</h3>
                
                {/* Carousel navigation */}
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm text-muted-foreground">Scroll through my other projects</p>
                  <div className="flex gap-2">
                    <button 
                      id="carousel-prev" 
                      className="p-2 rounded-full bg-card border border-border hover:bg-card/80 transition-colors"
                      aria-label="Previous slide"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </button>
                    <button 
                      id="carousel-next" 
                      className="p-2 rounded-full bg-card border border-border hover:bg-card/80 transition-colors"
                      aria-label="Next slide"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Carousel container */}
                <div className="relative overflow-hidden">
                  <div 
                    id="carousel-track" 
                    className="flex gap-4 transition-transform duration-500 ease-out will-change-transform"
                    style={{ touchAction: 'pan-y' }}
                  >
                    {/* Project Card 1 */}
                    <div className="min-w-[280px] w-[calc(100%-2rem)] sm:w-[330px] flex-shrink-0 rounded-lg border border-border/40 bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://placehold.co/600x450/111827/FFFFFF?text=Project+1" 
                          alt="Interactive Dashboard"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold">Interactive Dashboard</h3>
                          <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Web App</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          Real-time analytics dashboard with data visualization and customizable widgets.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">React</span>
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">D3.js</span>
                        </div>
                        <div className="flex gap-2 pt-2 border-t border-border/30">
                          <a href="#" className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary/90 transition-colors flex items-center gap-1">
                            <span>Demo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                          <a href="#" className="px-3 py-1.5 bg-card border border-border text-xs font-medium rounded hover:bg-card/80 transition-colors flex items-center gap-1">
                            <span>Code</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Card 2 - Structure the same as Card 1 */}
                    <div className="min-w-[280px] w-[calc(100%-2rem)] sm:w-[330px] flex-shrink-0 rounded-lg border border-border/40 bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://placehold.co/600x450/111827/FFFFFF?text=Project+2" 
                          alt="NLP API"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold">NLP API</h3>
                          <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">API</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          Advanced NLP API for sentiment analysis and entity recognition with real-time processing.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">Python</span>
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">spaCy</span>
                        </div>
                        <div className="flex gap-2 pt-2 border-t border-border/30">
                          <a href="#" className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary/90 transition-colors flex items-center gap-1">
                            <span>Demo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                          <a href="#" className="px-3 py-1.5 bg-card border border-border text-xs font-medium rounded hover:bg-card/80 transition-colors flex items-center gap-1">
                            <span>Code</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Card 3 */}
                    <div className="min-w-[280px] w-[calc(100%-2rem)] sm:w-[330px] flex-shrink-0 rounded-lg border border-border/40 bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://placehold.co/600x450/111827/FFFFFF?text=Project+3" 
                          alt="E-commerce App"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold mb-2">E-commerce App</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Mobile e-commerce app with personalized recommendations.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">React Native</span>
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">Redux</span>
                        </div>
                        <div className="flex gap-2">
                          <a href="#" className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary/90 transition-colors" aria-label="View Demo">Live Demo</a>
                          <a href="#" className="px-3 py-1.5 bg-card border border-border text-xs font-medium rounded hover:bg-card/80 transition-colors" aria-label="View Code">Code</a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Card 4 */}
                    <div className="min-w-[280px] w-[calc(100%-2rem)] sm:w-[330px] flex-shrink-0 rounded-lg border border-border/40 bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://placehold.co/600x450/111827/FFFFFF?text=Project+4" 
                          alt="Analytics Platform"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold mb-2">Analytics Platform</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          ML-powered platform predicting trends with actionable insights.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">Python</span>
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">scikit-learn</span>
                        </div>
                        <div className="flex gap-2">
                          <a href="#" className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary/90 transition-colors" aria-label="View Demo">Live Demo</a>
                          <a href="#" className="px-3 py-1.5 bg-card border border-border text-xs font-medium rounded hover:bg-card/80 transition-colors" aria-label="View Code">Code</a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Card 5 */}
                    <div className="min-w-[280px] w-[calc(100%-2rem)] sm:w-[330px] flex-shrink-0 rounded-lg border border-border/40 bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://placehold.co/600x450/111827/FFFFFF?text=Project+5" 
                          alt="Task Manager"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold mb-2">Task Manager</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Task management app with drag-and-drop interface and reminders.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">Vue.js</span>
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">Firebase</span>
                        </div>
                        <div className="flex gap-2">
                          <a href="#" className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary/90 transition-colors" aria-label="View Demo">Live Demo</a>
                          <a href="#" className="px-3 py-1.5 bg-card border border-border text-xs font-medium rounded hover:bg-card/80 transition-colors" aria-label="View Code">Code</a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Card 6 */}
                    <div className="min-w-[280px] w-[calc(100%-2rem)] sm:w-[330px] flex-shrink-0 rounded-lg border border-border/40 bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://placehold.co/600x450/111827/FFFFFF?text=Project+6" 
                          alt="Chat Application"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold mb-2">Chat Application</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          Real-time chat app with WebSocket integration and file sharing.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">Node.js</span>
                          <span className="px-2 py-1 text-xs font-medium bg-card border border-border rounded">Socket.io</span>
                        </div>
                        <div className="flex gap-2">
                          <a href="#" className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary/90 transition-colors" aria-label="View Demo">Live Demo</a>
                          <a href="#" className="px-3 py-1.5 bg-card border border-border text-xs font-medium rounded hover:bg-card/80 transition-colors" aria-label="View Code">Code</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Carousel pagination dots */}
                <div id="carousel-dots" className="flex justify-center gap-2 mt-6">
                  <button className="w-2 h-2 rounded-full bg-primary" aria-label="Go to slide 1"></button>
                  <button className="w-2 h-2 rounded-full bg-card border border-border" aria-label="Go to slide 2"></button>
                  <button className="w-2 h-2 rounded-full bg-card border border-border" aria-label="Go to slide 3"></button>
                  <button className="w-2 h-2 rounded-full bg-card border border-border" aria-label="Go to slide 4"></button>
                </div>
              </div>
              
              {/* View All Projects link */}
              <div className="flex justify-center">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-border rounded-md hover:bg-card transition-colors text-sm font-medium flex items-center gap-2"
                >
                  <span>View All Projects on GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Journey Section */}
        <section id="journey" className="section">
          <div className="container-custom">
            {/* Section heading */}
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">My Journey</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Timeline tabs */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex bg-card/50 rounded-lg p-1.5 border border-border shadow-sm">
                  <button 
                    className={`px-6 py-2.5 rounded-md font-medium transition-all duration-200 ${
                      activeJourneyTab === 'experience' 
                        ? 'bg-primary text-white shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-card/80'
                    }`}
                    onClick={() => setActiveJourneyTab('experience')}
                  >
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      <span>Experience</span>
                    </div>
                  </button>
                  <button 
                    className={`px-6 py-2.5 rounded-md font-medium transition-all duration-200 ${
                      activeJourneyTab === 'education' 
                        ? 'bg-primary text-white shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-card/80'
                    }`}
                    onClick={() => setActiveJourneyTab('education')}
                  >
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                      </svg>
                      <span>Education</span>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Experience Timeline */}
              {activeJourneyTab === 'experience' && (
                <div className="relative py-10">
                  {/* Center timeline */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 transform -translate-x-1/2"></div>
                  
                  {/* Timeline start marker */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-16 md:space-y-24">
                    {/* Timeline Item 1 - Right side */}
                    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                      {/* Empty space for left side */}
                      <div className="hidden md:block md:col-span-6"></div>
                      
                      {/* Timeline connector */}
                      <div className="absolute left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
                      
                      {/* Line from center to card - desktop only */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-[calc(6.5%)] bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"></div>
                      
                      {/* Content - Right side */}
                      <div className="md:col-span-6 pl-8 md:pl-6 relative z-20">
                        <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
                          <div className="flex flex-col mb-3">
                            <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                              2021 - Present
                            </span>
                            <h3 className="text-lg font-bold">Senior AI Engineer</h3>
                            <h4 className="text-base text-primary">Innovative AI Solutions</h4>
                          </div>
                          <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                            <li>Led development of large-scale ML systems</li>
                            <li>Designed and implemented NLP solutions</li>
                            <li>Mentored junior engineers on best practices</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Item 2 - Left side */}
                    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                      {/* Content - Left side */}
                      <div className="md:col-span-6 md:pr-6 relative order-2 md:order-1 pl-8 md:pl-0 z-20">
                        <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
                          <div className="flex flex-col mb-3">
                            <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                              2019 - 2021
                            </span>
                            <h3 className="text-lg font-bold">Machine Learning Engineer</h3>
                            <h4 className="text-base text-primary">AI Research Group</h4>
                          </div>
                          <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                            <li>Developed computer vision algorithms for autonomous systems</li>
                            <li>Built and trained deep learning models using PyTorch</li>
                            <li>Published research papers on image segmentation techniques</li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Empty space for right side */}
                      <div className="hidden md:block md:col-span-6 order-1 md:order-2"></div>
                      
                      {/* Timeline connector */}
                      <div className="absolute left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
                      
                      {/* Line from center to card - desktop only */}
                      <div className="hidden md:block absolute right-[calc(50%)] top-1/2 w-[calc(6.5%)] bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"></div>
                    </div>
                    
                    {/* Timeline Item 3 - Right side */}
                    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                      {/* Empty space for left side */}
                      <div className="hidden md:block md:col-span-6"></div>
                      
                      {/* Timeline connector */}
                      <div className="absolute left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
                      
                      {/* Line from center to card - desktop only */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-[calc(6.5%)] bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"></div>
                      
                      {/* Content - Right side */}
                      <div className="md:col-span-6 pl-8 md:pl-6 relative z-20">
                        <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
                          <div className="flex flex-col mb-3">
                            <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                              2016 - 2019
                            </span>
                            <h3 className="text-lg font-bold">Frontend Developer</h3>
                            <h4 className="text-base text-primary">Web Solutions Inc.</h4>
                          </div>
                          <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                            <li>Built responsive web applications using React</li>
                            <li>Implemented state management with Redux</li>
                            <li>Developed reusable component libraries</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Item 4 - Left side */}
                    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                      {/* Content - Left side */}
                      <div className="md:col-span-6 md:pr-6 relative order-2 md:order-1 pl-8 md:pl-0 z-20">
                        <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
                          <div className="flex flex-col mb-3">
                            <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                              2014 - 2016
                            </span>
                            <h3 className="text-lg font-bold">UI/UX Designer</h3>
                            <h4 className="text-base text-primary">Creative Design Studio</h4>
                          </div>
                          <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                            <li>Designed user interfaces for web and mobile applications</li>
                            <li>Conducted user research and usability testing</li>
                            <li>Created interactive prototypes using Figma and Adobe XD</li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Empty space for right side */}
                      <div className="hidden md:block md:col-span-6 order-1 md:order-2"></div>
                      
                      {/* Timeline connector */}
                      <div className="absolute left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
                      
                      {/* Line from center to card - desktop only */}
                      <div className="hidden md:block absolute right-[calc(50%)] top-1/2 w-[calc(6.5%)] bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"></div>
                    </div>
                    
                    {/* Timeline end marker */}
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Education Timeline */}
              {activeJourneyTab === 'education' && (
                <div className="relative py-10">
                  {/* Center timeline */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 transform -translate-x-1/2"></div>
                  
                  {/* Timeline start marker */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-16 md:space-y-24">
                    {/* Timeline Item 1 - Right side */}
                    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                      {/* Empty space for left side */}
                      <div className="hidden md:block md:col-span-6"></div>
                      
                      {/* Timeline connector */}
                      <div className="absolute left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
                      
                      {/* Line from center to card - desktop only */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-[calc(6.5%)] bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"></div>
                      
                      {/* Content - Right side */}
                      <div className="md:col-span-6 pl-8 md:pl-6 relative z-20">
                        <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
                          <div className="flex flex-col mb-3">
                            <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                              2018 - 2020
                            </span>
                            <h3 className="text-lg font-bold">Master's in Computer Science</h3>
                            <h4 className="text-base text-primary">Stanford University</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Specialized in Machine Learning and Artificial Intelligence. 
                            Thesis on Attention Mechanisms in Transformer Models.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline Item 2 - Left side */}
                    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                      {/* Content - Left side */}
                      <div className="md:col-span-6 md:pr-6 relative order-2 md:order-1 pl-8 md:pl-0 z-20">
                        <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
                          <div className="flex flex-col mb-3">
                            <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                              2014 - 2018
                            </span>
                            <h3 className="text-lg font-bold">Bachelor's in Computer Science</h3>
                            <h4 className="text-base text-primary">MIT</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Graduated with honors. Key courses included Data Structures, 
                            Algorithms, Software Engineering, and Web Development.
                          </p>
                        </div>
                      </div>
                      
                      {/* Empty space for right side */}
                      <div className="hidden md:block md:col-span-6 order-1 md:order-2"></div>
                      
                      {/* Timeline connector */}
                      <div className="absolute left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
                      
                      {/* Line from center to card - desktop only */}
                      <div className="hidden md:block absolute right-[calc(50%)] top-1/2 w-[calc(6.5%)] bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"></div>
                    </div>
                    
                    {/* Timeline Item 3 - Right side */}
                    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                      {/* Empty space for left side */}
                      <div className="hidden md:block md:col-span-6"></div>
                      
                      {/* Timeline connector */}
                      <div className="absolute left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
                      
                      {/* Line from center to card - desktop only */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-[calc(6.5%)] bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"></div>
                      
                      {/* Content - Right side */}
                      <div className="md:col-span-6 pl-8 md:pl-6 relative z-20">
                        <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
                          <div className="flex flex-col mb-3">
                            <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                              2020
                            </span>
                            <h3 className="text-lg font-bold">Deep Learning Specialization</h3>
                            <h4 className="text-base text-primary">Coursera (deeplearning.ai)</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Completed 5-course specialization covering neural networks, 
                            optimization algorithms, and deep learning applications.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline end marker */}
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Download CV button */}
              <div className="flex justify-center mt-12">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-primary text-white font-medium inline-flex items-center rounded-md hover:bg-primary/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4.5 1.2.3 2.5-.8 3-2 .5z" />
                </svg>
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
