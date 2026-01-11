import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-cream z-10">
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row h-full min-h-[80vh]">
          {/* Expert Image - Left Side */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-2">
            <div className="relative h-full min-h-[80vh] flex items-end">
              {/* Expert Image with next/image optimization */}
              <Image
                src="/images/expert.jpeg"
                alt="אבי - יועץ משכנתאות מומחה"
                width={600}
                height={800}
                priority
                className="w-full h-full object-cover object-center"
                style={{
                  objectPosition: 'center top',
                  maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                }}
              />
            </div>
          </div>
          {/* Text Content - Right Side */}
          <div className="w-full lg:w-1/2 flex items-center pt-32 pb-16 order-1 lg:order-1">
            <div className="flex flex-col items-start text-right w-full lg:pr-8">

              {/* Main Heading */}
              <h1
                className="font-heebo font-black text-blue-dk leading-tight mb-2"
                style={{
                  fontSize: "clamp(52px, 7vw, 100px)",
                }}
              >
                הביטחון שלך
                <br />
                במשכנתא חסכונית
              </h1>

              {/* Description */}
              <p className="text-2xl md:text-3xl font-bold text-blue-dk/90 mb-4 leading-relaxed">
                אנחנו דואגים שהכסף יישאר אצלכם, לא בבנק. חיסכון ממוצע של{" "}
                <strong className="text-blue-dk font-black">180,000 ש״ח</strong> למשפחה
                בתכנון נכון ומקצועי.
              </p>

              {/* CTA Button */}
              <button
                className="bg-orange text-white px-12 py-5 text-3xl font-black rounded-2xl
                           shadow-[0_12px_30px_rgba(242,103,34,0.3)]
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(242,103,34,0.4)]
                           focus:outline-none focus:ring-4 focus:ring-orange/30
                           flex items-center gap-3"
              >
                בדיקת זכאות חינם
                <svg
                  className="w-8 h-8 flex-shrink-0 rotate-180"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
