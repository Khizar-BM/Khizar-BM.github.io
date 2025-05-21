"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Download } from "lucide-react";
import { DynamicTimeline } from "./TimelineComponents";
import { journeyTabs } from "@/data/journey-data";
import { contentVariants, buttonHoverVariants, buttonHoverAnimation } from "./TimelineComponents";

export function JourneySection() {
  const [activeJourneyTab, setActiveJourneyTab] = useState(journeyTabs[0].id);
  
  // Function to track resume downloads
  const handleResumeDownload = () => {
    console.log("Resume downloaded at:", new Date().toISOString());
    // You can add analytics tracking here if needed
    // Example: if you have a tracking service
    // analytics.trackEvent('resume_download');
  };

  // Find the active tab data
  const activeTab = journeyTabs.find(tab => tab.id === activeJourneyTab) || journeyTabs[0];
  
  return (
    <section id="journey" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle title="My Journey" />
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline tabs */}
            <motion.div 
              className="flex justify-center mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex bg-card/50 rounded-lg p-1.5 border border-border shadow-sm">
                {journeyTabs.map((tab) => (
                  <motion.button 
                    key={tab.id}
                    className={`relative px-6 py-2.5 rounded-md font-medium transition-all duration-200 ${
                      activeJourneyTab === tab.id 
                        ? 'text-accent-foreground hover:bg-card/80' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-card/80'
                    }`}
                    onClick={() => setActiveJourneyTab(tab.id)}
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonHoverVariants}
                  >
                    <div className="flex items-center space-x-2">
                      <span className={activeJourneyTab === tab.id ? 'text-accent-foreground' : ''}>
                        {tab.icon}
                      </span>
                      <span className={activeJourneyTab === tab.id ? 'text-accent-foreground font-semibold' : ''}>
                        {tab.label}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            
            {/* Tab content with AnimatePresence for smooth transitions */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeJourneyTab}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <DynamicTimeline items={activeTab.items} />
              </motion.div>
            </AnimatePresence>
            
            {/* Download CV button */}
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={buttonHoverAnimation}>
                <motion.a 
                  href="/files/Resume_Khizar_Bin_Muzaffar.pdf" 
                  download="Resume_Khizar_Bin_Muzaffar.pdf"
                  className="px-6 py-3 bg-primary text-white font-medium inline-flex items-center rounded-md hover:bg-primary/90 transition-colors"
                  whileTap={{ scale: 0.98 }}
                  onClick={handleResumeDownload}
                >
                  <Download className="h-5 w-5 mr-2" />
                  <span>Download Resume</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 