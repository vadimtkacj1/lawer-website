"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
  { href: "/service-areas/mortgage-advisor-tel-aviv", label: "יועץ משכנתאות בתל אביב" },
  { href: "/service-areas/mortgage-advisor-holon", label: "יועץ משכנתאות בחולון" },
  { href: "/service-areas/mortgage-advisor-bat-yam", label: "יועץ משכנתאות בבת ים" },
  { href: "/service-areas/mortgage-advisor-rishon-lezion", label: "יועץ משכנתאות בראשון לציון" },
];

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/services", label: "שירותים", hasDropdown: true, dropdownType: "services" },
  { href: "/service-areas", label: "איזורי שירות", hasDropdown: true, dropdownType: "service-areas" },
  { href: "/about", label: "אודות" },
  { href: "/blog", label: "בלוג" },
  { href: "/calculator", label: "מחשבון משכנתא" },
];

interface HeaderProps {
  alwaysWithBackground?: boolean;
}

export default function Header({ alwaysWithBackground = false }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileServiceAreasOpen, setIsMobileServiceAreasOpen] = useState(false);

  // Closing the desktop dropdown is delayed: the pointer travelling from the
  // nav item to the panel can clip a corner for a frame or two, and closing on
  // that first `mouseleave` made the menu impossible to reach.
  const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDropdownCloseTimer = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  };

  const openDesktopDropdown = useCallback((type: string | null) => {
    clearDropdownCloseTimer();
    setActiveDesktopDropdown(type);
  }, []);

  const closeDesktopDropdown = useCallback((delay = 0) => {
    clearDropdownCloseTimer();
    if (delay === 0) {
      setActiveDesktopDropdown(null);
      return;
    }
    dropdownCloseTimer.current = setTimeout(() => {
      dropdownCloseTimer.current = null;
      setActiveDesktopDropdown(null);
    }, delay);
  }, []);

  useEffect(() => clearDropdownCloseTimer, []);

  useEffect(() => {
    // Read layout at most once per frame, and only touch React state when the
    // threshold is actually crossed. The previous version read window.scrollY
    // inside the scroll event itself, on every event — on a phone that fires
    // far more often than once a frame, and each read forces the browser to
    // flush pending layout.
    let frame = 0;
    let last = window.scrollY > 50;
    setIsScrolled(last);

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 50;
        if (next !== last) {
          last = next;
          setIsScrolled(next);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    // The floating WhatsApp button is z-[9999] — above the drawer — and in RTL it
    // sits on the same edge the drawer opens from, so it swallowed taps on the
    // menu links underneath it. `body.menu-open` hides it while the drawer is up.
    document.body.classList.toggle("menu-open", isMobileMenuOpen);
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMobileMenuOpen]);

  // Navigating with the drawer open used to leave it open on the next page (and
  // the body scroll-locked), because App Router keeps the header mounted.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setIsMobileMenuOpen(false);
        closeDesktopDropdown();
        const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        setIsMobileMenuOpen(false);
        closeDesktopDropdown();
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
                    ${isScrolled || isMobileMenuOpen || alwaysWithBackground
                      ? "py-3 sm:py-4 bg-cream border-b border-blue-dk/10 shadow-nav"
                      : "py-4 sm:py-6 bg-transparent border-b border-transparent"
                    }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <nav aria-label="ראשי" className="flex flex-row-reverse lg:flex-row items-center justify-between">
            
            <div className="flex flex-row items-center gap-4 md:gap-8">
              <Link href="/" className="flex items-center" suppressHydrationWarning>
                <Image
                  src="/images/logo.svg"
                  alt="אבי - בית למשכנתאות"
                  width={220}
                  height={110}
                  className="h-[48px] w-auto xs:h-[55px] sm:h-[62px] md:h-[68px] lg:h-[72px]"
                  priority
                  unoptimized
                />
              </Link>

              <ul className="hidden lg:flex items-center gap-1" dir="rtl">
                {navLinks.map((link) => {
                  const isActive = link.hasDropdown && activeDesktopDropdown === link.dropdownType;
                  const dropdownLinks = link.dropdownType === "services" ? servicesLinks : serviceAreasLinks;
                  const isCurrent =
                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                  // Navigation is deliberately quiet: the accent belongs to the
                  // CTA, so the current page is marked with weight and a rule
                  // rather than colour.
                  const navLinkClass = `relative flex items-center gap-1.5 px-3 py-1.5 text-[15px] xl:text-base transition-colors duration-200 outline-none
                    after:absolute after:bottom-0 after:right-3 after:left-3 after:h-0.5 after:rounded-full after:bg-blue-dk after:transition-opacity
                    ${isCurrent || isActive
                      ? "text-blue-dk font-bold after:opacity-100"
                      : "text-blue-dk/70 font-semibold hover:text-blue-dk after:opacity-0 hover:after:opacity-40"}`;

                  return (
                    <li
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => link.hasDropdown && openDesktopDropdown(link.dropdownType || null)}
                      onMouseLeave={() => link.hasDropdown && closeDesktopDropdown(180)}
                      onFocus={() => link.hasDropdown && openDesktopDropdown(link.dropdownType || null)}
                      onBlur={(e) => {
                        if (link.hasDropdown && !e.currentTarget.contains(e.relatedTarget as Node)) {
                          closeDesktopDropdown();
                        }
                      }}
                    >
                      {link.hasDropdown ? (
                        <Link
                          href={link.href}
                          aria-haspopup="true"
                          aria-expanded={isActive}
                          aria-current={isCurrent ? "page" : undefined}
                          className={navLinkClass}
                        >
                          {link.label}
                          <ChevronIcon className={`w-3 h-3 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                        </Link>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          aria-current={isCurrent ? "page" : undefined}
                          className={navLinkClass}
                        >
                          {link.label}
                        </Link>
                      )}

                      {/* The offset below the nav item is padding on this
                          wrapper, not a margin on the card. A margin left an
                          8px dead strip that belonged to neither element, so
                          the pointer moving down to the panel triggered
                          `mouseleave` on the item and the menu shut before it
                          could be reached. The padding keeps the hover area
                          continuous; it is transparent and, while closed,
                          `pointer-events-none`, so it blocks nothing. */}
                      {link.hasDropdown && (
                        <div
                          aria-hidden={!isActive}
                          className={`absolute top-full right-0 pt-2 w-72 transition-all duration-300 origin-top
                            ${isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
                        >
                          <div className="py-2 flex flex-col bg-white rounded-2xl overflow-hidden shadow-card-lg ring-1 ring-blue-dk/10">
                            {dropdownLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                tabIndex={isActive ? undefined : -1}
                                aria-current={pathname === item.href ? "page" : undefined}
                                className="px-5 py-2.5 text-[15px] font-medium text-blue-dk/80 hover:bg-blue-dk/[0.04] hover:text-blue-dk aria-[current=page]:text-blue-dk aria-[current=page]:font-bold transition-colors duration-200 text-right flex items-center justify-between group outline-none"
                              >
                                {item.label}
                                <div className="w-1 h-1 rounded-full bg-blue-dk opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
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
                className="lg:hidden relative p-0 border-none bg-transparent rounded-md text-blue-dk hover:text-blue-dk/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <CloseIcon className="w-9 h-9 sm:w-10 sm:h-10" /> : <MenuIcon className="w-9 h-9 sm:w-10 sm:h-10" />}
              </button>

              <div className="hidden lg:flex items-center gap-2">
                <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center gap-2 text-sm px-6 py-2.5 transition-all hover:bg-orange-hover active:scale-95 text-white bg-orange rounded-full font-bold shadow-button"
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
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 bg-black/50 z-[80] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        id="mobile-menu"
        inert={!isMobileMenuOpen || undefined}
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[75vw] max-w-[300px] bg-cream shadow-2xl z-[90] flex flex-col pt-[100px] transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        dir="rtl"
      >
        {/* The 100px top offset belongs to the drawer, not to the scrolling area.
            While it was padding *inside* the scroller, menu items scrolled up
            underneath the header (z-[100], above this drawer) — they looked
            hidden but still took the tap, and the top-right of that band is the
            close button, so tapping a link there just shut the menu. */}
        <nav aria-label="ניווט ראשי (נייד)" className="px-6 pb-8 flex flex-col overflow-y-auto overscroll-contain w-full flex-1 min-h-0">
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
                        aria-expanded={isOpen}
                        aria-controls={`mobile-submenu-${link.dropdownType}`}
                        className="w-full flex items-center justify-start gap-2 text-blue-dk font-semibold text-lg hover:text-blue-dk/70 transition-colors bg-transparent border-none outline-none text-right"
                      >
                        <span>{link.label}</span>
                        <ChevronIcon className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      <div
                        id={`mobile-submenu-${link.dropdownType}`}
                        aria-hidden={!isOpen}
                        className={`flex flex-col gap-3 mt-3 pr-4 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        {dropdownLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            tabIndex={isOpen ? undefined : -1}
                            className="block text-blue-dk/70 font-medium text-base hover:text-blue-dk transition-colors text-right w-full"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-blue-dk font-semibold text-lg hover:text-blue-dk/70 transition-colors block text-right w-full"
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
              className="bg-orange text-white flex items-center justify-center gap-2 px-6 py-3 text-base rounded-full font-bold hover:bg-orange-hover active:scale-95 transition-all w-full shadow-button"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>צור קשר</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}