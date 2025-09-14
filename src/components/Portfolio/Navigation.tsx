import { cn } from "@/lib/utils";
import HeaderLogo from "../common/HeaderLogo";
import useNavigationLogic from "@/hooks/useNavigationLogic";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import NavItems from "../common/NavItems";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const { isScrolled } = useNavigationLogic();

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        isScrolled ? "glass-card backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <HeaderLogo />
          <div className="flex gap-3 md:gap-5">
            <NavItems />
            <ThemeToggle />

            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <MenuIcon className="cursor-pointer md:hidden mt-1" />
              </SheetTrigger>
              <SheetContent className="w-full">
                <SheetHeader>
                  <SheetTitle>
                    <HeaderLogo />
                  </SheetTitle>
                </SheetHeader>
                <NavItems
                  className="md:hidden mt-5 flex flex-col items-start gap-5"
                  isMobile
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
