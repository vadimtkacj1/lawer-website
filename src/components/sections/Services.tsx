"use client";

import Link from "next/link";

const services = [
  {
    href: "/services/first-home",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
        <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z" />
      </svg>
    ),
    title: "משכנתא לדירה ראשונה",
    description: "ליווי מלא לזוגות צעירים ורוכשי דירה ראשונה עם תנאים מועדפים"
  },
  {
    href: "/services/refinance",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
      </svg>
    ),
    title: "מחזור משכנתא",
    description: "שיפור תנאי המשכנתא הקיימת וחיסכון של אלפי שקלים בחודש"
  },
  {
    href: "/services/all-purpose",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
      </svg>
    ),
    title: "משכנתא לכל מטרה",
    description: "מימון גמיש לשיפוצים, השקעות או כל צורך אחר על בסיס הנכס"
  },
  {
    href: "/services/investors",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
      </svg>
    ),
    title: "משכנתא למשקיעים",
    description: "פתרונות מימון מותאמים למשקיעי נדל״ן עם מסלולים ייחודיים"
  },
  {
    href: "/services/commercial",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z" />
        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z" />
        <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
      </svg>
    ),
    title: "ליווי עסקאות מורכבות",
    description: "ניהול עסקאות מורכבות עם מספר צדדים ודרישות מיוחדות"
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 z-0 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="section-title">השירותים שלנו</h2>

        <div className="max-w-[1200px] mx-auto">
          {/* Unified block container */}
          <nav className="flex flex-col md:flex-row" style={{ perspective: "2000px" }}>
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex-1 relative"
              >
                {/* Background shadow that appears when card lifts */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-dk/20 to-orange/10
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-700
                             rounded-lg blur-xl"
                  style={{ transform: "translateZ(-20px)" }}
                />

                {/* The flipping card */}
                <div
                  className="relative h-[150px]
                             transition-all duration-700 ease-out
                             [transform-style:preserve-3d]
                             group-hover:[transform:translateY(-12px)_translateZ(40px)_rotateY(180deg)]
                             shadow-[0_2px_8px_rgba(28,54,100,0.08)]
                             group-hover:shadow-[0_25px_50px_rgba(28,54,100,0.3)]"
                >
                  {/* Front side */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5
                               [backface-visibility:hidden]
                               bg-cream
                               transition-all duration-700"
                  >
                    {/* Divider line - only between cards */}
                    {index !== 0 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-3/4 w-[1px] bg-gradient-to-b from-transparent via-blue-dk/20 to-transparent" />
                    )}
                    {index !== services.length - 1 && (
                      <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-dk/20 to-transparent" />
                    )}

                    <span className="text-orange drop-shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {service.icon}
                    </span>
                    <span className="text-blue-dk font-black text-[15px] text-center leading-tight">
                      {service.title}
                    </span>
                  </div>

                  {/* Back side */}
                  <div
                    className="absolute inset-0 flex items-center justify-center p-5
                               [backface-visibility:hidden]
                               [transform:rotateY(180deg)]
                               bg-gradient-to-br from-blue-dk to-[#0d1f3c]
                               transition-all duration-700"
                  >
                    {/* Divider line - only between cards */}
                    {index !== 0 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-3/4 w-[1px] bg-gradient-to-b from-transparent via-orange/30 to-transparent" />
                    )}
                    {index !== services.length - 1 && (
                      <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
                    )}

                    <p className="text-white font-bold text-[14px] text-center leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
