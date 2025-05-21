"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  containerVariants, 
  itemVariants, 
  ProgressBar, 
  SkillBadge, 
  SkillCard,
  SectionHeader
} from './SkillComponents';

// Define the types of skill displays
export type SkillDisplayType = 'progress' | 'badge' | 'card';

// Define the skill section data structure
export interface SkillItem {
  name: string;
  percentage?: number; // Only for progress type
}

export interface SkillSection {
  title: string;
  icon: React.ReactNode;
  displayType: SkillDisplayType;
  skills: SkillItem[];
}

interface DynamicSkillSectionProps {
  section: SkillSection;
}

export const DynamicSkillSection = ({ section }: DynamicSkillSectionProps) => {
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
    <motion.div variants={itemVariants}>
      <SectionHeader title={section.title} icon={section.icon} />
      
      {section.displayType === 'progress' && (
        <motion.div 
          className="space-y-3"
          variants={containerVariants}
        >
          {section.skills.map((skill) => (
            <ProgressBar 
              key={skill.name} 
              label={skill.name} 
              percentage={skill.percentage || 0} 
            />
          ))}
        </motion.div>
      )}
      
      {section.displayType === 'badge' && (
        <motion.div 
          className="flex flex-wrap gap-2"
          variants={containerVariants}
        >
          {section.skills.map((skill, index) => (
            <SkillBadge 
              key={skill.name} 
              skill={skill.name} 
              index={index} 
            />
          ))}
        </motion.div>
      )}
      
      {section.displayType === 'card' && (
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          variants={containerVariants}
        >
          {section.skills.map((skill) => (
            <SkillCard 
              key={skill.name} 
              skill={skill.name} 
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}; 