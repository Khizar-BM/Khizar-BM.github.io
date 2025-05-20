"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle form submission
    console.log('Form submitted:', formState)
    // Reset form after submission
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message or handle as needed
  }
  
  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="noise absolute inset-0 opacity-20" />
      <div className="container mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-foreground/70 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            Let's create something amazing together.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-start gap-8">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">Phone</h4>
                    <p className="text-foreground/70">+1 (123) 456-7890</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-secondary transition-colors">Email</h4>
                    <p className="text-foreground/70">hello@khizar.dev</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-accent transition-colors">Location</h4>
                    <p className="text-foreground/70">San Francisco, CA</p>
                  </div>
                </motion.div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground hover:bg-secondary/10 hover:text-secondary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 frosted-card p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full h-14 px-4 pt-6 peer bg-transparent border border-foreground/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                  <label 
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none
                      ${focusedField === "name" || formState.name 
                        ? "text-xs top-2 text-primary" 
                        : "text-foreground/60 top-1/2 -translate-y-1/2"}
                    `}
                  >
                    Your Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full h-14 px-4 pt-6 peer bg-transparent border border-foreground/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                  <label 
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none
                      ${focusedField === "email" || formState.email 
                        ? "text-xs top-2 text-primary" 
                        : "text-foreground/60 top-1/2 -translate-y-1/2"}
                    `}
                  >
                    Your Email
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full h-14 px-4 pt-6 peer bg-transparent border border-foreground/20 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                  <label 
                    htmlFor="subject"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none
                      ${focusedField === "subject" || formState.subject 
                        ? "text-xs top-2 text-primary" 
                        : "text-foreground/60 top-1/2 -translate-y-1/2"}
                    `}
                  >
                    Subject
                  </label>
                </div>
                
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full px-4 pt-6 peer bg-transparent border border-foreground/20 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                  <label 
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none
                      ${focusedField === "message" || formState.message 
                        ? "text-xs top-2 text-primary" 
                        : "text-foreground/60 top-5"}
                    `}
                  >
                    Your Message
                  </label>
                </div>
              </div>
              
              <Button 
                type="submit"
                className="w-full btn-3d"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 