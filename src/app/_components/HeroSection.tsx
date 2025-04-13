import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[40rem] bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-[0.15] dark:opacity-[0.05]" />
      </div>
      
      <div className="container flex flex-col items-center">
        <div className="relative w-full max-w-4xl mx-auto text-center space-y-10">
          {/* Spotlight Effect */}
          <div className="absolute -z-10 pointer-events-none inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 aspect-square md:w-[50%] rounded-full bg-gradient-to-br from-primary to-secondary opacity-50 blur-3xl dark:opacity-20 animate-spotlight" />
          </div>

          {/* Badge */}
          <div className="inline-flex animate-fade-in mx-auto mb-2">
            <span className="px-3 py-1 text-sm rounded-full border border-border bg-background/50 backdrop-blur-sm">
              Available for work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight animate-fade-in">
            <span className="text-gradient">Full Stack</span> Developer
            <br /> 
            Building <span className="text-sky-600">Modern</span> Web Experiences
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Crafting beautiful, responsive, and user-friendly web applications with modern technologies.
            Turning ideas into elegant digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in animate-delay-400">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in animate-delay-600">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-float"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
