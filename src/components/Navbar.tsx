import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-narrow mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md bg-navy flex items-center justify-center">
            <span className="font-display font-bold text-gold text-lg">KD</span>
          </div>
          <span className="font-display font-bold text-foreground text-lg hidden sm:inline">
            KD & Associates
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-gold-dark ${
                pathname === l.to ? "text-gold-dark" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:4693331145" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            (469) 333-1145
          </a>
          <Button variant="gold" size="sm" asChild>
            <Link to="/contact">Start Your Claim</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4 space-y-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors ${
                pathname === l.to ? "text-gold-dark" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button variant="gold" size="sm" className="w-full mt-2" asChild>
            <Link to="/contact" onClick={() => setOpen(false)}>Start Your Claim</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
