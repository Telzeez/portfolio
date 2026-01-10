import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Eye, 
  Filter, 
  Star, 
  Users, 
  Calendar,
  ArrowUpRight,
  Zap
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart, payment integration, and admin dashboard.',
      category: 'fullstack',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/projects/ecommerce.jpg',
      github: 'https://github.com/Telzeez/ecommerce',
      live: 'https://ecommerce-demo.com',
      featured: true,
      year: '2025',
      highlights: ['Payment Processing', 'Real-time Updates', 'Admin Dashboard']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with drag-drop interface and team features.',
      category: 'frontend',
      tags: ['React', 'TypeScript', 'Tailwind', 'DnD'],
      image: '/projects/taskapp.jpg',
      github: 'https://github.com/Telzeez/task-app',
      live: 'https://taskapp-demo.com',
      featured: true,
      year: '2025',
      highlights: ['Drag & Drop', 'Team Collaboration', 'Real-time Sync']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations, dark mode, and responsive design.',
      category: 'frontend',
      tags: ['React', 'Tailwind', 'Framer Motion', 'GSAP'],
      image: '/projects/portfolio.jpg',
      github: 'https://github.com/Telzeez/portfolio',
      live: 'https://abdlazeezolasunkanmi@gmail.com',
      featured: false,
      year: '2025',
      highlights: ['Animations', 'Dark Mode', 'Responsive']
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with forecasts, maps, and location-based services.',
      category: 'frontend',
      tags: ['Next.js', 'API', 'Chart.js', 'Geolocation'],
      image: '/projects/weather.jpg',
      github: 'https://github.com/Telzeez/weather-app',
      live: 'https://weather-demo.com',
      featured: false,
      year: '2025',
      highlights: ['Real-time Data', 'Interactive Maps', 'Forecasts']
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization and reports.',
      category: 'fullstack',
      tags: ['React', 'Express', 'PostgreSQL', 'D3.js'],
      image: '/projects/dashboard.jpg',
      github: 'https://github.com/Telzeez/social-dashboard',
      live: 'https://dashboard-demo.com',
      featured: true,
      year: '2026',
      highlights: ['Data Visualization', 'Analytics', 'Export Reports']
    },
    {
      id: 6,
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool with text generation and image synthesis.',
      category: 'ai',
      tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
      image: '/projects/ai-tool.jpg',
      github: 'https://github.com/username/ai-generator',
      live: 'https://ai-demo.com',
      featured: false,
      year: '2026',
      highlights: ['AI Integration', 'Content Generation', 'Custom Models']
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Code className="h-4 w-4" />
            <span className="text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, highlighting technical challenges and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-up delay-100">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                  : 'border-border bg-background text-foreground hover:border-primary/50 hover:bg-secondary'
              }`}
            >
              <Filter className="h-3 w-3" />
              <span className="font-medium">{filter.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === filter.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-secondary text-muted-foreground'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-panel rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Code className="h-12 w-12 text-primary/30 mx-auto mb-2" />
                    <div className="text-primary/50 font-bold">{project.title}</div>
                    <div className="text-xs text-muted-foreground">Project Preview</div>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <Star className="h-3 w-3 text-primary" />
                      <span className="text-xs font-bold text-primary">Featured</span>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Key Features</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary flex items-center justify-center gap-2 group/btn"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary flex items-center justify-center gap-2 group/btn"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fade-up">
            <div className="glass-container p-12 rounded-2xl max-w-md mx-auto">
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try selecting a different filter to see more projects
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className="btn-primary"
              >
                Show All Projects
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-up delay-500">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 glass-container p-8 rounded-2xl max-w-3xl mx-auto">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Want to Collaborate?</h3>
              </div>
              <p className="text-muted-foreground">
                Have an idea for a project? Let's work together to bring it to life with modern 
                technologies and best practices.
              </p>
            </div>
            <a 
              href="#contact"
              className="btn-primary whitespace-nowrap"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;