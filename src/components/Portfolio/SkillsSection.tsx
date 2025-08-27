import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Server, Settings } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
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
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB"],
      color: "from-green-500 to-blue-500",
      icon: Server,
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Github", "Webpack", "Postman"],
      color: "from-purple-500 to-pink-500",
      icon: Settings,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="glass-card border-0 group hover:scale-105 transition-smooth"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs hover:scale-105 transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Efficiency */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gradient">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "HTML/CSS", level: "Strong" },
              { name: "JavaScript/TypeScript", level: "Strong" },
              { name: "React", level: "Strong" },
              { name: "Node.js/Express", level: "Intermediate" },
              { name: "MongoDB", level: "Intermediate" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between p-4 glass-card rounded-lg border-0"
              >
                <span className="font-medium text-foreground">
                  {skill.name}
                </span>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
