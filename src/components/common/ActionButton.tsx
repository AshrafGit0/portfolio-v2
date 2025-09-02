import type { ReactNode } from "react";
import { Button, type ButtonProps } from "../ui/button";

type ActionButtonProps = Readonly<
  {
    children: ReactNode;
    href?: string;
    download?: boolean;
  } & ButtonProps
>;

export function ActionButton({
  children,
  href,
  download,
  className,
  ...props
}: ActionButtonProps) {
  const baseClasses = "hover:scale-105 transition-smooth";
  const variantClasses =
    props.variant === "outline" ? "" : "gradient-primary glow-effect";

  if (href) {
    return (
      <Button
        asChild
        {...props}
        size={props.size ?? "lg"}
        className={`${baseClasses} ${variantClasses} ${className ?? ""}`}
      >
        <a
          href={href}
          download={download}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button
      {...props}
      size={props.size ?? "lg"}
      className={`${baseClasses} ${variantClasses} ${className ?? ""}`}
    >
      {children}
    </Button>
  );
}
