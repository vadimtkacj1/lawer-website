"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

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
  { href: "/services/mortgage-for-purchase", label: "משכנתא לרכישת דירה" },
  { href: "/services/dira-behanacha-mortgage", label: "מחיר למשתכן" },
  { href: "/services/loan-consolidation", label: "מחזור ואיחוד הלוואות" },
  { href: "/services/reverse-mortgage", label: "משכנתא הפוכה" },
  { href: "/services/mortgage-refused", label: "מסורבי בנקים ומורכבות" },
  { href: "/services/renovation-mortgage", label: "משכנתא לשיפוץ" },
  { href: "/services/apartment-mortgage", label: "משכנתא לדירה" },
  { href: "/services/foreign-mortgages", label: "משכנתא לתושבי חוץ" },
  { href: "/services/debt-consolidation", label: "משכנתא לכל מטרה" },
];

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "#services", label: "שירותים", hasDropdown: true },
  { href: "/about", label: "אודות" },
  { href: "#contact", label: "צור קשר" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Scroll logic for header appearance
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

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
      } else {
        setIsMobileMenuOpen(false);
        setIsDesktopDropdownOpen(false);
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300
                    ${isScrolled || isMobileMenuOpen
                      ? "py-3 sm:py-4 bg-cream" 
                      : "py-4 sm:py-6 bg-transparent"
                    }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          {/* MOBILE: flex-row-reverse -> Logo Right, Burger Left 
            DESKTOP (lg): flex-row-reverse -> Keeps Hebrew RTL alignment (Logo right)
          */}
          <nav className="flex flex-row-reverse items-center justify-between">
            
            {/* Logo and Desktop Nav Group */}
            <div className="flex flex-row-reverse items-center gap-2 sm:gap-3 md:gap-8">
              <Link href="/" className="flex items-center outline-none ring-0" suppressHydrationWarning>
                <Image
                  src="/images/logo.svg"
                  alt="Avi - Mortgage House"
                  width={220}
                  height={110}
                  className="h-[60px] w-auto xs:h-[68px] sm:h-[75px] md:h-[80px] lg:h-[85px] transition-all duration-300"
                  priority
                />
              </Link>

              {/* Desktop Links (Hidden on mobile) */}
              <ul className="hidden lg:flex items-center gap-1" dir="rtl">
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
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-blue-dk font-bold text-lg xl:text-xl transition-all duration-300 hover:text-orange outline-none
                        ${link.hasDropdown && isDesktopDropdownOpen ? "text-orange" : ""}`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronIcon className={`w-3.5 h-3.5 transition-transform duration-300 ${isDesktopDropdownOpen ? "rotate-180" : ""}`} />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
                    {link.hasDropdown && (
                      <div 
                        className={`absolute top-full right-0 mt-0 w-72 bg-cream rounded-xl overflow-hidden transition-all duration-300 origin-top shadow-xl border-none
                          ${isDesktopDropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
                      >
                        <div className="py-1.5 flex flex-col">
                          {servicesLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="px-5 py-2 text-base font-semibold text-blue-dk hover:bg-orange/5 hover:text-orange transition-all duration-200 text-right flex items-center justify-between group outline-none"
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

            {/* Burger Menu (Mobile) / Contact Button (Desktop) */}
            <div className="flex items-center">
              {/* BURGER BUTTON: 
                - border-none, bg-transparent, shadow-none removes the 'box' 
                - outline-none and focus:ring-0 removes selection borders
              */}
              <button
                className="lg:hidden relative z-[80] p-0 border-none bg-transparent shadow-none outline-none focus:outline-none focus:ring-0 text-blue-dk hover:text-orange transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
              >
                {isMobileMenuOpen ? <CloseIcon className="w-9 h-9 sm:w-10 sm:h-10" /> : <MenuIcon className="w-9 h-9 sm:w-10 sm:h-10" />}
              </button>

              {/* Desktop Contact CTA */}
              <div className="hidden lg:flex items-center gap-2">
                <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center gap-2 text-sm px-6 py-2.5 transition-all hover:bg-blue-dk/90 active:scale-95 text-white bg-blue-dk rounded-full font-bold shadow-none border-none outline-none"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>צור קשר</span>
                </a>
              </div>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-cream z-[60] flex flex-col transition-all duration-500 ease-in-out transform border-none shadow-none ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        dir="rtl"
      >
        <div className="container mx-auto px-6 pt-40 pb-10 flex flex-col items-center overflow-y-auto">
          <ul className="flex flex-col gap-8 items-center w-full">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                {link.hasDropdown ? (
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-center gap-3 text-blue-dk font-bold text-4xl hover:text-orange transition-colors outline-none bg-transparent border-none"
                    >
                      {link.label}
                      <ChevronIcon className={`w-8 h-8 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    <div className={`flex flex-col gap-6 mt-6 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}`}>
                      {servicesLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-blue-dk/60 font-medium text-2xl hover:text-orange outline-none"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-blue-dk font-bold text-4xl hover:text-orange transition-colors outline-none"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-16 w-full flex justify-center">
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bg-blue-dk text-white flex items-center justify-center gap-3 px-12 py-5 text-2xl w-fit rounded-xl font-bold active:scale-95 transition-transform border-none outline-none"
            >
              <PhoneIcon className="w-7 h-7" />
              <span>צור קשר</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}