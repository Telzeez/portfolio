import React, { useEffect, useState } from 'react';
import { Award, Briefcase, GraduationCap, Globe, Users, Rocket } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const [skillsInView, setSkillsInView] = useState(false);
  
  // Scroll animations
  const [aboutRef, aboutVisible] = useScrollAnimation({ threshold: 0.2 });
  const [leftRef, leftVisible] = useScrollAnimation({ threshold: 0.3 });
  const [rightRef, rightVisible] = useScrollAnimation({ threshold: 0.3 });
  
  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Node.js', level: 85 },
    { name: 'API Development', level: 82 },
    { name: 'Python', level: 80 },
  ];

  const experiences = [
    {
      year: '2024 - Present',
      role: 'Frontend Developer',
      company: 'FreecodeCamp',
      description: 'Full stack development'
    },
    
  ];



  useEffect(() => {
    if (leftVisible) {
      const timer = setTimeout(() => setSkillsInView(true), 300);
      return () => clearTimeout(timer);
    }
  }, [leftVisible]);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className={`py-20 px-4 md:px-8 bg-background transition-all duration-1000 ${
        aboutVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 scroll-animate ${
          aboutVisible ? 'scroll-animate-visible' : ''
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get to <span className="text-primary">Know Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate developer crafting digital solutions with clean code and modern design principles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div ref={leftRef} className="space-y-12">
            <div className={`glass-panel p-8 rounded-2xl scroll-animate ${
              leftVisible ? 'scroll-animate-visible stagger-1' : ''
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Hello! I'm <span className="text-primary font-semibold">Abdlazeez</span>, a passionate full-stack developer with over a year of experience building modern web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in creating beautiful, functional, and accessible digital experiences. My approach combines technical expertise with creative problem-solving.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge.
                </p>
              </div>
            </div>

            <div className={`glass-panel p-8 rounded-2xl scroll-animate ${
              leftVisible ? 'scroll-animate-visible stagger-2' : ''
            }`}>
              <div className="flex items-center gap-3 mb-8">
                <Rocket className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">My Skills</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className={`scroll-animate ${
                    leftVisible ? `scroll-animate-visible stagger-${index + 1}` : ''
                  }`}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-primary rounded-full transition-all duration-1000 ease-out ${
                          skillsInView ? 'animate-skill-fill' : ''
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${index * 150}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div ref={rightRef} className="space-y-12">
            <div className={`glass-panel p-8 rounded-2xl scroll-animate ${
              rightVisible ? 'scroll-animate-visible stagger-1' : ''
            }`}>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className={`relative pl-8 scroll-animate ${
                    rightVisible ? `scroll-animate-visible stagger-${index + 2}` : ''
                  }`}>
                    <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    {index < experiences.length - 1 && (
                      <div className="absolute left-1.5 top-5 bottom-0 w-0.5 bg-primary/30"></div>
                    )}
                    
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium mb-2">
                        {exp.year}
                      </span>
                      <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className={`glass-panel p-8 rounded-2xl scroll-animate ${
              rightVisible ? 'scroll-animate-visible stagger-5' : ''
            }`}>
              <div className="flex items-center gap-3 mb-8">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">My Values</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Clean Code', desc: 'Writing maintainable and scalable code' },
                  { title: 'User First', desc: 'Prioritizing user experience in every project' },
                  { title: 'Continuous Learning', desc: 'Always exploring new technologies' },
                  { title: 'Collaboration', desc: 'Working effectively in team environments' },
                ].map((value, index) => (
                  <div key={index} className={`p-4 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 scroll-animate ${
                    rightVisible ? `scroll-animate-visible stagger-${index + 6}` : ''
                  }`}>
                    <div className="text-primary font-bold mb-2">{value.title}</div>
                    <div className="text-sm text-muted-foreground">{value.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-16 scroll-animate ${
          aboutVisible ? 'scroll-animate-visible stagger-7' : ''
        }`}>
          <div className="inline-flex flex-col md:flex-row items-center gap-6 glass-container p-8 rounded-2xl max-w-3xl mx-auto hover:scale-105 transition-transform duration-500">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Let's Build Something Amazing Together</h3>
              <p className="text-muted-foreground">
                Have a project in mind? I'd love to hear about it and see how we can work together.
              </p>
            </div>
            <a 
              href="#contact"
              className="btn-primary whitespace-nowrap hover:scale-110 transition-transform duration-300"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;