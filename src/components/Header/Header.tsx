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

  // Handle sticky background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setIsMobileMenuOpen(false);
        const offset = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* STUCK HEADER: 
          Uses 'fixed' with a high z-index to stay on top.
      */}
      <header
        dir="rtl"
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-cream shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-5 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="relative z-[1001]" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-[40px] sm:h-[50px] md:h-[65px] w-auto transition-all"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-blue-dk font-bold text-lg hover:text-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:054-472-9513" className="btn-primary px-5 py-2 flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              <span>התקשר עכשיו</span>
            </a>
          </nav>

          {/* Mobile Menu Button (Burger) */}
          <button
            className="lg:hidden relative z-[1001] p-3 -mr-3 text-blue-dk outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY:
          Fixed h-[100dvh] ensures it fits mobile screens perfectly.
      */}
      <div
        dir="rtl"
        className={`lg:hidden fixed inset-0 z-[1000] bg-cream transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-28 pb-10 px-6">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-blue-dk font-black text-3xl sm:text-4xl py-2 active:text-orange transition-colors w-full text-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col items-center gap-6 w-full">
            <a
              href="tel:054-472-9513"
              className="btn-primary w-full max-w-sm py-4 flex items-center justify-center gap-3 text-xl shadow-lg rounded-xl"
            >
              <PhoneIcon className="w-6 h-6" />
              <span>התקשר עכשיו</span>
            </a>
            
            <div className="text-blue-dk/10 font-black text-6xl select-none">
              אבי
            </div>
          </div>
        </div>
      </div>
    </>
  );
}