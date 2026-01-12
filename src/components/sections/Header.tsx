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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color,padding] duration-200
                  ${
                    isScrolled
                      ? "shadow-md py-3 sm:py-3 border-b-2 border-blue-dk/30 bg-cream"
                      : "py-4 sm:py-5 border-b-0 bg-transparent"
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
                className="h-[70px] w-auto sm:h-[80px] md:h-[90px] lg:h-[100px]"
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
            className="lg:hidden p-1 text-blue-dk"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="תפריט"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 sm:mt-4 pb-4 border-t border-blue-dk/10 pt-3 sm:pt-4">
            <ul className="flex flex-col gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 sm:px-4 py-2 text-blue-dk font-black text-lg sm:text-xl md:text-2xl hover:text-orange hover:bg-blue-dk/5 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile CTA */}
            <div className="mt-4 px-3 sm:px-4">
              <a
                href="tel:050-000-0000"
                className="btn-primary flex items-center justify-center gap-2 w-full py-3 text-base sm:text-lg"
              >
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>התקשר עכשיו</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
