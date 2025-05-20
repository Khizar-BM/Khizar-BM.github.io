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

export default function OtherSkills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    rootMargin: '-50px 0px'
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
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
      {/* Databases */}
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
            whileHover={{ 
              rotate: 15,
              transition: { duration: 0.2 }
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </motion.svg>
          Database Technologies
        </motion.h4>
        <motion.div 
          className="space-y-3"
          variants={containerVariants}
        >
          <ProgressBar percentage={90} label="SQL" />
          <ProgressBar percentage={85} label="MongoDB" />
        </motion.div>
      </motion.div>
      
      {/* DevOps & Tools */}
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
            whileHover={{ 
              rotate: 360,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </motion.svg>
          DevOps & System Tools
        </motion.h4>
        <motion.div 
          className="flex flex-wrap gap-2"
          variants={containerVariants}
        >
          {["Git", "Linux", "Bash", "Docker", "CI/CD"].map((skill, index) => (
            <motion.span 
              key={skill}
              className="px-4 py-1.5 bg-card text-foreground rounded-full"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                backgroundColor: "rgba(var(--primary), 0.1)"
              }}
              custom={index}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Additional Skills */}
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
            whileHover={{ 
              scale: 1.2,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </motion.svg>
          Additional Skills
        </motion.h4>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          variants={containerVariants}
        >
          {["RESTful APIs", "GraphQL", "Authentication", "Cloud Services", "Testing", "Agile"].map((skill) => (
            <motion.div 
              key={skill}
              className="flex items-center p-2 bg-card rounded border border-border"
              variants={skillCardVariants}
              whileHover="hover"
            >
              <span className="font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 