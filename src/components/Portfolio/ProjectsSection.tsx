import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import portfolioBanner from "@/assets/portfolio-banner.png";
import iceCreamShopBanner from "@/assets/ice-cream-shop-banner.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with admin dashboard and real-time product management.",
      image: null,
      technologies: [
        "HTML",
        "CSS",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      features: [
        "JWT Authentication & Authorization",
        "OTP-based Password Reset (Nodemailer)",
        "Real-time Inventory Updates",
        "Secure Payment Processing",
        "Admin Dashboard & Order Management",
        "React Design Patterns",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/AshrafGit0/portfolio-v2",
      status: "Featured | Under Development",
    },
    {
      id: 2,
      title: "Ice Cream Shop UI",
      description:
        "Developed an interactive ice cream shop website featuring menu highlights, special offers, and key shop information.",
      image: iceCreamShopBanner,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Bootstrap",
        "Bootstrap",
      ],
      features: [
        "Responsive layout",
        "Reusable React components",
        "Interactive UI elements and animations",
      ],
      liveUrl: "https://ice-cream-website-react.netlify.app/",
      githubUrl: "https://github.com/AshrafGit0/IceCream-Website",
      status: "Popular",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with the latest web technologies and design trends.",
      image: portfolioBanner,
      technologies: [
        "HTML",
        "CSS",
        "React",
        "TypeScript",
        "Tailwind Css",
        "Shadcn/ui",
      ],
      features: [
        "Responsive design",
        "Reusable React components",
        "Dark mode",
        "Smooth Animations",
        "SEO optimized",
        "Modern UI components using shadcn/ui",
      ],
      liveUrl: null,
      githubUrl: "#",
      status: "Recent",
    },
    // {
    //   title: "Task Management App",
    //   description:
    //     "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
    //   image: "/placeholder.svg",
    //   technologies: [
    //     "Next.js",
    //     "TypeScript",
    //     "Prisma",
    //     "Socket.io",
    //     "Tailwind",
    //   ],
    //   features: [
    //     "Real-time collaboration",
    //     "Task analytics",
    //     "Team management",
    //     "File sharing",
    //   ],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   status: "Popular",
    // },
    // {
    //   title: "Weather Dashboard",
    //   description:
    //     "A beautiful weather application with detailed forecasts, interactive maps, and location-based recommendations.",
    //   image: "/placeholder.svg",
    //   technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    //   features: [
    //     "7-day forecast",
    //     "Interactive maps",
    //     "Weather alerts",
    //     "Location search",
    //   ],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   status: "Recent",
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description:
    //     "Analytics dashboard for social media management with data visualization and automated reporting features.",
    //   image: "/placeholder.svg",
    //   technologies: ["Vue.js", "D3.js", "Express", "MongoDB", "Redis"],
    //   features: [
    //     "Analytics visualization",
    //     "Automated reports",
    //     "Multi-platform support",
    //     "Real-time metrics",
    //   ],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   status: "Open Source",
    // },
    // {
    //   title: "Learning Management System",
    //   description:
    //     "Educational platform with course creation, student progress tracking, and interactive learning modules.",
    //   image: "/placeholder.svg",
    //   technologies: ["React", "Firebase", "Stripe", "Video.js", "PWA"],
    //   features: [
    //     "Course creation",
    //     "Progress tracking",
    //     "Video streaming",
    //     "Offline support",
    //   ],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   status: "Enterprise",
    // },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured":
      case "Featured | Under Development":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "Popular":
        return "bg-gradient-to-r from-green-500 to-blue-500";
      case "Recent":
        return "bg-gradient-to-r from-blue-500 to-purple-500";
      case "Open Source":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Enterprise":
        return "bg-gradient-to-r from-red-500 to-pink-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, featuring diverse projects that
            demonstrate my skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="glass-card border-0 group hover:scale-105 transition-smooth overflow-hidden"
            >
              <div className="relative">
                {/* Project Image */}
                <div className="h-[210px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center overflow-hidden justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover"
                    />
                  ) : (
                    <Eye className="w-16 h-16 text-muted-foreground/50" />
                  )}
                </div>

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full ${getStatusColor(
                    project.status
                  )} text-white text-xs font-medium`}
                >
                  {project.status}
                </div>

                {/* Overlay on Hover - Desktop */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>

                {/* Mobile Buttons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 md:hidden">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gradient">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm  mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1 md:min-h-[110px]">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-xs text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover:scale-105 transition-smooth"
          >
            View more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
