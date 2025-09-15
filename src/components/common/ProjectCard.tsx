import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Code, ExternalLink, Eye, Github } from "lucide-react"; // NOSONAR
import getStatusColor from "@/utils/get-status-colour";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

type Project = {
  id: number;
  image: string | null;
  title: string;
  description: string;
  status: string;
  liveUrl: string | null;
  githubUrl: string;
  features: string[];
  technologies: string[];
};

interface IProjectProps {
  projectDetails: Project;
  index: number;
}

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

const ProjectCard = ({ projectDetails, index }: IProjectProps) => {
  return (
    <motion.div
      key={projectDetails.id}
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        key={projectDetails.id}
        className="glass-card border-0 group h-full overflow-hidden"
      >
        <div className="relative">
          {/* Project Image */}
          <motion.div
            className="h-[210px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center overflow-hidden justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {projectDetails.image ? (
              <img
                src={projectDetails.image}
                alt={projectDetails.title}
                className="object-cover"
              />
            ) : (
              <Eye className="w-16 h-16 text-muted-foreground/50" />
            )}
          </motion.div>

          {/* Status Badge */}
          <motion.div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full ${getStatusColor(
              projectDetails.status
            )} text-white text-xs font-medium`}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.2 + index * 0.1,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            {projectDetails.status}
          </motion.div>

          {/* Overlay on Hover - Desktop */}
          <motion.div
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {projectDetails.liveUrl && (
              <motion.a
                href={projectDetails.liveUrl}
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
              href={projectDetails.githubUrl}
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
            {projectDetails.liveUrl && (
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
            {projectDetails.title}
          </motion.h3>
          <motion.p
            className="text-muted-foreground text-sm mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
          >
            {projectDetails.description}
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
              {projectDetails.features.map((feature, idx) => (
                <motion.li
                  key={feature}
                  className="text-xs text-muted-foreground flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4 + index * 0.1 + idx * 0.05,
                  }}
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
              {projectDetails.technologies.map((tech, techIndex) => (
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
  );
};

export default ProjectCard;
