import React from 'react';
import { 
  Heart, 
  Coffee, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ExternalLink,
  ArrowUp
} from 'lucide-react';
import new_logo from '@/assets/images/new_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Telzeez', color: 'hover:text-gray-800 dark:hover:text-gray-300' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/abdlazeez', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/Olasunkanmi_A_A', color: 'hover:text-sky-500' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/abdlazeez', color: 'hover:text-pink-600' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'React Applications',
    'Consulting',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src={new_logo} 
                  alt="Telzeez Logo" 
                  className="h-10 w-10 rounded-full border border-primary/30 group-hover:border-primary/60 transition-all duration-300"
                />
                <div className="absolute -inset-2 rounded-full bg-primary/5 blur-md group-hover:bg-primary/10 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  Telz<span className="text-primary">ee</span>z<span className="text-primary">.</span>
                </span>
                <span className="text-xs text-muted-foreground">Full-Stack Developer</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Crafting elegant digital solutions with modern technologies. 
              Passionate about creating beautiful, functional web experiences that make a difference.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border border-border/50 bg-background/50 hover:scale-110 hover:shadow-md transition-all duration-300 ${social.color}`}
                  aria-label={`Visit ${social.label}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300"></div>
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <div className="flex items-center gap-3 group cursor-default">
                    <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-300"></div>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {service}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-border/30">
              <a
                href="mailto:hello@abdlazeezolasunkanmi@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 group"
              >
                <span className="text-sm font-medium">Start a project</span>
                <ArrowUp className="h-3 w-3 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground">Get in Touch</h3>
            <div className="space-y-6">
              <a
                href="mailto:hello@abdlazeezolasunkanmi@gmail.com"
                className="flex items-start gap-4 p-4 rounded-xl border border-border/30 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                  <p className="text-foreground group-hover:text-primary transition-colors duration-300">
                    hello@abdlazeezolasunkanmi@gmail.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/30">
                <Coffee className="h-5 w-5 text-amber-600 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Available for</p>
                  <p className="text-foreground font-medium">Freelance & Full-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-muted-foreground">
            <span>© {currentYear} Abdlazeez. All rights reserved.</span>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5">
                Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" /> 
              </span>
              <span className="flex items-center gap-1.5 ml-2">
                and <Coffee className="h-3.5 w-3.5 text-amber-600" />
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <div className="p-1.5 rounded-lg border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </div>
              <span>Back to top</span>
            </button>
            
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="/privacy" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy
              </a>
              <a 
                href="/terms" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;