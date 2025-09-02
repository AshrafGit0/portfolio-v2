import { socialLinks } from "@/config";
import { cn } from "@/lib/utils";

const SocialLinks = ({
  anchorClasses,
  iconClasses,
}: {
  anchorClasses?: string;
  iconClasses?: string;
}) => {
  return (
    <>
      {socialLinks.map((socialLink) => (
        <a
          key={socialLink.label}
          href={socialLink.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialLink.label}
          className={cn(
            "p-3 glass-card hover:scale-110 transition-smooth group",
            anchorClasses
          )}
        >
          <socialLink.icon
            className={cn(
              "w-6 h-6 group-hover:text-primary transition-smooth",
              iconClasses
            )}
          />
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
