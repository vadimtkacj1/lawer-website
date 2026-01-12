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

  // Block body scroll when mobile menu is open
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color,padding] duration-200
                    ${
                      isScrolled || isMobileMenuOpen
                        ? "shadow-md py-2 sm:py-2 border-b-2 border-blue-dk/30 bg-cream"
                        : "py-2 sm:py-3 border-b-0 bg-transparent"
                    }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between">

            {/* Logo and Navigation */}
            <div className="flex items-center gap-3 md:gap-6">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="אבי - הבית למשכנתאות"
                  width={180}
                  height={120}
                  className="h-[50px] w-auto sm:h-[55px] md:h-[90px] lg:h-[100px]"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <ul className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative px-3 py-1 text-blue-dk font-black text-xl md:text-2xl lg:text-2xl
                                 transition-colors hover:text-orange
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
              className="lg:hidden p-2 text-blue-dk hover:text-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="תפריט"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              ) : (
                <MenuIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              )}
            </button>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="tel:050-000-0000"
                className="btn-primary flex items-center gap-2 text-lg px-6 py-3"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>התקשר עכשיו</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Centered Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="lg:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-cream rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-8">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-blue-dk font-black text-2xl text-center hover:text-orange hover:bg-blue-dk/5 rounded-lg transition-colors uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Mobile CTA */}
              <div className="mt-8">
                <a
                  href="tel:050-000-0000"
                  className="btn-primary flex items-center justify-center gap-2 w-full py-3 text-base"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>התקשר עכשיו</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
