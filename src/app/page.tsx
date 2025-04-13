'use client';
import React, { useEffect } from "react";
import CustomCursor from "./_components/CustomCursor";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutCard";
import ProjectsSection from "./_components/ProjectsSection";
import ContactSection from "./_components/ContactSection";
import Footer from "./_components/Footer";


const Index = () => {
  // Apply the grid background effect
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .bg-grid-pattern-light {
        background-size: 40px 40px;
        background-image: 
          linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
      }
      
      .bg-grid-pattern-dark {
        background-size: 40px 40px;
        background-image: 
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Add Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* CustomCursor is client-side only */}
      <CustomCursor />
      <Navbar />
      <main className="mx-auto">
        <HeroSection />
        <AboutSection />
        {/* <SkillsSection /> */}
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;