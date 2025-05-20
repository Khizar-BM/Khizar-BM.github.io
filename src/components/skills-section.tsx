"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Skill categories and items
const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "🎨",
    description: "Creating responsive, accessible, and performant user interfaces with modern web technologies.",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "UI/UX Design", level: 80 },
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: "⚙️",
    description: "Building scalable and secure server-side applications and APIs.",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express", level: 90 },
      { name: "Django", level: 75 },
      { name: "RESTful APIs", level: 95 },
      { name: "GraphQL", level: 80 },
    ]
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: "🧠",
    description: "Developing intelligent systems using the latest AI and machine learning techniques.",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "LLMs", level: 90 },
      { name: "Computer Vision", level: 75 },
      { name: "NLP", level: 85 },
      { name: "Data Science", level: 80 },
    ]
  }
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)
  
  // Get the active category
  const category = skillCategories.find(cat => cat.id === activeCategory)!
  
  return (
    <section id="skills" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-[100px] -z-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-tr-[100px] -z-10 blur-3xl" />
      
      <div className="container mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.div 
            className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Expertise
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-foreground/70 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I specialize in a wide range of technologies across the software development spectrum, 
            from frontend design to advanced AI applications.
          </motion.p>
        </div>
        
        {/* Category tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto hide-scrollbar">
          <div className="inline-flex p-1 rounded-full bg-muted/50 backdrop-blur-sm">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  cat.id === activeCategory 
                    ? "bg-background text-primary shadow-md" 
                    : "text-foreground/60 hover:text-foreground"
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Active category content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Category info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.name}</h3>
              </div>
              
              <p className="text-foreground/70">
                {category.description}
              </p>
              
              {/* Skills list with bars */}
              <div className="space-y-6 mt-8">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="relative aspect-square">
              <div className="absolute inset-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10" />
                  
                  {/* Skill level paths */}
                  <g className="origin-center">
                    {category.skills.map((skill, i) => {
                      const angle = (i * (360 / category.skills.length)) * (Math.PI / 180);
                      const r = 35 * (skill.level / 100);
                      const x = 50 + r * Math.cos(angle);
                      const y = 50 + r * Math.sin(angle);
                      
                      return (
                        <motion.g key={skill.name}>
                          {/* Line from center */}
                          <motion.line 
                            x1="50" 
                            y1="50" 
                            x2={x} 
                            y2={y} 
                            stroke="currentColor" 
                            strokeWidth="0.5" 
                            className="text-foreground/30"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                          />
                          
                          {/* Skill point */}
                          <motion.circle 
                            cx={x} 
                            cy={y} 
                            r="3" 
                            className="fill-primary"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          />
                          
                          {/* Skill name */}
                          <motion.text 
                            x={x + (x > 50 ? 5 : -5)} 
                            y={y} 
                            textAnchor={x > 50 ? "start" : "end"} 
                            alignmentBaseline="middle" 
                            fontSize="3" 
                            className="fill-foreground/70"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                          >
                            {skill.name}
                          </motion.text>
                        </motion.g>
                      );
                    })}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 