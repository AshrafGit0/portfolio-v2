import { Card, CardContent } from "@/components/ui/card";
import { getCurrentExperience } from "@/utils/calc-experience";

const AboutSection = () => {
  const experience = getCurrentExperience();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me to
            create exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="glass-card p-8 h-96 flex items-center justify-center rounded-2xl">
              <div className="w-64 h-64 rounded-full gradient-primary opacity-50 animate-float">
                <img
                  src="/emoji.png"
                  alt="temporary emoji"
                  aria-label="temporary emoji"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
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

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="glass-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    10+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Projects Completed
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {experience.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {experience.unit} Experience
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
