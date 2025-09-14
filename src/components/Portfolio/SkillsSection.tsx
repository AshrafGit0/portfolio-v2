import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Monitor, Server } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Redux",
        "D3.js",
        "jQuery",
        "Sass",
        "Tailwind CSS",
        "Bootstrap",
        "Material-UI",
        "Shadcn/ui",
      ],
      color: "from-blue-500 to-purple-500",
      icon: Monitor,
    },
    {
      title: "Backend  Development",
      skills: ["Node.js", "Express", "MongoDB"],
      color: "from-green-500 to-blue-500",
      icon: Server,
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "Github", "VS Code", "Webpack", "Vite", "Postman"],
      color: "from-purple-500 to-pink-500",
      icon: GitBranch,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full glass-card border-0 group hover:scale-105 transition-smooth">
                <CardContent className="p-6">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-gradient">
                    {category.title}
                  </h3>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          delay: 0.3 + index * 0.1 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs hover:scale-105 transition-smooth cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Progress Efficiency */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-gradient">
            Proficiency Levels
          </h3>
          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "HTML/CSS", level: "Strong" },
              { name: "JavaScript/TypeScript", level: "Strong" },
              { name: "React", level: "Strong" },
              { name: "Node.js/Express", level: "Intermediate" },
              { name: "MongoDB", level: "Intermediate" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center justify-between p-4 glass-card rounded-lg border-0"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-medium text-foreground">
                  {skill.name}
                </span>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <Badge
                    variant={
                      skill.level === "Strong"
                        ? "default"
                        : skill.level === "Intermediate"
                        ? "secondary"
                        : "outline"
                    }
                    className={`
                    ${
                      skill.level === "Strong"
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0"
                        : ""
                    }
                    ${
                      skill.level === "Intermediate"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
                        : ""
                    }
                    ${
                      skill.level === "Learning"
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-0"
                        : ""
                    }
                    font-medium px-3 py-1
                  `}
                  >
                    {skill.level}
                  </Badge>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
