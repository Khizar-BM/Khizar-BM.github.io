"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants } from './SkillComponents';
import { DynamicSkillSection, SkillSection } from './DynamicSkillSection';

interface DynamicSkillCategoryProps {
  sections: SkillSection[];
}

export default function DynamicSkillCategory({ sections }: DynamicSkillCategoryProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
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
      {sections.map((section, index) => (
        <DynamicSkillSection key={`${section.title}-${index}`} section={section} />
      ))}
    </motion.div>
  );
} 