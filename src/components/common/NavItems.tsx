import { navItems } from "@/config";
import useNavigationLogic from "@/hooks/useNavigationLogic";
import { cn } from "@/lib/utils";

type Item = {
  item: { id: string; label: string };
  onClick?: () => void;
};

const NavLinkButton = ({ item, onClick }: Item) => {
  const { activeSection, scrollToSection } = useNavigationLogic();
  return (
    <button
      onClick={() => {
        scrollToSection(item.id);
        if (onClick) {
          onClick();
        }
      }}
      className={cn(
        "text-md md:text-sm font-medium transition-smooth hover:text-primary",
        activeSection === item.id ? "text-primary" : "text-muted-foreground"
      )}
    >
      {item.label}
    </button>
  );
};

const NavItems = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div className={cn("hidden md:flex items-center md:space-x-8", className)}>
      {navItems.map((item) => (
        <NavLinkButton key={item.id} item={item} onClick={onClick} />
      ))}
    </div>
  );
};

export default NavItems;
