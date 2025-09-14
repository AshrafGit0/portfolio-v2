import portfolioBanner from "@/assets/portfolio-banner.png";
import iceCreamShopBanner from "@/assets/ice-cream-shop-banner.png";

// Projects Config
export const projects = [
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
];
