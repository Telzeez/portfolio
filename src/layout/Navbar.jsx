import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Mail, ChevronRight } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";
import new_logo from "@/assets/images/new_logo.svg";

const navItems = [
  { navName: "Home", href: "#home" },
  { navName: "About", href: "#about" },
  { navName: "Projects", href: "#projects" },
  { navName: "Certifications", href: "#certifications" },
  { navName: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobileMenu();
  };

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="mx-auto px-6 max-w-7xl w-full h-16"></div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-background/95 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-white/5 border-b border-border/30"
            : "py-4 bg-background/90 backdrop-blur-xl border-b border-border/20"
        }`}
      >
        {/* added 'relative' here so the absolute mobile name centers perfectly inside this container */}
        <div className="mx-auto px-6 max-w-7xl w-full flex items-center justify-between relative">
          
          {/* Logo & Desktop Name Container */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group z-10"
            aria-label="Go to top"
          >
            <div className="relative">
              <img
                src={new_logo}
                alt="Developer Logo"
                className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  scrolled
                    ? "border-primary/30 group-hover:border-primary/60"
                    : "border-primary/20 group-hover:border-primary/50"
                }`}
              />
              <div className="absolute -inset-1 rounded-full bg-primary/5 blur-md group-hover:bg-primary/10 transition-all duration-300"></div>
            </div>
            {/* Desktop Only Name */}
            <div className="hidden lg:flex flex-col items-start">
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Telz<span className="text-primary">ee</span>z
                <span className="text-primary">.</span>
              </span>
            </div>
          </button>

          {/* NEW: Centered Mobile Name (visible on mobile/tablet, hidden on desktop layout) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none lg:hidden flex items-center">
            <span className="text-2xl font-bold text-foreground">
              Telz<span className="text-primary">ee</span>z
              <span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="flex items-center gap-4 z-10">
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.navName}
                  href={item.href}
                  className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 px-3 py-2 rounded-lg hover:bg-secondary/30 group"
                  onClick={closeMobileMenu}
                >
                  {item.navName}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300"></span>
                  <span className="absolute -inset-1 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3 ml-4">
              <button
                onClick={handleContactClick}
                className="btn-primary flex items-center gap-2 group"
              >
                <Mail className="h-4 w-4" />
                Contact Me
                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={toggleTheme}
                className="relative p-2 rounded-xl hover:bg-secondary/50 transition-all duration-300 group"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-300"></div>
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-primary" />
                ) : (
                  <Moon className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </div>

            {/* Light/Dark mode toggle button for Mobile (Added so mobile users can switch themes too!) */}
            <button
              onClick={toggleTheme}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary/50 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary/50 transition-all duration-300"
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

        {/* Mobile Navigation Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/30 animate-fade-down">
            <div className="px-6 py-8">
              <nav className="mb-8">
                <div className="grid grid-cols-2 gap-3">
                  {navItems.map((item) => (
                    <a
                      key={item.navName}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-center p-4 text-center rounded-xl text-muted-foreground hover:text-primary hover:bg-secondary/30 transition-all duration-300 border border-border/30 hover:border-primary/30 group"
                    >
                      <span className="text-sm font-medium">
                        {item.navName}
                      </span>
                      <ChevronRight className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </nav>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleContactClick}
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
