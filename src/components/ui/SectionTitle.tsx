interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start'} mb-${subtitle ? '10' : '8'}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title.toUpperCase()}</h2>
      <div className="w-12 h-1 bg-primary rounded-full"></div>
      
      {subtitle && (
        <p className={`text-muted-foreground max-w-3xl mx-auto mt-6 ${centered ? 'text-center' : 'text-left'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
} 