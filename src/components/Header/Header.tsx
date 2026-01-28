"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import { PHONE_NUMBER_RAW } from "@/lib/phone";

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
        const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300
                    ${isScrolled || isMobileMenuOpen
                      ? "shadow-md py-0.5 border-b border-blue-dk/10 bg-cream"
                      : "py-1.5 sm:py-2 border-b-0 bg-transparent"
                    }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between" dir="rtl">
            <div className="flex items-center gap-3 md:gap-8">
              <Link href="/" className="flex items-center transition-transform hover:scale-105" suppressHydrationWarning>
                <Image
                  src="/images/logo.svg"
                  alt="Avi - Mortgage House"
                  width={150}
                  height={80}
                  className="h-[38px] w-auto sm:h-[45px] md:h-[55px] lg:h-[60px]"
                  priority
                />
              </Link>

              {/* Desktop Nav */}
              <ul className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <li 
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && setIsDesktopDropdownOpen(true)}
                    onMouseLeave={() => link.hasDropdown && setIsDesktopDropdownOpen(false)}
                    suppressHydrationWarning
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-blue-dk font-bold text-lg xl:text-xl transition-all duration-300 hover:text-orange
                        ${link.hasDropdown && isDesktopDropdownOpen ? "text-orange" : ""}`}
                      suppressHydrationWarning
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronIcon className={`w-3.5 h-3.5 transition-transform duration-300 ${isDesktopDropdownOpen ? "rotate-180" : ""}`} />
                      )}
                    </Link>

                    {/* Desktop Premium Dropdown */}
                    {link.hasDropdown && (
                      <div 
                        className={`absolute top-full right-0 mt-0 w-72 bg-cream shadow-xl rounded-xl border border-blue-dk/5 overflow-hidden transition-all duration-300 origin-top
                          ${isDesktopDropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
                      >
                        <div className="py-1.5 flex flex-col">
                          {servicesLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="px-5 py-2 text-base font-semibold text-blue-dk hover:bg-orange/5 hover:text-orange transition-all duration-200 border-b border-blue-dk/5 last:border-0 text-right flex items-center justify-between group"
                            >
                              {service.label}
                              <div className="w-1 h-1 rounded-full bg-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
              className="lg:hidden relative z-[80] p-1.5 text-blue-dk hover:text-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>

            {/* Desktop CTA - Now links to #contact */}
            <div className="hidden lg:flex items-center gap-2">
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center gap-2 text-sm px-4 py-1.5 transition-all hover:bg-blue-dk/90 active:scale-95 text-white bg-blue-dk rounded-full font-bold"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>צור קשר</span>
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
        <div className="container mx-auto px-6 pt-24 pb-10 flex flex-col items-center overflow-y-auto">
          <ul className="flex flex-col gap-5 items-center w-full">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                {link.hasDropdown ? (
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-center gap-3 text-blue-dk font-bold text-3xl hover:text-orange transition-colors"
                    >
                      {link.label}
                      <ChevronIcon className={`w-6 h-6 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    <div className={`flex flex-col gap-4 mt-4 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                      {servicesLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-blue-dk/60 font-medium text-xl hover:text-orange"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-blue-dk font-bold text-3xl hover:text-orange transition-colors"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile CTA - Now links to #contact */}
          <div className="mt-12 w-full flex justify-center">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bg-blue-dk text-white flex items-center justify-center gap-3 px-8 py-4 text-xl w-fit rounded-lg font-bold shadow-lg"
            >
              <PhoneIcon className="w-6 h-6" />
              <span>צור קשר</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}