"use client";

import { useState, useEffect } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import AccessibilityIcon from "@/components/icons/AccessibilityIcon";
import CloseIcon from "@/components/icons/CloseIcon";

type AccessibilitySettings = {
  fontSize: "normal" | "large" | "extra-large";
  contrast: "normal" | "high";
  underlineLinks: boolean;
};

export default function Widgets() {
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("accessibility-settings");
      return saved ? JSON.parse(saved) : {
        fontSize: "normal",
        contrast: "normal",
        underlineLinks: false,
      };
    }
    return {
      fontSize: "normal",
      contrast: "normal",
      underlineLinks: false,
    };
  });

  useEffect(() => {
    // Apply settings to document
    const root = document.documentElement;
    
    // Font size
    root.classList.remove("font-size-normal", "font-size-large", "font-size-extra-large");
    root.classList.add(`font-size-${settings.fontSize}`);
    
    // Contrast
    root.classList.remove("contrast-normal", "contrast-high");
    root.classList.add(`contrast-${settings.contrast}`);
    
    // Underline links
    if (settings.underlineLinks) {
      root.classList.add("underline-links");
    } else {
      root.classList.remove("underline-links");
    }

    // Save to localStorage
    localStorage.setItem("accessibility-settings", JSON.stringify(settings));
  }, [settings]);

  const toggleFontSize = () => {
    const sizes: AccessibilitySettings["fontSize"][] = ["normal", "large", "extra-large"];
    const currentIndex = sizes.indexOf(settings.fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    setSettings({ ...settings, fontSize: sizes[nextIndex] });
  };

  const toggleContrast = () => {
    setSettings({
      ...settings,
      contrast: settings.contrast === "normal" ? "high" : "normal",
    });
  };

  const toggleUnderlineLinks = () => {
    setSettings({
      ...settings,
      underlineLinks: !settings.underlineLinks,
    });
  };

  const resetSettings = () => {
    setSettings({
      fontSize: "normal",
      contrast: "normal",
      underlineLinks: false,
    });
  };

  return (
    <>
      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/972500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50
                   w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#25d366]
                   flex items-center justify-center shadow-lg shadow-[#25d366]/30
                   transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-95"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
      </a>

      {/* Accessibility Widget */}
      <div className="fixed bottom-6 left-6 lg:bottom-8 lg:left-8 z-50">
        {/* Accessibility Panel */}
        {isAccessibilityOpen && (
          <div
            className="absolute bottom-20 left-0 w-80 bg-white rounded-2xl shadow-2xl border-2 border-blue-dk/10 p-6 mb-2"
            dir="rtl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-black text-blue-dk">הגדרות נגישות</h3>
              <button
                onClick={() => setIsAccessibilityOpen(false)}
                className="p-1 text-blue-dk hover:text-orange transition-colors"
                aria-label="סגור"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Font Size */}
              <div>
                <label className="block text-sm font-bold text-blue-dk mb-2">
                  גודל טקסט
                </label>
                <button
                  onClick={toggleFontSize}
                  className="w-full py-2 px-4 bg-blue-dk text-white rounded-lg hover:bg-blue-dk/90 transition-colors text-sm font-bold"
                >
                  {settings.fontSize === "normal" && "רגיל"}
                  {settings.fontSize === "large" && "גדול"}
                  {settings.fontSize === "extra-large" && "גדול מאוד"}
                </button>
              </div>

              {/* Contrast */}
              <div>
                <label className="block text-sm font-bold text-blue-dk mb-2">
                  ניגודיות
                </label>
                <button
                  onClick={toggleContrast}
                  className="w-full py-2 px-4 bg-blue-dk text-white rounded-lg hover:bg-blue-dk/90 transition-colors text-sm font-bold"
                >
                  {settings.contrast === "normal" ? "רגיל" : "גבוה"}
                </button>
              </div>

              {/* Underline Links */}
              <div>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-bold text-blue-dk">
                    קו תחתון לקישורים
                  </span>
                  <button
                    onClick={toggleUnderlineLinks}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      settings.underlineLinks ? "bg-blue-dk" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        settings.underlineLinks ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </label>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full py-2 px-4 border-2 border-blue-dk text-blue-dk rounded-lg hover:bg-blue-dk hover:text-white transition-colors text-sm font-bold"
              >
                איפוס הגדרות
              </button>
            </div>
          </div>
        )}

        {/* Accessibility Toggle Button */}
        <button
          onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
          className="w-14 h-14 lg:w-16 lg:h-16 bg-blue-dk
                   flex items-center justify-center shadow-lg shadow-blue-dk/30
                   transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-blue-dk/90 active:scale-95"
          aria-label="נגישות"
          title="נגישות"
          aria-expanded={isAccessibilityOpen}
        >
          <AccessibilityIcon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
        </button>
      </div>
    </>
  );
}
