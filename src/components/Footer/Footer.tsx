"use client";

import Link from "next/link";
import LocationIcon from "@/components/icons/LocationIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

const serviceLinks = [
  { href: "/services/first-home", label: "משכנתא לדירה ראשונה" },
  { href: "/services/refinance", label: "מחזור משכנתא קיימת" },
  { href: "/services/investors", label: "משכנתא למשקיעים" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    Icon: InstagramIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-dk text-white py-10 sm:py-12 md:py-14 lg:py-16" dir="rtl">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* About */}
          <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-right lg:text-center">
            <h3 className="text-orange font-black text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4">
              אבי - הבית למשכנתאות
            </h3>
            <p className="text-white/70 text-sm sm:text-base md:text-lg font-semibold leading-relaxed max-w-sm">
              ליווי מקצועי ואובייקטיבי בתהליך לקיחת המשכנתא. אנחנו עובדים
              בשבילכם, לא בשביל הבנק, כדי להבטיח את התנאים המשתלמים ביותר.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-right lg:text-center">
            <h3 className="text-orange font-black text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4">השירותים שלנו</h3>
            <nav className="flex flex-col space-y-1.5 sm:space-y-2 w-full">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm sm:text-base md:text-lg font-semibold hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-right lg:text-center sm:col-span-2 lg:col-span-1">
            <h3 className="text-orange font-black text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4">צרו קשר</h3>
            <address className="not-italic space-y-1.5 sm:space-y-2 text-white/70 text-sm sm:text-base md:text-lg font-semibold w-full">
              <p className="flex items-center gap-2 justify-center sm:justify-start lg:justify-center">
                <LocationIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                תל אביב, ישראל
              </p>
            </address>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-5 md:mt-6 justify-center sm:justify-start lg:justify-center w-full">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 text-center">
          <p className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg font-semibold px-2">
            © {new Date().getFullYear()} אבי - הבית למשכנתאות. כל הזכויות
            שמורות. תכנון נכון שחוסך לכם כסף.
          </p>
        </div>
      </div>
    </footer>
  );
}
