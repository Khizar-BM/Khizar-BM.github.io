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
      staggerChildren: 0.4
    }
  }
};

export const itemVariants = {
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

export const dotVariants = {
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

export const lineVariants = {
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

export const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.3 }
  }
};

// Button hover animation
export const buttonHoverVariants = {
  hover: {
    backgroundColor: "rgba(var(--primary), 0.05)",
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Button hover animation for main CTA buttons
export const buttonHoverAnimation = {
  scale: 1.03,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

// Interface for timeline item
export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string | React.ReactNode;
  // Determines if the item should appear on the left or right side in desktop view
  // undefined means it will follow alternating pattern
  position?: 'left' | 'right';
}

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  totalItems: number;
}

// Component for Timeline Item with position handling
export const TimelineItemComponent: React.FC<TimelineItemProps> = ({ item, index, totalItems }) => {
  const isEven = index % 2 === 0;
  const position = item.position || (isEven ? 'right' : 'left');
  
  // Custom styles to apply to the content container
  const contentStyles = `
    .timeline-content ul {
      list-style-type: disc;
      margin-left: 1rem;
      padding-left: 1rem;
    }

    .timeline-content ul li {
      margin-bottom: 0.25rem;
      position: relative;
      padding-left: 0.25rem;
    }

    .timeline-content ul li::marker {
      color: hsl(var(--primary));
    }
  `;
  
  return (
    <>
      <style jsx>{contentStyles}</style>
      <motion.div 
        className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
        variants={itemVariants}
      >
        {position === 'right' ? (
          <>
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
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <h4 className="text-base text-primary">{item.organization}</h4>
                </div>
                <div className="text-sm text-muted-foreground timeline-content">
                  {item.description}
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            {/* Content - Left side */}
            <motion.div 
              className="md:col-span-6 md:pr-6 relative order-2 md:order-1 pl-8 md:pl-0 z-20"
              variants={itemVariants}
            >
              <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
                <div className="flex flex-col mb-3">
                  <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <h4 className="text-base text-primary">{item.organization}</h4>
                </div>
                <div className="text-sm text-muted-foreground timeline-content">
                  {item.description}
                </div>
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
          </>
        )}
      </motion.div>
    </>
  );
}

// Component for Timeline 
export const DynamicTimeline: React.FC<{items: TimelineItem[]}> = ({ items }) => {
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
        {items.map((item, index) => (
          <TimelineItemComponent 
            key={item.id} 
            item={item} 
            index={index} 
            totalItems={items.length} 
          />
        ))}
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
    </div>
  );
} 