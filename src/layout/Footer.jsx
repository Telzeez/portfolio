import React, { useState } from "react";
import {
  Heart,
  Coffee,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  ArrowUp,
  Send,
  MapPin,
  ArrowRight,
} from "lucide-react";
import new_logo from "@/assets/images/new_logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Telzeez",
      color: "hover:text-gray-800 dark:hover:text-gray-300",
      bg: "hover:bg-gray-100 dark:hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/abdlazeez",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/Olasunkanmi_A_A",
      color: "hover:text-sky-500",
      bg: "hover:bg-sky-50 dark:hover:bg-sky-900/20",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/abdlazeez",
      color: "hover:text-pink-600",
      bg: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", desc: "Modern, responsive sites" },
    { name: "React Applications", desc: "SPAs & dashboards" },
    { name: "Consulting", desc: "Architecture & code reviews" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-500" />
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Top CTA Section */}
        <div className="py-16 md:py-20">
          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - CTA text */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Let's build something{" "}
                  <span className="text-primary">amazing together</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Have a project in mind? I'm always open to discussing new ideas,
                  collaborations, or just a friendly chat.
                </p>
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2 group"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Right side - Subscribe form */}
              <div className="relative">
                <form onSubmit={handleSubscribe} className="space-y-4 text-center lg:text-left">
                  <h3 className="text-xl font-semibold flex items-center gap-2 justify-center lg:justify-start">
                    <Send className="h-5 w-5 text-primary" />
                    Stay Updated
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get occasional updates about new projects and tech insights.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      required
                    />
                    <button
                      type="submit"
                      className="btn-primary whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                      {subscribed && <CheckIcon />}
                    </button>
                  </div>
                  {subscribed && (
                    <p className="text-sm text-green-500 flex items-center gap-1 animate-fade-up justify-center lg:justify-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Thanks for subscribing!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column (spans 4 on large) */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <a href="#home" className="flex items-center gap-3 group justify-center lg:justify-start">
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
                  Telz<span className="text-primary">ee</span>z
                  <span className="text-primary">.</span>
                </span>
                <span className="text-xs text-muted-foreground">
                  Full-Stack Developer
                </span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Crafting elegant digital solutions with modern technologies.
              Passionate about creating beautiful, functional web experiences
              that make a difference.
            </p>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-3 rounded-xl border border-border/50 bg-background/50 hover:scale-110 hover:shadow-md transition-all duration-300 group ${social.color} ${social.bg}`}
                  aria-label={`Visit ${social.label}`}
                >
                  <social.icon className="h-5 w-5" />
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (spans 2) */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h3 className="text-lg font-bold mb-6 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name} className="flex justify-center lg:justify-start">
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300"></div>
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (spans 3) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-lg font-bold mb-6 text-foreground">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name} className="flex justify-center lg:justify-start">
                  <div className="group cursor-default">
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-300"></div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 lg:ml-4">
                      {service.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-border/30 flex justify-center lg:justify-start">
              <a
                href="mailto:abdlazeezolasunkanmi@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 group"
              >
                <span className="text-sm font-medium">Start a project</span>
                <ArrowUp className="h-3 w-3 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact Info (spans 3) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-lg font-bold mb-6 text-foreground">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:abdlazeezolasunkanmi@gmail.com"
                className="flex flex-col items-center lg:flex-row lg:items-start gap-4 p-4 rounded-xl border border-border/30 hover:border-primary/30 hover:shadow-md transition-all duration-300 group overflow-hidden"
              >
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col items-center lg:items-start min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">
                    Email me at
                  </p>
                  <p className="text-foreground group-hover:text-primary transition-colors duration-300 break-all text-center lg:text-left">
                    abdlazeezolasunkanmi@gmail.com
                  </p>
                </div>
              </a>
              <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 p-4 rounded-xl border border-border/30">
                <Coffee className="h-5 w-5 text-amber-600 shrink-0" />
                <div className="text-center lg:text-left">
                  <p className="text-sm text-muted-foreground">Available for</p>
                  <p className="text-foreground font-medium">
                    Freelance & Full-time
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 p-4 rounded-xl border border-border/30">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div className="text-center lg:text-left">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">
                    Remote / Worldwide
                  </p>
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
                Made with{" "}
                <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
              </span>
              <span className="flex items-center gap-1.5 ml-2">
                and <Coffee className="h-3.5 w-3.5 text-amber-600" />
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper icon for subscription success
const CheckIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default Footer;