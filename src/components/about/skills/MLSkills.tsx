export default function MLSkills() {
  return (
    <div className="space-y-8">
      {/* Core ML */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          ML Frameworks
        </h4>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">TensorFlow</span>
              <span className="text-sm font-medium">90%</span>
            </div>
            <div className="h-2 bg-card rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">PyTorch</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="h-2 bg-card rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">scikit-learn</span>
              <span className="text-sm font-medium">90%</span>
            </div>
            <div className="h-2 bg-card rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Advanced AI */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
          Advanced AI Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">LLMs</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Agents</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">RAG</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">NLP</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Computer Vision</span>
          <span className="px-4 py-1.5 bg-card text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:translate-y-[-2px]">Deep Learning</span>
        </div>
      </div>
      
      {/* Data Tools */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
          Data Science Tools
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">pandas</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">NumPy</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Matplotlib</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Jupyter</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Python</span>
          </div>
          <div className="flex items-center p-2 bg-card rounded border border-border hover:border-primary/30 transition-colors">
            <span className="font-medium">Data Viz</span>
          </div>
        </div>
      </div>
    </div>
  );
} 