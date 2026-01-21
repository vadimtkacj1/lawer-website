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

  useEffect(() => {
    let raf: number | null = null;
    const onScroll = () => {
      if (raf != null) return;
      raf = window.requestAnimationFrame(() => {
        raf = null;
        setIsScrolled(window.scrollY > 50);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf != null) window.cancelAnimationFrame(raf);
    };
  }, []);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it is an anchor link (starts with #)
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Close the mobile menu if it is open
        setIsMobileMenuOpen(false);

        // Smooth scroll to the element
        const headerOffset = 100; // Offset from the top to account for header height
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
      <header
        /* Added suppressHydrationWarning to ignore extension-injected styles */
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-[60] transition-[background-color,box-shadow,border-color,padding] duration-200
                    ${
                      isScrolled || isMobileMenuOpen
                        ? "shadow-md py-1 border-b-2 border-blue-dk/30 bg-cream" // Reduced padding here (py-1)
                        : "py-1 sm:py-2 border-b-0 bg-transparent" // And here (py-1 sm:py-2)
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
                  // Slightly reduced logo height on larger screens from 100px to 80px
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
                      suppressHydrationWarning
                      className="relative px-3 py-1 text-blue-dk font-black text-xl md:text-2xl transition-colors hover:text-orange
                                 after:content-[''] after:absolute after:bottom-0
                                 after:right-1/2 after:w-0 after:h-0.5 after:bg-orange
                                 after:transition-[width] after:translate-x-1/2
                                 hover:after:w-4/5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-[70] p-1 text-blue-dk hover:text-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
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
                // Reduced vertical padding (py-2 instead of py-3)
                className="btn-primary flex items-center gap-2 text-lg px-6 py-2"
                suppressHydrationWarning
              >
                <PhoneIcon className="w-5 h-5" />
                <span>התקשר עכשיו</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-cream z-[55] flex flex-col items-center justify-center transition-all duration-300 transform ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col items-center">
          <ul className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-blue-dk font-black text-4xl sm:text-5xl text-center hover:text-orange transition-colors uppercase tracking-tight"
                  onClick={(e) => handleNavClick(e, link.href)}
                  suppressHydrationWarning
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
              suppressHydrationWarning
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