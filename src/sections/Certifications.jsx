import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Responsive Web Design',
      issuer: 'Freecodecamp.org',
      date: 'Dec 2025',
     
      link: 'https://freecodecamp.org/certification/telzeez/responsive-web-design-v9',
      icon: 'aws',
      skills: ['HTML', 'CSS']
    },
    {
      title: 'JavaScript',
      issuer: 'FreeCodeCamp',
      date: 'Jan 2026',
      
      link: 'https://freecodecamp.org/certification/telzeez/javascript-v9',
      icon: 'meta',
      skills: ['JavaScript']
    },
     {
      title: 'Python',
      issuer: 'FreeCodeCamp',
      date: 'Jan 2026',
      
      link: 'https://freecodecamp.org/certification/telzeez/python-v9',
      icon: 'algo',
      skills: ['Python']
    },
   
  ];

  const getIcon = (iconName) => {
    const iconClasses = {
      aws: 'text-orange-500',
      meta: 'text-blue-600',
      google: 'text-green-500',
      microsoft: 'text-blue-500',
      react: 'text-cyan-500',
      typescript: 'text-blue-400',
      algo: 'text-cyan-500'
    };
    return iconClasses[iconName] || 'text-primary';
  };

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 bg-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications and continuous learning
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group glass-panel p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Certificate Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-primary/10 ${getIcon(cert.icon)}`}>
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
              </div>

              {/* Certificate Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Issued {cert.date}</span>
                  </div>
                  
                </div>

                {/* Skills Covered */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Skills covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={cert.link}
                  className="btn-secondary w-full flex items-center justify-center gap-2 group/btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Credential</span>
                  <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up delay-500">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 glass-container p-8 rounded-2xl max-w-3xl mx-auto">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-3">
                <Star className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Continuous Learning Journey</h3>
              </div>
              <p className="text-muted-foreground">
                I believe in lifelong learning and regularly update my skills with the latest technologies 
                and best practices in the industry.
              </p>
            </div>
            <a 
              href="#contact"
              className="btn-primary whitespace-nowrap"
            >
              Discuss Learning Paths
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;