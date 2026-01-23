import React, { useState } from "react";
import {
  Mail,
  Download,
  ChevronRight,
  Sparkles,
  Code,
  Terminal,
} from "lucide-react";
import { Layers, Database } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const [imageError, setImageError] = useState(false);
  const profileImage = "/Heroimage.png";

  // Scroll animations for sections
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.3 });
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.3 });

  const techStack = ["React", "TypeScript", "Tailwind", "Node.js", "Python"];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Abdlazeez_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className={`min-h-screen flex items-center pt-16 pb-20 px-4 md:px-8 transition-all duration-1000 ${
        heroVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with staggered animations */}
          <div ref={contentRef} className="space-y-8">
            <div
              className={`scroll-animate ${contentVisible ? "scroll-animate-visible stagger-1" : ""}`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Code size={24} />
                <Database size={24} />
                <Layers />
                <span className="text-sm font-medium">Fullstack Developer</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight scroll-animate ${
                  contentVisible ? "scroll-animate-visible stagger-2" : ""
                }`}
              >
                Hi, I'm{" "}
                <span className="text-primary relative">
                  Abdlazeez
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full animate-shimmer"></span>
                </span>
              </h1>

              <div
                className={`scroll-animate ${contentVisible ? "scroll-animate-visible stagger-3" : ""}`}
              >
                <h2 className="text-3xl md:text-4xl text-muted-foreground font-semibold">
                  Crafting{" "}
                  <span className="text-primary">Digital Experiences</span>
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    That users love
                  </span>
                </div>
              </div>
            </div>

            <p
              className={`text-lg text-muted-foreground leading-relaxed max-w-2xl scroll-animate ${
                contentVisible ? "scroll-animate-visible stagger-4" : ""
              }`}
            >
              I'm a passionate Full stack developer specializing in React,
              Next.js, and modern web technologies. I create beautiful,
              responsive, and accessible web applications with exceptional user
              experiences.
            </p>

            <div
              className={`grid grid-cols-3 gap-4 scroll-animate ${
                contentVisible ? "scroll-animate-visible stagger-5" : ""
              }`}
            >
              <div className="text-center p-4 rounded-xl glass-panel hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl glass-panel hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center p-4 rounded-xl glass-panel hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>

            <div
              className={`flex flex-wrap gap-4 scroll-animate ${
                contentVisible ? "scroll-animate-visible stagger-6" : ""
              }`}
            >
              <button
                onClick={handleContactClick}
                className="btn-primary flex items-center gap-2 group hover:scale-105 transition-transform duration-300"
              >
                <Mail className="h-4 w-4" />
                Contact Me
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="btn-secondary flex items-center gap-2 group hover:scale-105 transition-transform duration-300"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>

            <div
              className={`scroll-animate ${contentVisible ? "scroll-animate-visible stagger-7" : ""}`}
            >
              <p className="text-sm text-muted-foreground mb-3">
                Tech I work with:
              </p>

              <div className="relative overflow-hidden">
                <div className="flex mb-3 animate-scroll-left">
                  <div className="flex gap-2">
                    {techStack.map((tech, index) => (
                      <span
                        key={`first-${tech}-${index}`}
                        className="px-3 py-1.5 text-sm rounded-full border border-border bg-background/50 whitespace-nowrap hover:scale-110 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {techStack.map((tech, index) => (
                      <span
                        key={`first-duplicate-${tech}-${index}`}
                        className="px-3 py-1.5 text-sm rounded-full border border-border bg-background/50 whitespace-nowrap hover:scale-110 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Profile Image with animations */}
          <div ref={imageRef} className="relative">
            <div
              className={`absolute -top-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow scroll-animate ${
                imageVisible ? "scroll-animate-visible" : ""
              }`}
            ></div>
            <div
              className={`absolute -bottom-6 -left-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow delay-500 scroll-animate ${
                imageVisible ? "scroll-animate-visible stagger-2" : ""
              }`}
            ></div>

            <div
              className={`relative animate-float scroll-animate ${
                imageVisible ? "scroll-animate-visible stagger-3" : ""
              }`}
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                {imageError ? (
                  <div className="w-full h-full rounded-3xl border-4 border-background shadow-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4 animate-bounce-in">👨‍💻</div>
                      <div className="text-primary font-bold">Abdlazeez</div>
                      <div className="text-muted-foreground text-sm mt-2">
                        {profileImage} not found
                      </div>
                      <button
                        onClick={() => setImageError(false)}
                        className="mt-4 text-sm text-primary hover:underline"
                      >
                        Try again
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full rounded-3xl border-4 border-background shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-700">
                    <img
                      src={profileImage}
                      alt="Abdlazeez"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      onError={() => setImageError(true)}
                    />
                  </div>
                )}

                <div
                  className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float delay-300 scroll-animate ${
                    imageVisible ? "scroll-animate-visible stagger-4" : ""
                  }`}
                >
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div
                  className={`absolute -bottom-4 -left-4 backdrop-blur-sm border border-primary/20 flex items-center justify-center animate-float delay-700 glass-container px-4 py-2 rounded-full scroll-animate ${
                    imageVisible ? "scroll-animate-visible stagger-5" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="text-sm font-bold text-foreground whitespace-nowrap">
                      Available for hire
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`absolute bottom-8 right-0 scroll-animate ${
                imageVisible ? "scroll-animate-visible stagger-6" : ""
              }`}
            >
              <div className="glass-container px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    1+ Years
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
