"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ExperienceTimeline from "./ExperienceTimeline";
import EducationTimeline from "./EducationTimeline";

export function JourneySection() {
  const [activeJourneyTab, setActiveJourneyTab] = useState("experience");
  
  return (
    <section id="journey" className="section">
      <div className="container-custom">
        <SectionTitle title="My Journey" />
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-card/50 rounded-lg p-1.5 border border-border shadow-sm">
              <button 
                className={`px-6 py-2.5 rounded-md font-medium transition-all duration-200 ${
                  activeJourneyTab === 'experience' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/80'
                }`}
                onClick={() => setActiveJourneyTab('experience')}
              >
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <span>Experience</span>
                </div>
              </button>
              <button 
                className={`px-6 py-2.5 rounded-md font-medium transition-all duration-200 ${
                  activeJourneyTab === 'education' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/80'
                }`}
                onClick={() => setActiveJourneyTab('education')}
              >
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                  <span>Education</span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Experience Timeline */}
          {activeJourneyTab === 'experience' && <ExperienceTimeline />}
          
          {/* Education Timeline */}
          {activeJourneyTab === 'education' && <EducationTimeline />}
          
          {/* Download CV button */}
          <div className="flex justify-center mt-12">
            <a 
              href="#" 
              className="px-6 py-3 bg-primary text-white font-medium inline-flex items-center rounded-md hover:bg-primary/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 