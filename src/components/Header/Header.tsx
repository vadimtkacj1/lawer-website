"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

/**
 * A clean Chevron icon (arrowhead only) for the dropdown.
 */
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className} 
    stroke="currentColor" 
    strokeWidth="3.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const servicesLinks = [
  { href: "/services/debt-consolidation", label: "משכנתא לרכישת דירה" },
  { href: "/services/foreign-mortgages", label: "מחיר למשתכן" },
  { href: "/services/loan-consolidation", label: "מחזור ואיחוד הלוואות" },
  { href: "/services/reverse-mortgage", label: "משכנתא הפוכה" },
  { href: "/services/refused", label: "מסורבי בנקים ומורכבות" },
  { href: "/services/renovation-mortgage", label: "משכנתא לשיפוץ" },
  { href: "/services/all-purpose", label: "משכנתא לכל מטרה" },
];

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "#services", label: "שירותים", hasDropdown: true },
  { href: "#testimonials", label: "המלצות" },
  { href: "#contact", label: "צור קשר" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Manage header background on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  // Smooth scroll logic for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setIsMobileMenuOpen(false);
        setIsDesktopDropdownOpen(false);
        const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300
                    ${isScrolled || isMobileMenuOpen
                      ? "shadow-lg py-1 border-b-2 border-blue-dk/20 bg-cream"
                      : "py-2 sm:py-4 border-b-0 bg-transparent"
                    }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between" dir="rtl">
            <div className="flex items-center gap-3 md:gap-8">
              <Link href="/" className="flex items-center transition-transform hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Avi - Mortgage House"
                  width={180}
                  height={120}
                  className="h-[45px] w-auto sm:h-[55px] md:h-[75px] lg:h-[85px]"
                  priority
                />
              </Link>

              {/* Desktop Nav - ОСТАВИЛ КАК БЫЛО */}
              <ul className="hidden lg:flex items-center gap-2">
                {navLinks.map((link) => (
                  <li 
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && setIsDesktopDropdownOpen(true)}
                    onMouseLeave={() => link.hasDropdown && setIsDesktopDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center gap-2 px-4 py-2 text-blue-dk font-black text-xl xl:text-2xl transition-all duration-300 hover:text-orange
                        ${link.hasDropdown && isDesktopDropdownOpen ? "text-orange" : ""}`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronIcon className={`w-4 h-4 transition-transform duration-300 ${isDesktopDropdownOpen ? "rotate-180" : ""}`} />
                      )}
                    </Link>

                    {/* Desktop Premium Dropdown */}
                    {link.hasDropdown && (
                      <div 
                        className={`absolute top-full right-0 mt-1 w-80 bg-cream shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl border border-blue-dk/10 overflow-hidden transition-all duration-300 origin-top
                          ${isDesktopDropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
                      >
                        <div className="py-3 flex flex-col">
                          {servicesLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="px-6 py-3.5 text-lg font-bold text-blue-dk hover:bg-orange/5 hover:text-orange transition-all duration-200 border-b border-blue-dk/5 last:border-0 text-right flex items-center justify-between group"
                            >
                              {service.label}
                              <div className="w-1.5 h-1.5 rounded-full bg-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden relative z-[80] p-2 text-blue-dk hover:text-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon className="w-9 h-9" /> : <MenuIcon className="w-9 h-9" />}
            </button>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <a href="tel:054-472-9513" className="btn-primary flex items-center gap-2 text-lg px-7 py-2.5 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-white bg-blue-dk rounded-full font-bold">
                <PhoneIcon className="w-5 h-5" />
                <span>התקשר עכשיו</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-cream z-[60] flex flex-col transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 pt-32 pb-10 flex flex-col items-center overflow-y-auto">
          <ul className="flex flex-col gap-6 items-center w-full">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                {link.hasDropdown ? (
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-center gap-4 text-blue-dk font-black text-4xl hover:text-orange transition-colors"
                    >
                      {link.label}
                      {/* СТРЕЛКА ТЕПЕРЬ ТУТ, РЯДОМ С ТЕКСТОМ */}
                      <ChevronIcon className={`w-8 h-8 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    <div className={`flex flex-col gap-5 mt-6 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                      {servicesLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-blue-dk/60 font-bold text-2xl hover:text-orange"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                      <Link 
                        href="#services" 
                        onClick={(e) => handleNavClick(e, "#services")}
                        className="text-orange font-black text-xl underline underline-offset-8 mt-2"
                      >
                        לכל השירותים
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-blue-dk font-black text-4xl hover:text-orange transition-colors"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-16 w-full flex justify-center">
            <a href="tel:054-472-9513" className="bg-blue-dk text-white flex items-center justify-center gap-3 px-10 py-5 text-2xl w-fit rounded-xl font-black shadow-2xl">
              <PhoneIcon className="w-7 h-7" />
              <span>התקשר עכשיו</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}