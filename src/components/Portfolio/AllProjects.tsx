import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Code, ArrowLeft } from "lucide-react"; // NOSONAR
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Portfolio/Navigation";
import Footer from "./Footer";
import { projects } from "@/config/projects.config";
import getStatusColor from "@/utils/get-status-colour";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
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
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass-card border-0 group overflow-hidden h-full">
                    <div className="relative">
                      {/* Project Image */}
                      <motion.div
                        className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Eye className="w-16 h-16 text-muted-foreground/50" />
                      </motion.div>

                      {/* Status Badge */}
                      <motion.div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full ${getStatusColor(
                          project.status
                        )} text-white text-xs font-medium`}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.2 + index * 0.05,
                          type: "spring",
                        }}
                      >
                        {project.status}
                      </motion.div>

                      {/* Overlay on Hover - Desktop */}
                      <motion.div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-4"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                      </motion.div>

                      {/* Mobile Buttons */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 md:hidden">
                        <motion.div
                          className="flex-1"
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Live
                          </Button>
                        </motion.div>
                        <motion.div
                          className="flex-1"
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full"
                          >
                            <Code className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <motion.h3
                        className="text-xl font-semibold mb-2 text-gradient"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        {project.title}
                      </motion.h3>

                      <motion.p
                        className="text-muted-foreground text-sm mb-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        {project.description}
                      </motion.p>

                      <motion.div
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        <h4 className="font-medium mb-2 text-sm">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <motion.li
                              key={idx}
                              className="text-xs text-muted-foreground flex items-start"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{
                                delay: 0.4 + index * 0.05 + idx * 0.02,
                              }}
                            >
                              <span className="text-primary mr-2">•</span>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                      >
                        <h4 className="font-medium mb-2 text-sm">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                delay: 0.6 + index * 0.05 + techIndex * 0.02,
                                type: "spring",
                                stiffness: 200,
                              }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
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
