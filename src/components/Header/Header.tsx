"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
  { href: "/services/foreign-mortgages", label: "משכנתא לתושבי חוץ" },
  { href: "/services/debt-consolidation", label: "משכנתא לכל מטרה" },
];

const serviceAreasLinks = [
  { href: "/service-areas/mortgage-advisor-holon", label: "יועץ משכנתאות בחולון" },
  { href: "/service-areas/mortgage-advisor-bat-yam", label: "יועץ משכנתאות בבת ים" },
  { href: "/service-areas/mortgage-advisor-rishon-lezion", label: "יועץ משכנתאות בראשון לציון" },
];

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/services", label: "שירותים", hasDropdown: true, dropdownType: "services" },
  { href: "/service-areas", label: "איזורי שירות", hasDropdown: true, dropdownType: "service-areas" },
  { href: "/about", label: "אודות" },
  { href: "/calculator", label: "מחשבון משכנתא" },
];

interface HeaderProps {
  alwaysWithBackground?: boolean;
}

export default function Header({ alwaysWithBackground = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileServiceAreasOpen, setIsMobileServiceAreasOpen] = useState(false);

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
        setActiveDesktopDropdown(null);
        const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        setIsMobileMenuOpen(false);
        setActiveDesktopDropdown(null);
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
                    ${isScrolled || isMobileMenuOpen || alwaysWithBackground
                      ? "py-3 sm:py-4 bg-cream shadow-md"
                      : "py-4 sm:py-6 bg-transparent"
                    }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <nav className="flex flex-row-reverse lg:flex-row items-center justify-between">
            
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

              <ul className="hidden lg:flex items-center gap-1" dir="rtl">
                {navLinks.map((link) => {
                  const isActive = link.hasDropdown && activeDesktopDropdown === link.dropdownType;
                  const dropdownLinks = link.dropdownType === "services" ? servicesLinks : serviceAreasLinks;

                  return (
                    <li
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => link.hasDropdown && setActiveDesktopDropdown(link.dropdownType || null)}
                      onMouseLeave={() => link.hasDropdown && setActiveDesktopDropdown(null)}
                    >
                      {link.hasDropdown ? (
                        <button
                          onClick={(e) => e.preventDefault()}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-blue-dk font-bold text-lg xl:text-xl transition-all duration-300 hover:text-orange outline-none bg-transparent border-none cursor-pointer
                            ${isActive ? "text-orange" : ""}`}
                        >
                          {link.label}
                          <ChevronIcon className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-blue-dk font-bold text-lg xl:text-xl transition-all duration-300 hover:text-orange outline-none"
                        >
                          {link.label}
                        </Link>
                      )}

                      {link.hasDropdown && (
                        <div
                          className={`absolute top-full right-0 mt-0 w-72 bg-cream rounded-xl overflow-hidden transition-all duration-300 origin-top shadow-xl
                            ${isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
                        >
                          <div className="py-1.5 flex flex-col">
                            {dropdownLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="px-5 py-2 text-base font-semibold text-blue-dk hover:bg-orange/5 hover:text-orange transition-all duration-200 text-right flex items-center justify-between group outline-none"
                              >
                                {item.label}
                                <div className="w-1 h-1 rounded-full bg-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex items-center">
              <button
                className="lg:hidden relative p-0 border-none bg-transparent outline-none focus:ring-0 text-blue-dk hover:text-orange transition-colors"
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

      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 z-[80] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[75vw] max-w-[300px] bg-cream shadow-2xl z-[90] flex flex-col transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        dir="rtl"
      >
        <div className="px-6 pt-[100px] pb-8 flex flex-col overflow-y-auto w-full h-full">
          <ul className="flex flex-col gap-5 w-full">
            {navLinks.map((link) => {
              const isServicesDropdown = link.dropdownType === "services";
              const isOpen = isServicesDropdown ? isMobileServicesOpen : isMobileServiceAreasOpen;
              const toggleOpen = isServicesDropdown
                ? () => setIsMobileServicesOpen(!isMobileServicesOpen)
                : () => setIsMobileServiceAreasOpen(!isMobileServiceAreasOpen);
              const dropdownLinks = isServicesDropdown ? servicesLinks : serviceAreasLinks;

              return (
                <li key={link.href} className="w-full">
                  {link.hasDropdown ? (
                    <div className="flex flex-col w-full">
                      <button
                        onClick={toggleOpen}
                        className="w-full flex items-center justify-start gap-2 text-blue-dk font-semibold text-lg hover:text-orange transition-colors bg-transparent border-none outline-none text-right"
                      >
                        <span>{link.label}</span>
                        <ChevronIcon className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      <div className={`flex flex-col gap-3 mt-3 pr-4 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                        {dropdownLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-blue-dk/80 font-medium text-base hover:text-orange transition-colors text-right w-full"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-blue-dk font-semibold text-lg hover:text-orange transition-colors block text-right w-full"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-auto pt-10 w-full">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bg-blue-dk text-white flex items-center justify-center gap-2 px-6 py-3 text-base rounded-full font-semibold hover:bg-blue-dk/90 active:scale-95 transition-all w-full"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>צור קשר</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}