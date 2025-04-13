import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  BookOpen, 
  Lightbulb, 
  Palette,
  Braces,
  Server,
  Database,
  Layout,
  GitBranch,
  Workflow,
  FolderGit2,
  Cloud,
  Layers
} from "lucide-react";

const AboutCard = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <Card className="bg-background border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
    <CardContent className="p-6">
      <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const TechStackItem = ({ icon: Icon, name }: { icon: React.ElementType; name: string }) => (
  <div className="flex flex-col items-center justify-center p-4 min-w-max mx-4">
    <div className="p-3 rounded-full bg-muted mb-2">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Clone the first few items and add them to the end for seamless looping
    const originalChildren = Array.from(scrollContainer.children).slice(0, 6);
    originalChildren.forEach(child => {
      const clone = child.cloneNode(true);
      scrollContainer.appendChild(clone);
    });
    
    // Animate scroll
    const animateScroll = () => {
      if (!scrollContainer) return;
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
        // Reset position when we reach halfway through the cloned elements
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };
    
    const interval = setInterval(animateScroll, 30);
    return () => clearInterval(interval);
  }, []);

  const techStacks = [
    { name: "React", icon: Braces },
    { name: "Node.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "HTML/CSS", icon: Layout },
    { name: "TypeScript", icon: Code },
    { name: "Next.js", icon: Layers },
    { name: "Express", icon: Server },
    { name: "Git", icon: GitBranch },
    { name: "Redux", icon: Workflow },
    { name: "GitHub", icon: FolderGit2 },
    { name: "AWS", icon: Cloud },
    { name: "Tailwind", icon: Palette }
  ];

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-sky-500 to-teal-400">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate developer on a journey to create efficient and elegant solutions to modern web challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <AboutCard
            icon={Code}
            title="Web Development"
            description="Building responsive, fast, and accessible web applications using modern frameworks and libraries."
          />
          <AboutCard
            icon={BookOpen}
            title="Continuous Learning"
            description="Always exploring new technologies and methodologies to stay at the forefront of web development."
          />
          <AboutCard
            icon={Lightbulb}
            title="Problem Solving"
            description="Approaching complex challenges with creativity and analytical thinking to find optimal solutions."
          />
        </div>

        <div className="bg-muted/50 rounded-xl p-8 border border-border backdrop-blur-sm mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                As a computer science student with a passion for web development, I&lsquo;ve dedicated myself to mastering both frontend and backend technologies through hands-on projects and continuous learning.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical curiosity with a strong focus on user experience, ensuring that the solutions I build not only function well but are also intuitive and enjoyable to use.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Education</h4>
                <p className="text-muted-foreground">
                  B.Tech in Computer Science <br/>
                  Indian Institute of Information Technology, Ranchi, Jharkhand<br/>
                  <span className="text-primary">Currently Pursuing</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Infinite Scroll */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold mb-6 text-center">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-sky-500 to-teal-400">Tech Stack</span>
          </h3>
          
          <div className="relative w-full overflow-hidden py-6 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent">
            <div 
              ref={scrollRef}
              className="flex items-center overflow-x-hidden whitespace-nowrap"
            >
              {techStacks.map((tech, index) => (
                <TechStackItem key={`${tech.name}-${index}`} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}