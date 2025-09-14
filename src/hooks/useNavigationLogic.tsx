import { navItems } from "@/config";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Custom hook to manage navigation logic:
 * - Tracks the currently active section based on scroll position
 * - Tracks whether the page is scrolled past a threshold
 * - Provides a function to smoothly scroll to a section
 */
const useNavigationLogic = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only update active section if we're on the home page
      if (location.pathname === "/") {
        const sections = navItems.map((item) =>
          document.getElementById(item.id)
        );
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      } else {
        // Clear active section when not on home page
        setActiveSection("");
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      // Use a small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return { scrollToSection, activeSection, isScrolled };
};

export default useNavigationLogic;
