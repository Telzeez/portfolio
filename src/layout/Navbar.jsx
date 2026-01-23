import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Mail, Code, ChevronRight } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";
import new_logo from "@/assets/images/new_logo.png";

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
        <div className="mx-auto px-6 max-w-7xl w-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group"
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
            <div className="hidden md:flex flex-col items-start group">
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Telz<span className="text-primary">ee</span>z
                <span className="text-primary">.</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4">
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

        {/* Mobile Navigation Menu */}
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

                <button
                  onClick={() => {
                    toggleTheme();
                    closeMobileMenu();
                  }}
                  className="flex items-center justify-center w-full p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 border border-border/30"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-5 w-5 text-primary mr-3" />
                      <span className="text-muted-foreground font-medium">
                        Light Mode
                      </span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 text-muted-foreground mr-3" />
                      <span className="text-muted-foreground font-medium">
                        Dark Mode
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
