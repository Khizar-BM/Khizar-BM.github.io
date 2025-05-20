import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/70 border-b shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="font-bold text-xl">
            <span className="text-gradient">Khizar.dev</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-primary transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button asChild size="sm" className="hidden md:flex animated-border-box">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Software Engineer<br />
              <span className="text-gradient font-extrabold">& AI Specialist</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              Building elegant solutions to complex problems with code and AI technologies.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button asChild className="animated-border-box">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild className="glow-effect">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-2/5">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20 animate-float shadow-glow">
              {/* Replace with your profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 animate-gradient" />
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">KM</div>
            </div>
          </div>
        </section>

        <div className="container mx-auto">
          <div className="h-px w-full bg-gradient-subtle animate-pulse-soft"></div>
        </div>
        
        {/* About Section */}
        <section id="about" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="text-gradient">About Me</span>
            <div className="h-px flex-grow ml-4 bg-gradient-subtle"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-card-gradient animated-border-box">
              <CardHeader>
                <CardTitle>Background</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I'm a passionate software engineer with expertise in both traditional software development and modern AI technologies. With a strong foundation in computer science and years of hands-on experience, I build solutions that are not only technically sound but also intuitive and user-friendly.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-card-gradient animated-border-box">
              <CardHeader>
                <CardTitle>My Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I believe in writing clean, maintainable code that solves real problems. My experience with AI has taught me to approach challenges from multiple angles, finding innovative solutions that blend traditional programming with cutting-edge machine learning techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="container mx-auto">
          <div className="h-px w-full bg-gradient-subtle animate-pulse-soft"></div>
        </div>
        
        {/* Skills Section */}
        <section id="skills" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="text-gradient">Skills & Expertise</span>
            <div className="h-px flex-grow ml-4 bg-gradient-subtle"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-card-gradient animated-border-box">
              <CardHeader className="pb-2">
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">React</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">Next.js</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">TypeScript</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">Tailwind CSS</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">HTML/CSS</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">UI/UX Design</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-card-gradient animated-border-box">
              <CardHeader className="pb-2">
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">Node.js</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">Python</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">Express</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">Django</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">RESTful APIs</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">GraphQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-card-gradient animated-border-box">
              <CardHeader className="pb-2">
                <CardTitle>AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">TensorFlow</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">PyTorch</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">LLMs</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">Computer Vision</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">NLP</Badge>
                  <Badge className="bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-colors">Data Science</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="container mx-auto">
          <div className="h-px w-full bg-gradient-subtle animate-pulse-soft"></div>
        </div>
        
        {/* Projects Section */}
        <section id="projects" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="text-gradient">Featured Projects</span>
            <div className="h-px flex-grow ml-4 bg-gradient-subtle"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden hover-card-gradient">
              <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:opacity-100 transition-opacity opacity-0"></div>
                <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">🤖</span>
              </div>
              <CardHeader>
                <CardTitle>AI-Powered Assistant</CardTitle>
                <CardDescription>Conversational AI platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A sophisticated conversational agent built with state-of-the-art NLP techniques and LLMs to provide contextual assistance.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex space-x-2">
                  <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">React</Badge>
                  <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">Python</Badge>
                </div>
                <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary/80 transition-colors">
                  <a href="#">View Project</a>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Project 2 */}
            <Card className="overflow-hidden hover-card-gradient">
              <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:opacity-100 transition-opacity opacity-0"></div>
                <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">📊</span>
              </div>
              <CardHeader>
                <CardTitle>Data Visualization Dashboard</CardTitle>
                <CardDescription>Interactive analytics platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A comprehensive dashboard for visualizing complex datasets with real-time updates and customizable views.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex space-x-2">
                  <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">D3.js</Badge>
                  <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">Node.js</Badge>
                </div>
                <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary/80 transition-colors">
                  <a href="#">View Project</a>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Project 3 */}
            <Card className="overflow-hidden hover-card-gradient">
              <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:opacity-100 transition-opacity opacity-0"></div>
                <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">📱</span>
              </div>
              <CardHeader>
                <CardTitle>Mobile Health App</CardTitle>
                <CardDescription>Wellness tracking application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A mobile application that uses ML algorithms to provide personalized health recommendations and track fitness goals.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex space-x-2">
                  <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">React Native</Badge>
                  <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">TensorFlow</Badge>
                </div>
                <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary/80 transition-colors">
                  <a href="#">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <div className="container mx-auto">
          <div className="h-px w-full bg-gradient-subtle animate-pulse-soft"></div>
        </div>
        
        {/* Contact Section */}
        <section id="contact" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="text-gradient">Get In Touch</span>
            <div className="h-px flex-grow ml-4 bg-gradient-subtle"></div>
          </h2>
          <Card className="animated-border-box shadow-glow">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gradient">Contact Information</h3>
                  <p className="text-muted-foreground">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 group">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary group-hover:text-primary/70 transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <span className="group-hover:text-primary/80 transition-colors">hello@khizar.dev</span>
                    </div>
                    <div className="flex items-center space-x-2 group">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary group-hover:text-primary/70 transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className="group-hover:text-primary/80 transition-colors">San Francisco, CA</span>
                    </div>
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" asChild className="rounded-full hover:bg-primary/10 transition-colors">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                              <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
                              </svg>
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" asChild className="rounded-full hover:bg-primary/10 transition-colors">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                              <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                              </svg>
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" asChild className="rounded-full hover:bg-primary/10 transition-colors">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                              <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                              </svg>
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Twitter</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                        <input id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                        <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                      <input id="subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors" placeholder="Subject" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                      <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors" placeholder="Your message"></textarea>
                    </div>
                    <Button className="w-full animated-border-box">Send Message</Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Khizar. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
