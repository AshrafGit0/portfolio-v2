import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "UI Full stack with React",
      issuer: "Naresh i technologies",
      date: "2024",
      description:
        "Certified in building responsive, full-stack applications with React. Gained expertise in designing scalable and secure web solutions.",
      skills: [
        "HTML5",
        "CSS3/SASS",
        "JavaScript/Typescript",
        "jQuery",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Design Patterns",
      ],
      verified: true,
      url: "#",
    },
    {
      id: 2,
      title: "S.O.L.I.D Principles",
      issuer: "SCALER",
      date: "2025",
      description:
        "Demonstrated understanding and practical application of SOLID principles to write maintainable, scalable, and clean code.",
      skills: [
        "SOLID Principles",
        "Clean Code",
        "Software Architecture",
        "Scalable & Maintainable Design",
        "Dependency Injection (DIP implementation)",
      ],
      verified: true,
      url: "#",
    },
    {
      id: 3,
      title: "Fundamentals of Full stack Development",
      issuer: "EXCELR",
      date: "2022",
      description:
        "Learning the core concepts of web development, including building responsive and interactive web applications using HTML, CSS, and JavaScript.",
      skills: ["HTML", "CSS", "Javascript"],
      verified: true,
      url: "#",
    },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my
            expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <Card
              key={certificate.id}
              className="glass-card border-0 group hover:scale-105 transition-smooth"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center glow-effect">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    {certificate.verified && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-green-500/20 text-green-400 border-green-500/30"
                      >
                        Verified
                      </Badge>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                {/* Certificate Info */}
                <h3 className="font-semibold mb-2 text-gradient">
                  {certificate.title}
                </h3>

                <div className="space-y-2 min-h-14 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>{certificate.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{certificate.date}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-sm">
                    Skills Validated:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl mx-auto">
          <Card className="glass-card border-0 text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gradient mb-2">
                {certificates.length}
              </div>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-0 text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gradient mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Verified</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-0 text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gradient mb-2">20+</div>
              <p className="text-sm text-muted-foreground">Skills Validated</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
