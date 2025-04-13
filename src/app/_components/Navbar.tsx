'use client';
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavItemProps {
  href: string;
  title: string;
  active?: boolean;
}

const NavItem = ({ href, title, active }: NavItemProps) => (
  <li className="relative">
    <a 
      href={href} 
      className={cn(
        "block py-2 px-3 text-sm transition-colors",
        active 
          ? "text-purple-600 font-medium" 
          : "hover:text-purple-600"
      )}
    >
      {title}
    </a>
    {active && (
      <span className="absolute -bottom-[1px] left-3 right-3 h-[2px] bg-primary rounded-full" />
    )}
  </li>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      // Find the section that is currently in view
      const currentSection = sectionElements.findIndex(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection !== -1) {
        setActiveSection(sections[currentSection]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm py-3" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-heading font-bold relative z-50 text-gradient"
        >
          Sudha<span className="text-secondary">Folio</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            <NavItem href="#home" title="Home" active={activeSection === "home"} />
            <NavItem href="#about" title="About" active={activeSection === "about"} />
            <NavItem href="#skills" title="Skills" active={activeSection === "skills"} />
            <NavItem href="#projects" title="Projects" active={activeSection === "projects"} />
            <NavItem href="#contact" title="Contact" active={activeSection === "contact"} />
            <li className="ml-2">
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-1"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto " : "opacity-0 pointer-events-none"
          )}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-5"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
          
          <nav>
            <ul className="flex flex-col space-y-5 items-center text-lg">
              <NavItem href="#home" title="Home" active={activeSection === "home"} />
              <NavItem href="#about" title="About" active={activeSection === "about"} />
              <NavItem href="#skills" title="Skills" active={activeSection === "skills"} />
              <NavItem href="#projects" title="Projects" active={activeSection === "projects"} />
              <NavItem href="#contact" title="Contact" active={activeSection === "contact"} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
