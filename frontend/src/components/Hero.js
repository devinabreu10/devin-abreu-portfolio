import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mockData';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255_/_0.1)_1px,transparent_0)] bg-[size:24px_24px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 animate-in zoom-in duration-700 delay-300">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-bold">
              {personal.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {personal.title}
            </p>
            <Badge variant="outline" className="text-sm px-4 py-2">
              {personal.industry}
            </Badge>
          </div>

          {/* Bio */}
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {personal.bio.substring(0, 200)}...
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a href={personal.socialLinks.github} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href={personal.socialLinks.linkedin} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${personal.email}`} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;