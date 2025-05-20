export default function OtherSkills() {
  return (
    <div className="space-y-8">
      {/* Databases */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
          Database Technologies
        </h4>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">SQL</span>
              <span className="text-sm font-medium">90%</span>
            </div>
            <div className="h-2 bg-card rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">MongoDB</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="h-2 bg-card rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* DevOps & Tools */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          DevOps & System Tools
        </h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Git</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Linux</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Bash</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Docker</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">CI/CD</span>
        </div>
      </div>
      
      {/* Additional Skills */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
          Additional Skills
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">RESTful APIs</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">GraphQL</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Authentication</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Cloud Services</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Testing</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Agile</span>
          </div>
        </div>
      </div>
    </div>
  );
} 