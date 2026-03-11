"use client";

import React from "react";
import { Coins, Building2, Banknote } from "lucide-react";

export default function BackgroundLayer() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none">
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(#2D3648 2px, transparent 2px), linear-gradient(90deg, #2D3648 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }}
      />

    </div>
  );
}

