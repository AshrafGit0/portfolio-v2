import { navItems } from "@/config";
import { useEffect, useState } from "react";

/**
 * Custom hook to manage navigation logic:
 * - Tracks the currently active section based on scroll position
 * - Tracks whether the page is scrolled past a threshold
 * - Provides a function to smoothly scroll to a section
 */
const useNavigationLogic = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      // Update active section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { scrollToSection, activeSection, isScrolled };
};

export default useNavigationLogic;
