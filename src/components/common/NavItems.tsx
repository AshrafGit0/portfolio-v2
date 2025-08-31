import { navItems } from "@/config";
import useNavigationLogic from "@/hooks/useNavigationLogic";
import { cn } from "@/lib/utils";
import { SheetClose } from "../ui/sheet";

type Item = {
  item: { id: string; label: string };
};

const NavLinkButton = ({ item }: Item) => {
  const { activeSection, scrollToSection } = useNavigationLogic();
  return (
    <button
      onClick={() => {
        scrollToSection(item.id);
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
  isMobile = false,
}: {
  className?: string;
  isMobile?: boolean;
}) => {
  return (
    <div className={cn("hidden md:flex items-center md:space-x-8", className)}>
      {navItems.map((item) =>
        isMobile ? (
          <SheetClose key={item.id} asChild>
            <NavLinkButton item={item} />
          </SheetClose>
        ) : (
          <NavLinkButton key={item.id} item={item} />
        )
      )}
    </div>
  );
};

export default NavItems;
