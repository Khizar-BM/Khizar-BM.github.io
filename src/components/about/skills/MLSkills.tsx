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
    borderColor: "hsl(var(--primary) / 0.3)"
  }
};

// Special animation for progress bars with glowing effect
const progressBarVariants = {
  hidden: { width: 0 },
  visible: (custom: number) => ({
    width: `${custom}%`,
    transition: { 
      duration: 1.2, 
      ease: "easeOut",
      delay: 0.2
    }
  })
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
          transition={{ delay: 0.8 }}
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

export default function MLSkills() {
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
      {/* Core ML */}
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </motion.svg>
          ML Frameworks
        </motion.h4>
        <motion.div 
          className="space-y-3"
          variants={containerVariants}
        >
          <ProgressBar percentage={90} label="TensorFlow" />
          <ProgressBar percentage={85} label="PyTorch" />
          <ProgressBar percentage={90} label="scikit-learn" />
        </motion.div>
      </motion.div>
      
      {/* Advanced AI */}
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </motion.svg>
          Advanced AI Technologies
        </motion.h4>
        <motion.div 
          className="flex flex-wrap gap-2"
          variants={containerVariants}
        >
          {["LLMs", "Agents", "RAG", "NLP", "Computer Vision", "Deep Learning"].map((skill, index) => (
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
          ))}
        </motion.div>
      </motion.div>
      
      {/* Data Tools */}
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </motion.svg>
          Data Science Tools
        </motion.h4>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          variants={containerVariants}
        >
          {["pandas", "NumPy", "Matplotlib", "Jupyter", "Python", "Data Viz"].map((tool) => (
            <motion.div 
              key={tool}
              className="flex items-center p-2 bg-card rounded border border-border"
              variants={skillCardVariants}
              whileHover="hover"
            >
              <span className="font-medium">{tool}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 