import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { EMAIL, GITHUB, LINKEDIN, NAME } from "@/constants";

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-primary opacity-20" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">{NAME}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack MERN Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I build full-stack web applications with React, Node.js, and
            MongoDB. Turning ideas into scalable digital solutions.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="gradient-primary glow-effect hover:scale-105 transition-smooth"
              onClick={() =>
                document
                  .getElementById("projects")!
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-smooth"
            >
              <a href="/MohammedAshrafAliResume.pdf" download>
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href={GITHUB}
              target="_blank"
              className="p-3 glass-card hover:scale-110 transition-smooth group"
            >
              <Github className="w-6 h-6 group-hover:text-primary transition-smooth" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              className="p-3 glass-card hover:scale-110 transition-smooth group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary transition-smooth" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="p-3 glass-card hover:scale-110 transition-smooth group"
            >
              <Mail className="w-6 h-6 group-hover:text-primary transition-smooth" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-smooth" />
      </button>
    </section>
  );
};

export default HeroSection;
