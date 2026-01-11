"use client";

import { Zap } from "lucide-react";
import React from "react";

export default function Preview() {
  return (
    <button className="group relative px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 active:scale-95">
      <span className="relative z-10 flex items-center gap-2">
        <Zap className="w-4 h-4 transition-transform group-hover:rotate-12" />
        Click Me
      </span>
      <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
