import React from "react";
import {
  Code,
  Palette,
  Braces,
  Server,
  Database,
  Layout,
  GitBranch,
  Workflow,
  FolderGit2,
  Cloud,
  Layers,
  LucideIcon
} from "lucide-react";

const TechStackItem = ({ icon: Icon, name }:{icon:LucideIcon,name:string}) => (
  <div className="flex flex-col items-center justify-center p-2 sm:p-3 mx-2">
    <div className="p-2 rounded-full bg-gray-100 mb-1">
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
    </div>
    <span className="text-xs sm:text-sm font-medium">{name}</span>
  </div>
);

export default function SkillSection() {
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

  // Create two identical sets of items for seamless looping
  const duplicatedTechStacks = [...techStacks, ...techStacks];

  return (
    <section id="skills" className="py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-sky-500 to-teal-400">Tech Stack</span>
          </h3>
        </div>
        
        {/* Outer container with hidden overflow */}
        <div className="w-[400px] mx-auto md:w-[800px] lg:w-full overflow-hidden">
          {/* Scrolling container */}
          <div className="flex animate-marquee">
            {duplicatedTechStacks.map((tech, index) => (
              <TechStackItem 
                key={`tech-${tech.name}-${index}`} 
                icon={tech.icon} 
                name={tech.name} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS for animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: fit-content; /* Only take up as much space as needed */
        }
      `}</style>
    </section>
  );
}