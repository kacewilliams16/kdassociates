import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy text-gold-light/80">
    <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-md bg-gold/20 border border-gold/30 flex items-center justify-center">
              <span className="font-display font-bold text-gold text-lg">KD</span>
            </div>
            <span className="font-display font-bold text-gold-light text-lg">KD Williams & Associates</span>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            Professional unclaimed funds recovery. We audit public records and government databases to recover what's rightfully yours.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-gold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/how-it-works", label: "How It Works" },
              { to: "/pricing", label: "Pricing" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-gold mb-4 text-sm uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" />
              <a href="tel:4693331145" className="hover:text-gold transition-colors">(469) 333-1145</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" />
              <a href="mailto:kdwilliams.associates@gmail.com" className="hover:text-gold transition-colors">kdwilliams.associates@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-gold mt-0.5" />
              <div>
                <p>Mon–Sat: 10am – 8pm</p>
                <p>Sun: Closed</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60">
        <p>© {new Date().getFullYear()} KD & Associates. All rights reserved.</p>
        <p>Professional Unclaimed Funds Recovery Services</p>
      </div>
    </div>
  </footer>
);

export default Footer;
