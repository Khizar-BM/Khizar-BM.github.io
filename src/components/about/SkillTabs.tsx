"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DynamicSkillCategory from './skills/DynamicSkillCategory';
import { skillTabs } from '@/data/skills-data';
import { underlineVariants, containerVariants, itemVariants, tabContentVariants } from './skills/SkillComponents';

export function SkillTabs() {
  const [activeSkillTab, setActiveSkillTab] = useState(skillTabs[0].id);
  
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
        {skillTabs.map((tab) => (
          <motion.button 
            key={tab.id}
            className={`px-4 py-2 font-medium transition-colors relative ${
              activeSkillTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveSkillTab(tab.id)}
            whileHover={{ 
              backgroundColor: "rgba(var(--primary), 0.05)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            {tab.label}
            {activeSkillTab === tab.id && (
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-primary"
                variants={underlineVariants}
                initial="hidden"
                animate="visible"
              ></motion.span>
            )}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Tab content with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        {skillTabs.map((tab) => (
          activeSkillTab === tab.id && (
            <motion.div 
              key={tab.id}
              variants={tabContentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <DynamicSkillCategory sections={tab.sections} />
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </motion.div>
  );
} 