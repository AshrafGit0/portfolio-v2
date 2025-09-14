import { ArrowDown } from "lucide-react"; // NOSONAR
import heroImage from "@/assets/hero-bg.jpg";
import { EMAIL, GITHUB, LINKEDIN, NAME } from "@/constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

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
      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="text-gradient">{NAME}</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            variants={itemVariants}
          >
            Full Stack MERN Developer
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I build full-stack web applications with React, Node.js, and
            MongoDB. Turning ideas into scalable digital solutions.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
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
            </ActionButton>
            <ActionButton
              variant="outline"
              href="/MohammedAshrafAliResume.pdf"
              download
            >
              <a href="/MohammedAshrafAliResume.pdf" download>
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-16"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: GITHUB, label: "GitHub" }, // NOSONAR
              { icon: Linkedin, href: LINKEDIN, label: "LinkedIn" }, // NOSONAR
              { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 glass-card hover:scale-110 transition-smooth group"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 group-hover:text-primary transition-smooth" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

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
