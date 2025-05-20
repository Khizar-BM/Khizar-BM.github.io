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
      staggerChildren: 0.4
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    } 
  }
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.3,
      delay: 0.1
    }
  }
};

const lineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: { 
    width: "calc(6.5%)", 
    opacity: 1,
    transition: { 
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export default function ExperienceTimeline() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  
  return (
    <div className="relative py-10">
      {/* Center timeline */}
      <motion.div 
        className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 transform -translate-x-1/2"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      
      {/* Timeline start marker */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center">
        <motion.div 
          className="w-3 h-3 rounded-full bg-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        ></motion.div>
      </div>
      
      {/* Timeline Items */}
      <motion.div 
        className="space-y-16 md:space-y-24"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Timeline Item 1 - Right side */}
        <motion.div 
          className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
          variants={itemVariants}
        >
          {/* Empty space for left side */}
          <div className="hidden md:block md:col-span-6"></div>
          
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-6 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
            <motion.div 
              className="w-3 h-3 rounded-full bg-primary"
              variants={dotVariants}
            ></motion.div>
          </div>
          
          {/* Line from center to card - desktop only */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-1/2 bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"
            style={{ originX: 0 }}
            variants={lineVariants}
          ></motion.div>
          
          {/* Content - Right side */}
          <motion.div 
            className="md:col-span-6 pl-8 md:pl-6 relative z-20"
            variants={itemVariants}
          >
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
          </motion.div>
        </motion.div>
        
        {/* Timeline Item 2 - Left side */}
        <motion.div 
          className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
          variants={itemVariants}
        >
          {/* Content - Left side */}
          <motion.div 
            className="md:col-span-6 md:pr-6 relative order-2 md:order-1 pl-8 md:pl-0 z-20"
            variants={itemVariants}
          >
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
          </motion.div>
          
          {/* Empty space for right side */}
          <div className="hidden md:block md:col-span-6 order-1 md:order-2"></div>
          
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-6 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
            <motion.div 
              className="w-3 h-3 rounded-full bg-primary"
              variants={dotVariants}
            ></motion.div>
          </div>
          
          {/* Line from center to card - desktop only */}
          <motion.div 
            className="hidden md:block absolute right-[calc(50%)] top-1/2 bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"
            style={{ originX: 1 }}
            variants={lineVariants}
          ></motion.div>
        </motion.div>
        
        {/* Timeline Item 3 - Right side */}
        <motion.div 
          className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
          variants={itemVariants}
        >
          {/* Empty space for left side */}
          <div className="hidden md:block md:col-span-6"></div>
          
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-6 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
            <motion.div 
              className="w-3 h-3 rounded-full bg-primary"
              variants={dotVariants}
            ></motion.div>
          </div>
          
          {/* Line from center to card - desktop only */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-1/2 bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"
            style={{ originX: 0 }}
            variants={lineVariants}
          ></motion.div>
          
          {/* Content - Right side */}
          <motion.div 
            className="md:col-span-6 pl-8 md:pl-6 relative z-20"
            variants={itemVariants}
          >
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
                <li>Implemented UI/UX designs</li>
                <li>Collaborated with cross-functional teams</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Timeline end marker */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 flex items-center justify-center">
          <motion.div 
            className="w-3 h-3 rounded-full bg-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
} 