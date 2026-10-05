import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "KIOFM",
    href: "#kiofm",
    dropdown: [{ label: "Online Giving", href: "#giving" }],
  },
  { label: "MOYGA", href: "#moyga" },
  {
    label: "Media",
    href: "#media",
    dropdown: [
      { label: "Videos", href: "#media" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      setActiveDropdown(null);
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 300);
    } else {
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-xl border-b border-gold/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-4 group" onClick={(e) => handleLinkClick(e, "#home")}>
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-md group-hover:bg-gold/30 transition-all" />
            <img
              src="/Kenos-Logo.png"
              alt="Kenos Tabernacle Logo"
              className="h-11 w-11 object-contain relative z-10"
            />
          </div>
          <div>
            <h1 className="text-white font-heading font-bold text-base tracking-[0.2em] uppercase">
              Kenos Tabernacle
            </h1>
            <p className="text-gold/80 text-[10px] tracking-[0.3em] uppercase font-light">
              Est. 2004 - CapeTown - SA
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 text-white/70 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase flex items-center gap-1.5"
              >
                {link.label}
                {link.dropdown && <FaChevronDown className="text-[8px] opacity-50" />}
              </a>
              {/* Active indicator */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-6 h-[2px] bg-gold transition-all duration-300" />

              {link.dropdown && activeDropdown === link.label && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 pt-2 min-w-[200px]"
                >
                  <div className="glass rounded-xl overflow-hidden shadow-2xl">
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          onClick={(e) => !item.external && handleLinkClick(e, item.href)}
                          className="block px-5 py-3.5 text-white/70 hover:text-gold hover:bg-white/5 transition-all text-sm tracking-wide"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </div>
                </motion.ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gold text-xl p-2 border border-gold/30 rounded-lg hover:bg-gold/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass overflow-hidden border-t border-gold/10"
          >
            <ul className="px-6 py-8 space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block py-3 text-white/80 hover:text-gold transition-colors font-medium text-lg tracking-wide border-b border-white/5"
                  >
                    {link.label}
                  </a>
                  {link.dropdown && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            onClick={(e) => !item.external && handleLinkClick(e, item.href)}
                            className="block py-2 text-white/50 hover:text-gold text-sm"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
