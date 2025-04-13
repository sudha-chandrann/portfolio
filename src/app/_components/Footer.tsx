import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-heading font-bold text-gradient">
              Dev<span className="text-secondary">Folio</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:contact@example.com"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
