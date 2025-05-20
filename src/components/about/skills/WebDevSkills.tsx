export default function WebDevSkills() {
  return (
    <div className="space-y-8">
      {/* Frontend */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Frontend
        </h4>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">React</span>
              <span className="text-sm font-medium">90%</span>
            </div>
            <div className="h-2 bg-card rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">TypeScript</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="h-2 bg-card rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">HTML & CSS</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="h-2 bg-card rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Backend */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
          Backend
        </h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Node.js</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Express</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">RESTful APIs</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Middleware</span>
        </div>
      </div>
      
      {/* Libraries & Tools */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
          Libraries & Tools
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Redux</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Next.js</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Tailwind CSS</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">webpack</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">npm</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">JWT</span>
          </div>
        </div>
      </div>
    </div>
  );
} 