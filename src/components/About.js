import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/portfolio.data';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Crafting innovative solutions in the financial technology space
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{personal.bio}</p>
                    <p>
                      With a deep understanding of financial systems and regulatory requirements, 
                      I bridge the gap between complex business needs and technical solutions. 
                      My experience spans from building high-frequency trading systems to 
                      developing customer-facing banking applications.
                    </p>
                    <p>
                      I'm passionate about clean code, system architecture, and continuous learning. 
                      When I'm not coding, you'll find me exploring new technologies or 
                      contributing to open-source projects.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Get In Touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium min-w-[60px]">Email:</span>
                      <span className="text-muted-foreground">{personal.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium min-w-[60px]">Phone:</span>
                      <span className="text-muted-foreground">{personal.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium min-w-[60px]">Location:</span>
                      <span className="text-muted-foreground">{personal.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Section */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-400">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {personal.skills.map((skill, index) => (
                      <div
                        key={skill}
                        className="animate-in fade-in slide-in-from-bottom-2 duration-300"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="w-full justify-center py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;