"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Internal Icons ---
const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
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
  { href: "/calculator", label: "מחשבון משכנתא" },
  { href: "#contact", label: "צור קשר" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
                      ? "py-3 sm:py-4 bg-cream shadow-md" 
                      : "py-4 sm:py-6 bg-transparent"
                    }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          {/* flex-row-reverse на мобилке меняет местами Лого и Бургер.
              lg:flex-row возвращает стандартный порядок для десктопа.
          */}
          <nav className="flex flex-row-reverse lg:flex-row items-center justify-between">
            
            {/* Группа Логотипа и Десктопного меню */}
            <div className="flex flex-row items-center gap-4 md:gap-8">
              <Link href="/" className="flex items-center" suppressHydrationWarning>
                <Image
                  src="/images/logo.svg"
                  alt="Avi - Mortgage House"
                  width={220}
                  height={110}
                  className="h-[48px] w-auto xs:h-[55px] sm:h-[62px] md:h-[68px] lg:h-[72px]"
                  priority
                />
              </Link>

              {/* Desktop Links */}
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
                        className={`absolute top-full right-0 mt-0 w-72 bg-cream rounded-xl overflow-hidden transition-all duration-300 origin-top shadow-xl
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

            {/* Левая сторона (на мобилке станет правой из-за row-reverse): Бургер или Кнопка */}
            <div className="flex items-center">
              <button
                className="lg:hidden relative z-[80] p-0 border-none bg-transparent outline-none focus:ring-0 text-blue-dk hover:text-orange transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <CloseIcon className="w-9 h-9 sm:w-10 sm:h-10" /> : <MenuIcon className="w-9 h-9 sm:w-10 sm:h-10" />}
              </button>

              <div className="hidden lg:flex items-center gap-2">
                <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center gap-2 text-sm px-6 py-2.5 transition-all hover:bg-blue-dk/90 active:scale-95 text-white bg-blue-dk rounded-full font-bold"
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
        className={`lg:hidden fixed inset-0 bg-cream z-[60] flex flex-col transition-all duration-500 ease-in-out transform ${
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
                      className="flex items-center justify-center gap-3 text-blue-dk font-bold text-4xl hover:text-orange transition-colors bg-transparent border-none outline-none"
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
                          className="text-blue-dk/60 font-medium text-2xl hover:text-orange"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-blue-dk font-bold text-4xl hover:text-orange transition-colors"
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
              className="bg-blue-dk text-white flex items-center justify-center gap-3 px-12 py-5 text-2xl w-fit rounded-xl font-bold active:scale-95 transition-transform"
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