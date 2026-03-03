import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Access Control", href: "/access-control" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact", href: "/#contact" },
];

const NavItem = ({ link, className, onClick }: { link: typeof navLinks[0]; className?: string; onClick?: () => void }) => {
  const isRoute = !link.href.includes("#");
  if (isRoute) {
    return (
      <Link to={link.href} className={className} onClick={onClick}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} className={className} onClick={onClick}>
      {link.label}
    </a>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Digital Support Systems
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            />
          ))}
          <a
            href="/#contact"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <NavItem
                  key={link.label}
                  link={link}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                />
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground text-center"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
