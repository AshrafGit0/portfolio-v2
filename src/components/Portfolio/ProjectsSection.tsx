import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Code } from "lucide-react"; // NOSONAR
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "@/config/projects.config";
import getStatusColor from "@/utils/get-status-colour";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, featuring diverse projects that
            demonstrate my skills and creativity.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                key={project.id}
                className="glass-card border-0 group h-full overflow-hidden"
              >
                <div className="relative">
                  {/* Project Image */}
                  <motion.div
                    className="h-[210px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center overflow-hidden justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover"
                      />
                    ) : (
                      <Eye className="w-16 h-16 text-muted-foreground/50" />
                    )}
                  </motion.div>

                  {/* Status Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full ${getStatusColor(
                      project.status
                    )} text-white text-xs font-medium`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {project.status}
                  </motion.div>

                  {/* Overlay on Hover - Desktop */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
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
                      </motion.a>
                    )}

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <Github className="w-4 h-4 mr-2" /> {/* NOSONAR */}
                        Code
                      </Button>
                    </motion.a>
                  </motion.div>

                  {/* Mobile Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 md:hidden">
                    {project.liveUrl && (
                      <motion.div className="flex-1" whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      </motion.div>
                    )}
                    <motion.div className="flex-1" whileTap={{ scale: 0.95 }}>
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
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground text-sm mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1 md:min-h-[110px]">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          className="text-xs text-muted-foreground flex items-start"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 + idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-medium mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            delay: 0.6 + index * 0.1 + techIndex * 0.05,
                            type: "spring",
                            stiffness: 200,
                          }}
                          viewport={{ once: true }}
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

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/projects">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-smooth"
              >
                View more
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
