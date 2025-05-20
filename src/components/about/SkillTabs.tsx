"use client";

import { useState } from 'react';
import WebDevSkills from './skills/WebDevSkills';
import MLSkills from './skills/MLSkills';
import OtherSkills from './skills/OtherSkills';

export function SkillTabs() {
  const [activeSkillTab, setActiveSkillTab] = useState('webdev');
  
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">My Skills</h3>
      
      {/* Skill tabs */}
      <div className="flex mb-6 border-b border-border">
        <button 
          className={`px-4 py-2 font-medium transition-colors relative ${
            activeSkillTab === 'webdev' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveSkillTab('webdev')}
        >
          Web Development
          {activeSkillTab === 'webdev' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
        <button 
          className={`px-4 py-2 font-medium transition-colors relative ${
            activeSkillTab === 'ml' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveSkillTab('ml')}
        >
          AI & Machine Learning
          {activeSkillTab === 'ml' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
        <button 
          className={`px-4 py-2 font-medium transition-colors relative ${
            activeSkillTab === 'other' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveSkillTab('other')}
        >
          Other Skills
          {activeSkillTab === 'other' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
      </div>
      
      {/* Web Development Skills */}
      {activeSkillTab === 'webdev' && <WebDevSkills />}
      
      {/* AI & Machine Learning Skills */}
      {activeSkillTab === 'ml' && <MLSkills />}
      
      {/* Other Technical Skills */}
      {activeSkillTab === 'other' && <OtherSkills />}
    </div>
  );
} 