'use client';
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  frontendgithubUrl?:string;
  backendgithubUrl?:string;
  category: string;
}

const projects: ProjectProps[] = [
  {
    title: "WorkTrack",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/dashboard.png",
    tags: ["Nextjs", "Socket.io", "MongoDB", "Shadcn","tailwind"],
    liveUrl: "https://worktrack-mu.vercel.app",
    githubUrl: "https://github.com/sudha-chandrann/worktrack",
    category: "fullstack",
  },
  {
    title: "RESTful API Service",
    description: "A scalable RESTful API service for a YouTube-like video platform with authentication and authorization.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    tags: ["Node.js", "Express", "JWT", "MongoDB"],
    githubUrl: "https://github.com/sudha-chandrann/videoStreamingBackend",
    category: "backend",
  },
  {
    title: "Learning Management System (LMS)",
    description: "Learnify is a modern LMS for educators to create, manage, and monetize courses with ease. It features robust analytics, student management, and AI-powered tools to enhance the learning experience.",
    image: "/lms.png",
    tags: ["Nextjs", "prisma", "TypeScript","mySql"],
    liveUrl: "https://learnify-blush.vercel.app/",
    githubUrl: "https://github.com/sudha-chandrann/Learnify",
    category: "fullstack",
  },
  {
    title: "Real-time Chat Application",
    description: "A real-time chat application with private messaging and group chat functionality.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2670&auto=format&fit=crop",
    tags: ["React", "Socket.io", "Express", "Tailwind CSS","JavaScript","Node js","MongoDB","Redux"],
    liveUrl: "https://chat-app-frontend-three-mu.vercel.app",
    frontendgithubUrl: "https://github.com/sudha-chandrann/ChatAppFrontend",
    backendgithubUrl: "https://github.com/sudha-chandrann/ChatAppBackend",
    category: "fullstack",
  },
];

const ProjectCard = ({ project }: { project: ProjectProps }) => (
  <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 flex flex-col h-full">
    <div className="h-48 overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform hover:scale-105"
        width={100}
        height={100}
      />
    </div>
    <CardContent className="pt-6 flex-grow">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex gap-3 pt-2 border-t flex-wrap">
      {project.liveUrl && (
        <Button variant="outline" size="sm" asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
            <Link className="h-4 w-4" />
            <span>Live Demo</span>
          </a>
        </Button>
      )}
      {project.githubUrl && (
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
        </Button>
      )}
      {project.frontendgithubUrl && (
        <Button variant="outline" size="sm" asChild>
          <a href={project.frontendgithubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span>Frontend Code</span>
          </a>
        </Button>
      )}
      {project.backendgithubUrl && (
        <Button variant="outline" size="sm" asChild>
          <a href={project.backendgithubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span>Backend Code</span>
          </a>
        </Button>
      )}
    </CardFooter>
  </Card>
);

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-muted"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/sudha-chandrann" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              View More on GitHub
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
