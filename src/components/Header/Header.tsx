"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/services", label: "שירותים" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#contact", label: "צור קשר" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle background change on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll handler for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setIsMobileMenuOpen(false); // Close menu on click

        const headerOffset = 100; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      {/* Main Header - High Z-index (100) ensures the toggle button 
          stays clickable even when the menu overlay is open.
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200
                    ${isScrolled || isMobileMenuOpen
                        ? "shadow-md py-1 border-b-2 border-blue-dk/30 bg-cream"
                        : "py-1 sm:py-2 border-b-0 bg-transparent"
                    }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 md:gap-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="אבי - הבית למשכנתאות"
                  width={180}
                  height={120}
                  className="h-[45px] w-auto sm:h-[50px] md:h-[70px] lg:h-[80px]"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <ul className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="relative px-3 py-1 text-blue-dk font-black text-xl md:text-2xl transition-colors hover:text-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden relative z-[110] p-1 text-blue-dk hover:text-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              ) : (
                <MenuIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              )}
            </button>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="tel:054-472-9513"
                className="btn-primary flex items-center gap-2 text-lg px-6 py-2"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>התקשר עכשיו</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay - Z-index (90) 
          is lower than the header/button to prevent blocking the toggle.
      */}
      <div
        className={`lg:hidden fixed inset-0 bg-cream z-[90] flex flex-col items-center justify-center transition-all duration-500 transform ${
          isMobileMenuOpen 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col items-center">
          <ul className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-blue-dk font-black text-4xl sm:text-5xl text-center hover:text-orange transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center w-full">
            <a
              href="tel:054-472-9513"
              className="btn-primary flex items-center justify-center gap-3 px-10 py-4 text-xl w-fit shadow-xl"
            >
              <PhoneIcon className="w-6 h-6" />
              <span>התקשר עכשיו</span>
            </a>
          </div>
        </div>
        
        {/* Background Decorative Text */}
        <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none -z-10 translate-x-1/4 translate-y-1/4">
           <div className="text-[40vw] font-black text-blue-dk">אבי</div>
        </div>
      </div>
    </>
  );
}