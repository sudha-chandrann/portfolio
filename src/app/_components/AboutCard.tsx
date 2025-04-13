import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {  Code, BookOpen, Lightbulb } from "lucide-react";

const AboutCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <Card className="bg-background border border-border hover:border-primary/50 transition-all">
    <CardContent className="p-6">
      <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate full stack developer with a love for creating efficient and elegant solutions to complex problems.
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

        <div className="mt-16 bg-muted/50 rounded-lg p-8 border border-border">
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
      </div>
    </section>
  );
}