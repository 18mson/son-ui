"use client";

import React from "react";

type SidebarProps = {
  categories: string[];
  selected: string;
  onSelect: (c: string) => void;
};

export default function Sidebar({ categories, selected, onSelect }: SidebarProps) {
  return (
    <aside className="w-64 p-4 border-r border-border">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3">Categories</h3>
      <ul className="flex flex-col gap-2">
        {categories.map((c) => (
          <li key={c}>
            <button
              onClick={() => onSelect(c)}
              className={`w-full text-left px-3 py-2 rounded-md transition-all duration-150 flex items-center gap-2 ${
                c === selected
                  ? "bg-emerald-600 text-white shadow"
                  : "text-foreground hover:bg-slate-100"
              }`}
            >
              <span className="text-sm">{c}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
