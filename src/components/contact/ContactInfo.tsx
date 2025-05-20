"use client";

import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerItems = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const iconAnimation = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(var(--primary), 0.15)",
    transition: {
      duration: 0.2
    }
  }
};

export default function ContactInfo() {
  return (
    <motion.div 
      className="md:col-span-5"
      variants={staggerItems}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 
        className="text-2xl font-bold mb-5"
        variants={fadeInUp}
      >
        Let's discuss your project
      </motion.h3>
      
      <motion.p 
        className="text-muted-foreground mb-8"
        variants={fadeInUp}
      >
        I'm interested in freelance opportunities – especially ambitious or
        large projects. However, if you have other requests or questions,
        don't hesitate to contact me.
      </motion.p>
      
      <motion.div 
        className="space-y-4 mt-8"
        variants={staggerItems}
      >
        <motion.div 
          className="flex items-center"
          variants={fadeInUp}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center mr-4"
            variants={iconAnimation}
            whileHover="hover"
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-primary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </motion.svg>
          </motion.div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-medium">San Francisco, CA</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center"
          variants={fadeInUp}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center mr-4"
            variants={iconAnimation}
            whileHover="hover"
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-primary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </motion.svg>
          </motion.div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">hello@example.com</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center"
          variants={fadeInUp}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center mr-4"
            variants={iconAnimation}
            whileHover="hover"
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-primary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </motion.svg>
          </motion.div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium">+1 (555) 123-4567</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 