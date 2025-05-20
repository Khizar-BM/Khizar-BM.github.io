"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission (e.g., send data to an API)
    console.log("Form submitted:", formState);
    
    // Reset form after submission (in a real app, you'd do this after successful API response)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <div className="md:col-span-7">
      <motion.form 
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
            value={formState.name}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none focus:ring-2 ring-primary/20 transition-all"
            required
            whileFocus={{ boxShadow: "0 0 0 2px rgba(var(--primary), 0.2)" }}
          />
        </motion.div>
        
        <motion.div variants={inputAnimation}>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <motion.input 
            type="email" 
            id="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none focus:ring-2 ring-primary/20 transition-all"
            required
            whileFocus={{ boxShadow: "0 0 0 2px rgba(var(--primary), 0.2)" }}
          />
        </motion.div>
        
        <motion.div variants={inputAnimation}>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <motion.input 
            type="text" 
            id="subject"
            value={formState.subject}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none focus:ring-2 ring-primary/20 transition-all"
            required
            whileFocus={{ boxShadow: "0 0 0 2px rgba(var(--primary), 0.2)" }}
          />
        </motion.div>
        
        <motion.div variants={inputAnimation}>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <motion.textarea 
            id="message" 
            rows={5}
            value={formState.message}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none resize-none focus:ring-2 ring-primary/20 transition-all"
            required
            whileFocus={{ boxShadow: "0 0 0 2px rgba(var(--primary), 0.2)" }}
          ></motion.textarea>
        </motion.div>
        
        <motion.div variants={inputAnimation}>
          <motion.button 
            type="submit" 
            className="px-8 py-3 bg-primary text-white font-medium inline-flex items-center rounded-sm"
            variants={buttonAnimation}
            whileHover="hover"
            whileTap="tap"
          >
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
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
} 