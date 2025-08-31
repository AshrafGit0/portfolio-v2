import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";
import { LOCATION } from "@/constants";

const WorkSection = () => {
  const workExperience = [
    {
      title: "React Developer",
      company: "OSV Solutions Pvt Ltd",
      period: "Apr 2025 - Present",
      location: LOCATION,
      description:
        "Started as an intern focusing on data visualization (D3.js), virtualized lists, infinite scrolling, and built advanced, dynamic forms with Formik and Yup including validation and conditional fields. Later transitioned to a full-time role contributing to multiple projects with performance optimization and scalable React patterns.",

      achievements: [
        "Contributed to 3+ production projects",
        "Reduced application bundle size by 40% and improved rendering performance",
        "Implemented virtualized lists in production applications",
        "Applied principles like Separation of Concerns (SoC) and Single Responsibility Principle (SRP)",
        "Applied React design patterns such as Custom Hooks and Compound Components",
      ],
      technologies: [
        "HTML",
        "CSS/SASS",
        "JavaScript/TypeScript",
        "React",
        "Redux",
        "D3.js",
      ],
    },
  ];

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the amazing teams I've had the privilege
            to work with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              <div className="absolute -left-2 md:left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-transparent opacity-30"></div>

              <Card className="glass-card border-0 ml-8 md:ml-16 hover:scale-[1.02] transition-smooth">
                <CardContent className="p-6">
                  {/* Timeline Dot */}
                  <div className="absolute -left-10 top-6 w-4 h-4 rounded-full gradient-primary glow-effect"></div>

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gradient">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-semibold"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
