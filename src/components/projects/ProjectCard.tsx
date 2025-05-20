interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  tags,
  demoLink,
  codeLink
}: ProjectCardProps) {
  return (
    <div className="min-w-[280px] w-[calc(100%-2rem)] sm:w-[330px] flex-shrink-0 rounded-lg border border-border/40 bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-card border border-border rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a 
            href={demoLink} 
            className="px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary/90 transition-colors" 
            aria-label="View Demo"
          >
            Live Demo
          </a>
          <a 
            href={codeLink} 
            className="px-3 py-1.5 bg-card border border-border text-xs font-medium rounded hover:bg-card/80 transition-colors" 
            aria-label="View Code"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
} 