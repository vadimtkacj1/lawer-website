"use client";

import { useMemo } from "react";
import { m } from "framer-motion";

// Define PropertyType as a union type
type PropertyType = "apartment" | "house" | "villa" | "commercial" | "land";

interface Property {
  index: number;
  id: number;
  title: string;
  price: string;
  rooms?: string;
  bedrooms?: string;
  bathrooms?: number;
  area: number;
  location: string;
  image?: string;
  propertyType?: PropertyType; // Use PropertyType instead of string
  [key: string]: any;
}

interface PropertyCardProps {
  index: number;
  id: number;
  title: string;
  price: string;
  rooms?: string;
  bedrooms?: string;
  bathrooms?: number;
  area: number;
  location: string;
  image?: string;
  propertyType?: PropertyType; // Use PropertyType instead of string
  [key: string]: any;
}

// Placeholder PropertyCard component
function PropertyCard(props: PropertyCardProps) {
  return (
    <div className="property-card">
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

interface HotPropositionsProps {
  items?: Property[];
  direction?: "left" | "right";
  duration?: number;
}

export default function HotPropositions({
  items = [],
  direction = "left",
  duration = 200,
}: HotPropositionsProps) {
  // Triple the items for seamless infinite scroll
  const duplicatedItems = useMemo(() => [...items, ...items, ...items], [items]);

  return (
    <div className="flex w-full overflow-hidden" style={{ direction: "ltr" }}>
      <m.div
        key={`hot-propositions-marquee-${direction}-${duration}`}
        className="flex gap-6 md:gap-8 py-4"
        initial={{ x: direction === "left" ? "0%" : "-33.33%" }}
        animate={{ x: direction === "left" ? "-33.33%" : "0%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item: Property, i: number) => (
          <div key={`hot-proposition-card-${direction}-${i}`} className="w-[320px] sm:w-[340px] md:w-[360px] shrink-0">
            <PropertyCard {...item} index={i} />
          </div>
        ))}
      </m.div>
    </div>
  );
}




