"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Preview() {
  return (
    <button className="group px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:pr-8 active:scale-95">
      <span className="flex items-center gap-2">
        Get Started
        <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );
}
