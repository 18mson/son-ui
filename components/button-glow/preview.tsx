"use client";

export default function Preview() {
  return (
    <button className="relative px-6 py-3 rounded-lg bg-linear-to-r from-orange-500 to-pink-600 text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-r before:from-orange-500 before:to-pink-600 before:blur-xl before:opacity-0 hover:before:opacity-70 before:transition-opacity before:duration-300 before:-z-10">
      Glow Effect
    </button>
  );
}
