"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

export const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderColor: "hsl(var(--primary) / 0.3)"
  }
};

export const tabContentVariants = {
  enter: { 
    opacity: 0, 
    y: 10, 
    transition: { duration: 0.3 } 
  },
  center: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4 } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    transition: { duration: 0.3 } 
  }
};

export const underlineVariants = {
  hidden: { width: 0 },
  visible: { 
    width: '100%',
    transition: { duration: 0.4 }
  }
};

// Progress bar component
export const ProgressBar = ({ percentage, label }: { percentage: number, label: string }) => {
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
          className="bg-primary h-full rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </motion.div>
  );
};

// Badge component
export const SkillBadge = ({ skill, index }: { skill: string, index: number }) => (
  <motion.span 
    key={skill}
    className="px-4 py-1.5 bg-card text-foreground rounded-full"
    variants={itemVariants}
    whileHover={{ 
      scale: 1.05,
      y: -2,
      backgroundColor: "hsl(var(--primary) / 0.1)"
    }}
    initial={{ y: 0 }}
    custom={index}
    transition={{ 
      type: "spring", 
      stiffness: 300, 
      damping: 10,
      y: { type: "tween", duration: 0.1 }
    }}
  >
    {skill}
  </motion.span>
);

// Card component
export const SkillCard = ({ skill }: { skill: string }) => (
  <motion.div 
    key={skill}
    className="flex items-center p-2 bg-card rounded border border-border"
    variants={skillCardVariants}
    whileHover="hover"
  >
    <span className="font-medium">{skill}</span>
  </motion.div>
);

// Section header component
export const SectionHeader = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
  <motion.h4 
    className="text-lg font-semibold mb-3 flex items-center"
    variants={itemVariants}
  >
    {icon}
    {title}
  </motion.h4>
); 