import { Card, CardContent } from "@/components/ui/card";
import { getCurrentExperience } from "@/utils/calc-experience";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const experience = getCurrentExperience();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me to
            create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 h-96 flex items-center justify-center rounded-2xl">
              <div className="w-64 h-64 rounded-full gradient-primary opacity-50 animate-float">
                <img
                  src="/emoji.png"
                  alt="temporary emoji"
                  aria-label="temporary emoji"
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">
                  My Story
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a <strong>Web Developer</strong> with{" "}
                  <strong>
                    {experience.value}
                    &nbsp;
                    {experience.unit}
                  </strong>
                  &nbsp;of hands-on experience building responsive and
                  user-friendly web applications. I specialize in{" "}
                  <strong>React</strong> for creating interactive UIs, while
                  also leveraging <strong>Node.js</strong> and{" "}
                  <strong>MongoDB</strong> for backend functionality. I enjoy
                  solving complex problems and turning ideas into practical,
                  scalable solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, I explore new tools, work on personal
                  projects, and stay updated with the latest trends in web
                  development.
                </p>
              </CardContent>
            </Card>

            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="glass-card border-0">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="text-3xl font-bold text-gradient mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      10+
                    </motion.div>
                    <p className="text-sm text-muted-foreground">
                      Projects Completed
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="glass-card border-0">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="text-3xl font-bold text-gradient mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      {experience.value}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">
                      {experience.unit} Experience
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Heart,
              title: "Passion",
              description:
                "I love what I do and put my heart into every project",
            },
            {
              icon: Target,
              title: "Focus",
              description:
                "Committed to delivering high-quality solutions on time",
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              description:
                "Always exploring new technologies and creative approaches",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="glass-card border-0 h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-12 h-12 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
