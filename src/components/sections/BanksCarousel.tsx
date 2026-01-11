import Image from "next/image";

const banks = [
  { name: "בנק לאומי", logo: "/images/bank1.png" },
  { name: "בנק הפועלים", logo: "/images/bank2.png" },
  { name: "בנק דיסקונט", logo: "/images/bank3.svg" },
  { name: "בנק מזרחי", logo: "/images/bank4.png" },
  { name: "בנק ירושלים", logo: "/images/bank5.png" },
  { name: "בנק מרכנתיל", logo: "/images/bank6.png" },
  { name: "בנק מרכנתיל", logo: "/images/bank7.png" },
  { name: "בנק מרכנתיל", logo: "/images/bank8.png" },
  { name: "בנק מרכנתיל", logo: "/images/bank9.png" },
  { name: "בנק מרכנתיל", logo: "/images/bank10.png" },
  { name: "בנק מרכנתיל", logo: "/images/bank11.png" },
  { name: "בנק מרכנתיל", logo: "/images/bank12.png" },
];

export default function BanksCarousel() {
  // Duplicate banks for seamless infinite scroll (need at least 2x for seamless loop)
  const duplicatedBanks = [...banks, ...banks];

  return (
    <section className="relative py-12 md:py-16 z-0" style={{ backgroundColor: "#f9f7f4" }}>
      <div className="container mx-auto px-4">
        {/* Constrained carousel window */}
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          {/* Gradient masks on sides for fade effect */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#f9f7f4] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#f9f7f4] to-transparent z-10 pointer-events-none" />

          {/* Infinite scrolling track */}
          <div className="flex animate-banks-scroll" style={{ width: "fit-content" }}>
            {duplicatedBanks.map((bank, index) => (
              <div
                key={`${bank.name}-${index}`}
                className="flex-shrink-0 px-6 md:px-8 flex items-center justify-center"
              >
                <Image
                  src={bank.logo}
                  alt={bank.name}
                  width={160}
                  height={60}
                  className="h-[50px] md:h-[60px] w-auto opacity-50 hover:opacity-100
                             transition-all duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
