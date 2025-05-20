interface FeaturedProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

export default function FeaturedProject({
  title,
  description,
  imageSrc,
  tags,
  demoLink,
  codeLink
}: FeaturedProjectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border border-border/40 rounded-xl p-6 bg-card/30 hover:shadow-lg transition-all duration-300">
      {/* Project Image */}
      <div className="rounded-lg overflow-hidden h-full">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Project Details */}
      <div className="flex flex-col justify-center">
        <span className="inline-block px-3 py-1 w-fit text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
          Featured Project
        </span>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-sm font-medium bg-card border border-border rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-4">
          <a 
            href={demoLink} 
            className="px-6 py-2.5 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2" 
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <a 
            href={codeLink} 
            className="px-6 py-2.5 bg-card border border-border text-foreground font-medium rounded-md hover:bg-card/80 transition-colors flex items-center gap-2" 
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 