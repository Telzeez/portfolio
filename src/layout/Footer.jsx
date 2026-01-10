import React from 'react';
import { 
  Heart, 
  Coffee, 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ExternalLink,
  ArrowUp
} from 'lucide-react';

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
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold">Abdlazeez<span className="text-primary">.</span></span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack developer crafting beautiful, functional web experiences with modern technologies.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg border border-border hover:scale-110 transition-all duration-300 ${social.color}`}
                  aria-label={`Visit ${social.label}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@abdlazeezolasunkanmi@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="h-5 w-5 shrink-0" />
                <span>hello@abdlazeezolasunkanmi@gmail.com</span>
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <Coffee className="h-5 w-5 shrink-0" />
                <span>Available for freelance work</span>
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-border/50">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Abdlazeez. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" /> and <Coffee className="h-3 w-3 text-amber-600" />
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="/privacy" 
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;