"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WebDevSkills from './skills/WebDevSkills';
import MLSkills from './skills/MLSkills';
import OtherSkills from './skills/OtherSkills';

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

const tabContentVariants = {
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

const underlineVariants = {
  hidden: { width: 0 },
  visible: { 
    width: '100%',
    transition: { duration: 0.4 }
  }
};

export function SkillTabs() {
  const [activeSkillTab, setActiveSkillTab] = useState('webdev');
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 
        className="text-2xl font-bold mb-6"
        variants={itemVariants}
      >
        My Skills
      </motion.h3>
      
      {/* Skill tabs */}
      <motion.div 
        className="flex mb-6 border-b border-border"
        variants={itemVariants}
      >
        <motion.button 
          className={`px-4 py-2 font-medium transition-colors relative ${
            activeSkillTab === 'webdev' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveSkillTab('webdev')}
          whileHover={{ 
            backgroundColor: "rgba(var(--primary), 0.05)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.1 }}
        >
          Web Development
          {activeSkillTab === 'webdev' && (
            <motion.span 
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            ></motion.span>
          )}
        </motion.button>
        <motion.button 
          className={`px-4 py-2 font-medium transition-colors relative ${
            activeSkillTab === 'ml' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveSkillTab('ml')}
          whileHover={{ 
            backgroundColor: "rgba(var(--primary), 0.05)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.1 }}
        >
          AI & Machine Learning
          {activeSkillTab === 'ml' && (
            <motion.span 
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            ></motion.span>
          )}
        </motion.button>
        <motion.button 
          className={`px-4 py-2 font-medium transition-colors relative ${
            activeSkillTab === 'other' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveSkillTab('other')}
          whileHover={{ 
            backgroundColor: "rgba(var(--primary), 0.05)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.1 }}
        >
          Other Skills
          {activeSkillTab === 'other' && (
            <motion.span 
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            ></motion.span>
          )}
        </motion.button>
      </motion.div>
      
      {/* Tab content with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        {activeSkillTab === 'webdev' && (
          <motion.div 
            key="webdev"
            variants={tabContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <WebDevSkills />
          </motion.div>
        )}
        
        {activeSkillTab === 'ml' && (
          <motion.div 
            key="ml"
            variants={tabContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <MLSkills />
          </motion.div>
        )}
        
        {activeSkillTab === 'other' && (
          <motion.div 
            key="other"
            variants={tabContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <OtherSkills />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 