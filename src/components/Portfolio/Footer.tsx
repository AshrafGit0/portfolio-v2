import { LOCATION, NAME, PHONE } from "@/constants";
import SocialLinks from "../common/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="glass-card py-16 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">{NAME}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital
              experiences and solving complex problems through code.
            </p>
            <div className="flex gap-4">
              <SocialLinks anchorClasses="p-2" iconClasses="w-5 h-5" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 flex flex-col text-muted-foreground">
              {[NAME, PHONE, LOCATION].map((info) => (
                <span key={info}>{info}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/20 flex flex-col md:flex-row justify-start items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
