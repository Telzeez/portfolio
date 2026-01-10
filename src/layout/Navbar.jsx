import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Mail } from 'lucide-react';
import useDarkMode from '@/hooks/useDarkMode';

const navItems = [
  { navName: "Home", href: "#home" },
  { navName: "About", href: "#about" },
 
  { navName: "Projects", href: "#projects" },
   { navName: "Certifications", href: "#certifications" },
  { navName: "Testimonials", href: "#testimonials" },
  { navName: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto px-4 max-w-7xl w-full h-16"></div>
      </header>
    );
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-500 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-lg shadow-lg py-4 border-b border-border' 
            : 'bg-background/80 backdrop-blur-md border-b border-border/50'
        }`}
      >
        <div className="mx-auto px-4 max-w-7xl w-full flex items-center justify-between">
          <a 
            href="#home" 
            className="flex items-center group"
            onClick={closeMobileMenu}
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground transition-all duration-300 group-hover:scale-105">
              Abdlazeez<span className="text-primary animate-pulse-slow">.</span>
            </h1>
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.navName}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-secondary/50"
                      onClick={closeMobileMenu}
                    >
                      {item.navName}
                    </a>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={handleContactClick}
                className="btn-primary flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </button>
            </nav>

            <button
              onClick={toggleTheme}
              className="hidden md:flex items-center justify-center p-2 rounded-lg hover:bg-secondary/50 transition-all duration-300 glass-panel"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground" />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-all duration-300 glass-panel"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-muted-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border mt-2 mx-4 rounded-xl overflow-hidden animate-fade-down">
            <div className="px-4 py-6">
              <nav>
                <ul className="flex flex-col space-y-3 mb-6">
                  {navItems.map((item) => (
                    <li key={item.navName}>
                      <a
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block text-muted-foreground hover:text-primary font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-secondary/50"
                      >
                        {item.navName}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={handleContactClick}
                  className="w-full btn-primary flex items-center justify-center gap-2 mb-6"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </button>
                
                <button
                  onClick={() => {
                    toggleTheme();
                    closeMobileMenu();
                  }}
                  className="flex items-center justify-center w-full p-3 rounded-lg hover:bg-secondary/50 transition-all duration-300 glass-panel"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground font-medium">Switch to Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 text-muted-foreground mr-3" />
                      <span className="text-muted-foreground font-medium">Switch to Dark Mode</span>
                    </>
                  )}
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;