"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

// Animation variants
const formAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const inputAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const buttonAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    backgroundColor: "hsl(var(--primary)/90%)",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    // Set submitting state
    setStatus({ submitting: true, submitted: false, error: false, message: "" });
    
    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        'service_h9v6ufp', // Replace with your EmailJS service ID
        'template_1reg2c9', // Replace with your EmailJS template ID
        formRef.current,
        'PyiHYK_2Ep8IYsvbV' // Replace with your EmailJS public key
      );
      
      // Success - reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: "Message sent successfully!"
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false, message: "" }));
      }, 5000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: error instanceof Error ? error.message : "Failed to send message"
      });
    }
  };
  
  return (
    <div className="md:col-span-7">
      <motion.form 
        ref={formRef}
        className="space-y-6" 
        onSubmit={handleSubmit}
        variants={formAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={inputAnimation}>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <motion.input 
            type="text" 
            id="name"
            name="name" // EmailJS field name
            value={formState.name}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none focus:ring-2 ring-primary/20 transition-all"
            required
            disabled={status.submitting}
            whileFocus={{ boxShadow: "0 0 0 2px rgba(var(--primary), 0.2)" }}
          />
        </motion.div>
        
        <motion.div variants={inputAnimation}>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <motion.input 
            type="email" 
            id="email"
            name="email" // EmailJS field name
            value={formState.email}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none focus:ring-2 ring-primary/20 transition-all"
            required
            disabled={status.submitting}
            whileFocus={{ boxShadow: "0 0 0 2px rgba(var(--primary), 0.2)" }}
          />
        </motion.div>
        
        <motion.div variants={inputAnimation}>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <motion.input 
            type="text" 
            id="subject"
            name="subject" // EmailJS field name
            value={formState.subject}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none focus:ring-2 ring-primary/20 transition-all"
            required
            disabled={status.submitting}
            whileFocus={{ boxShadow: "0 0 0 2px rgba(var(--primary), 0.2)" }}
          />
        </motion.div>
        
        <motion.div variants={inputAnimation}>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <motion.textarea 
            id="message" 
            name="message" // EmailJS field name
            rows={5}
            value={formState.message}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none resize-none focus:ring-2 ring-primary/20 transition-all"
            required
            disabled={status.submitting}
            whileFocus={{ boxShadow: "0 0 0 2px rgba(var(--primary), 0.2)" }}
          ></motion.textarea>
        </motion.div>
        
        {status.message && (
          <motion.div 
            className={`py-2 px-4 rounded-sm ${status.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {status.message}
          </motion.div>
        )}
        
        <motion.div variants={inputAnimation}>
          <motion.button 
            type="submit" 
            className="px-8 py-3 bg-primary text-white font-medium inline-flex items-center rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={status.submitting}
            variants={buttonAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            {status.submitting ? (
              <>
                Sending...
                <svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </>
            ) : (
              <>
                Send Message
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
} 