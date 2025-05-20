"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderColor: "rgba(var(--primary), 0.3)"
  }
};

const ProgressBar = ({ percentage, label }: { percentage: number, label: string }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1.2, ease: "easeOut" }
      });
    } else {
      controls.start({ width: 0 });
    }
  }, [controls, inView, percentage]);
  
  return (
    <motion.div variants={itemVariants} ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <motion.span 
          className="text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >{percentage}%</motion.span>
      </div>
      <div className="h-2 bg-card rounded-full overflow-hidden">
        <motion.div 
          className="bg-primary h-full rounded-full relative"
          initial={{ width: 0 }}
          animate={controls}
        >
          <motion.div 
            className="absolute top-0 bottom-0 right-0 w-4 bg-primary/60"
            animate={{ 
              x: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function WebDevSkills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      {/* Frontend */}
      <motion.div variants={itemVariants}>
        <motion.h4 
          className="text-lg font-semibold mb-3 flex items-center"
          variants={itemVariants}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2 text-primary" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </motion.svg>
          Frontend
        </motion.h4>
        <motion.div 
          className="space-y-3"
          variants={containerVariants}
        >
          <ProgressBar percentage={90} label="React" />
          <ProgressBar percentage={85} label="TypeScript" />
          <ProgressBar percentage={85} label="HTML & CSS" />
        </motion.div>
      </motion.div>
      
      {/* Backend */}
      <motion.div variants={itemVariants}>
        <motion.h4 
          className="text-lg font-semibold mb-3 flex items-center"
          variants={itemVariants}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2 text-primary" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </motion.svg>
          Backend
        </motion.h4>
        <motion.div 
          className="flex flex-wrap gap-2"
          variants={containerVariants}
        >
          <motion.span 
            className="px-4 py-1.5 bg-card text-foreground rounded-full"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -2, 
              backgroundColor: "rgba(var(--primary), 0.1)" 
            }}
          >
            Node.js
          </motion.span>
          <motion.span 
            className="px-4 py-1.5 bg-card text-foreground rounded-full"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -2, 
              backgroundColor: "rgba(var(--primary), 0.1)" 
            }}
          >
            Express
          </motion.span>
          <motion.span 
            className="px-4 py-1.5 bg-card text-foreground rounded-full"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -2, 
              backgroundColor: "rgba(var(--primary), 0.1)" 
            }}
          >
            RESTful APIs
          </motion.span>
          <motion.span 
            className="px-4 py-1.5 bg-card text-foreground rounded-full"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -2, 
              backgroundColor: "rgba(var(--primary), 0.1)" 
            }}
          >
            Middleware
          </motion.span>
        </motion.div>
      </motion.div>
      
      {/* Libraries & Tools */}
      <motion.div variants={itemVariants}>
        <motion.h4 
          className="text-lg font-semibold mb-3 flex items-center"
          variants={itemVariants}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2 text-primary" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </motion.svg>
          Libraries & Tools
        </motion.h4>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          variants={containerVariants}
        >
          <motion.div 
            className="flex items-center p-2 bg-card rounded border border-border"
            variants={skillCardVariants}
            whileHover="hover"
          >
            <span className="font-medium">Redux</span>
          </motion.div>
          <motion.div 
            className="flex items-center p-2 bg-card rounded border border-border"
            variants={skillCardVariants}
            whileHover="hover"
          >
            <span className="font-medium">Next.js</span>
          </motion.div>
          <motion.div 
            className="flex items-center p-2 bg-card rounded border border-border"
            variants={skillCardVariants}
            whileHover="hover"
          >
            <span className="font-medium">Tailwind CSS</span>
          </motion.div>
          <motion.div 
            className="flex items-center p-2 bg-card rounded border border-border"
            variants={skillCardVariants}
            whileHover="hover"
          >
            <span className="font-medium">webpack</span>
          </motion.div>
          <motion.div 
            className="flex items-center p-2 bg-card rounded border border-border"
            variants={skillCardVariants}
            whileHover="hover"
          >
            <span className="font-medium">npm</span>
          </motion.div>
          <motion.div 
            className="flex items-center p-2 bg-card rounded border border-border"
            variants={skillCardVariants}
            whileHover="hover"
          >
            <span className="font-medium">JWT</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 