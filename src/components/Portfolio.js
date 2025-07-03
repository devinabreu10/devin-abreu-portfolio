import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ThemeToggle from './ThemeToggle';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;