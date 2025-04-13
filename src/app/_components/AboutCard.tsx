import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, Book, User } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AboutCard
            icon={Code}
            title="Web Development"
            description="Building responsive, fast, and accessible web applications using modern frameworks and libraries."
          />
          <AboutCard
            icon={User}
            title="UI/UX Design"
            description="Creating beautiful, intuitive interfaces with a focus on user experience and clean design."
          />
          <AboutCard
            icon={Briefcase}
            title="Business Strategy"
            description="Helping businesses achieve their goals through effective digital strategies and solutions."
          />
          <AboutCard
            icon={Book}
            title="Continuous Learning"
            description="Always exploring new technologies and methodologies to stay at the forefront of web development."
          />
        </div>

        <div className="mt-16 bg-muted/50 rounded-lg p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                With over 5 years of experience in web development, I&apos;ve had the opportunity to work on a wide range of projects, from small business websites to large-scale web applications.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with a strong focus on user experience, ensuring that the solutions I build not only work well but are also a joy to use.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Education</h4>
                <p className="text-muted-foreground">BSc in Computer Science, University of Technology</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Experience</h4>
                <p className="text-muted-foreground">Lead Developer at TechCorp (2021-Present)</p>
                <p className="text-muted-foreground">Frontend Developer at WebSolutions (2018-2021)</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Location</h4>
                <p className="text-muted-foreground">San Francisco, California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
