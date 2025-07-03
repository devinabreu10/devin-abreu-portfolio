import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/portfolio.data';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { projects } = portfolioData;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Development': return 'bg-yellow-500';
      case 'Planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status.toLowerCase() === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Showcasing innovative solutions in financial technology
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {['all', 'live', 'development'].map((filterType) => (
                <Button
                  key={filterType}
                  variant={filter === filterType ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter(filterType)}
                  className="capitalize transition-all duration-300 hover:scale-105"
                >
                  <Filter size={16} className="mr-2" />
                  {filterType === 'all' ? 'All Projects' : filterType}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02] overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button size="sm" className="flex-1 group/btn">
                        <ExternalLink size={16} className="mr-2 group-hover/btn:rotate-45 transition-transform duration-300" />
                        View Project
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github size={16} className="mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found for the selected filter.
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
            <Card className="inline-block border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new opportunities and innovative projects.
                </p>
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90"
                >
                  Let's Work Together
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;