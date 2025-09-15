import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ArrowLeft } from "lucide-react"; // NOSONAR
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Portfolio/Navigation";
import Footer from "./Footer";
import { projects } from "@/config/projects.config";
import ProjectCard from "../common/ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AllProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length));
  };

  useEffect(() => {
    if (projects.length < visibleProjects) {
      setVisibleProjects(projects.length);
    }
  }, []);

  const hasMoreProjects = visibleProjects < projects.length;

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <Link to="/">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Back to Home
                    </Button>
                  </motion.div>
                </Link>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                All Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore my complete portfolio of projects spanning various
                technologies and industries. Each project showcases different
                skills and innovative solutions.
              </p>
              <div className="mt-6 text-sm text-muted-foreground">
                Showing {visibleProjects} of {projects.length} projects
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projects.slice(0, visibleProjects).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  projectDetails={project}
                  index={index}
                />
              ))}
            </motion.div>

            {/* View More / Completion Message */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {hasMoreProjects ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={showMoreProjects}
                    className="hover:scale-105 transition-smooth"
                  >
                    View More Projects ({projects.length - visibleProjects}{" "}
                    remaining)
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  className="text-center p-8 glass-card rounded-lg max-w-md mx-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gradient">
                    You've seen it all! 🎉
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    That's all {projects.length} projects in my portfolio. Stay
                    tuned for more exciting work coming soon!
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;
