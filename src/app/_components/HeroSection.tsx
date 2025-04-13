import React, { useState, useEffect } from "react";
import { ArrowDown, Code, Sparkles, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [animateElements, setAnimateElements] = useState(false);
  
  useEffect(() => {
    setAnimateElements(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-20 dark:opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
      
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/5 transition-all duration-1000 ${animateElements ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
          <Code className="w-12 h-12 text-primary/50" />
        </div>
        <div className={`absolute top-2/3 right-1/5 transition-all duration-1000 ${animateElements ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <Layers className="w-14 h-14 text-secondary/50" />
        </div>
        <div className={`absolute bottom-1/4 left-1/4 transition-all duration-1000 ${animateElements ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '900ms' }}>
          <Sparkles className="w-10 h-10 text-primary/50" />
        </div>
      </div>
      
      <div className="container flex flex-col items-center">
        <div className="relative w-full max-w-4xl mx-auto text-center space-y-10">
          <div className="absolute -z-10 pointer-events-none inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 aspect-square md:w-2/3 rounded-full bg-gradient-to-br from-primary via-sky-400 to-purple-500 opacity-40 blur-3xl dark:opacity-20 animate-spotlight" />
          </div>
          
          <div className={`inline-flex mx-auto mb-2 transition-all duration-700 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            <span className="px-3 py-1 text-sm rounded-full border border-border bg-background/80 backdrop-blur-sm shadow-sm">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for work
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight transition-all duration-700 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
            Hi, I&apos;m <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400">Sudha Chandran</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 rounded-full"></span>
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-sky-700 to-teal-700">Full Stack</span> Developer
            <br />
            Building <span className="relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r  from-sky-700 to-teal-700">Modern</span>
              <span className="absolute -z-10 bottom-0 left-0 w-full h-3 bg-sky-400/30 rounded"></span>
            </span> Web Experiences
          </h1>
          
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
            Crafting beautiful, responsive, and user-friendly web applications with modern technologies.
            Turning ideas into elegant digital solutions.
          </p>
          
          <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-sky-500 hover:from-purple-700 hover:to-sky-600 border-none shadow-lg transition-all duration-300 hover:shadow-purple-400/20 hover:scale-105" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 shadow-sm hover:shadow-lg hover:border-sky-400/50 transition-all duration-300 hover:scale-105" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
        </div>
        
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1200ms' }}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce hover:bg-primary/10 transition-colors"
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