/**
 * This file contains all configuration data for the portfolio.
 *
 * For small projects, keeping all config (navItems, projects, work, skills)
 * in a single file is simpler and easier to manage.
 *
 * If the project grows bigger, consider splitting configs into separate files
 * like nav.ts, projects.ts, skills.ts, etc., for better organization.
 */

import { EMAIL, GITHUB, LINKEDIN, LOCATION, PHONE } from "@/constants";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"; // NOSONAR

// Navigation config
export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  { icon: Github, href: GITHUB, label: "GitHub" }, // NOSONAR
  { icon: Linkedin, href: LINKEDIN, label: "LinkedIn" }, // NOSONAR
  { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: PHONE,
    href: `tel:${PHONE}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: LOCATION,
    href: "https://maps.app.goo.gl/9zmVayxK91rSNG5V6",
  },
];
