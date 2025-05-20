export default function ExperienceTimeline() {
  return (
    <div className="relative py-10">
      {/* Center timeline */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 transform -translate-x-1/2"></div>
      
      {/* Timeline start marker */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
      </div>
      
      {/* Timeline Items */}
      <div className="space-y-16 md:space-y-24">
        {/* Timeline Item 1 - Right side */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
          {/* Empty space for left side */}
          <div className="hidden md:block md:col-span-6"></div>
          
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
          
          {/* Line from center to card - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-1/2 w-[calc(6.5%)] bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"></div>
          
          {/* Content - Right side */}
          <div className="md:col-span-6 pl-8 md:pl-6 relative z-20">
            <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
              <div className="flex flex-col mb-3">
                <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                  2021 - Present
                </span>
                <h3 className="text-lg font-bold">Senior AI Engineer</h3>
                <h4 className="text-base text-primary">Innovative AI Solutions</h4>
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                <li>Led development of large-scale ML systems</li>
                <li>Designed and implemented NLP solutions</li>
                <li>Mentored junior engineers on best practices</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Timeline Item 2 - Left side */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
          {/* Content - Left side */}
          <div className="md:col-span-6 md:pr-6 relative order-2 md:order-1 pl-8 md:pl-0 z-20">
            <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
              <div className="flex flex-col mb-3">
                <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                  2019 - 2021
                </span>
                <h3 className="text-lg font-bold">Machine Learning Engineer</h3>
                <h4 className="text-base text-primary">AI Research Group</h4>
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                <li>Developed computer vision algorithms for autonomous systems</li>
                <li>Built and trained deep learning models using PyTorch</li>
                <li>Published research papers on image segmentation techniques</li>
              </ul>
            </div>
          </div>
          
          {/* Empty space for right side */}
          <div className="hidden md:block md:col-span-6 order-1 md:order-2"></div>
          
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
          
          {/* Line from center to card - desktop only */}
          <div className="hidden md:block absolute right-[calc(50%)] top-1/2 w-[calc(6.5%)] bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"></div>
        </div>
        
        {/* Timeline Item 3 - Right side */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
          {/* Empty space for left side */}
          <div className="hidden md:block md:col-span-6"></div>
          
          {/* Timeline connector */}
          <div className="absolute left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
          
          {/* Line from center to card - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-1/2 w-[calc(6.5%)] bg-primary/70 h-[2px] transform -translate-y-1/2 z-[5]"></div>
          
          {/* Content - Right side */}
          <div className="md:col-span-6 pl-8 md:pl-6 relative z-20">
            <div className="bg-card p-6 rounded-lg border border-border/60 shadow-sm transition-all duration-300 relative z-20 hover:shadow-md hover:scale-[1.01] hover:border-primary/20">
              <div className="flex flex-col mb-3">
                <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                  2016 - 2019
                </span>
                <h3 className="text-lg font-bold">Frontend Developer</h3>
                <h4 className="text-base text-primary">Web Solutions Inc.</h4>
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                <li>Built responsive web applications using React</li>
                <li>Implemented UI/UX designs</li>
                <li>Collaborated with cross-functional teams</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Timeline end marker */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
        </div>
      </div>
    </div>
  );
} 