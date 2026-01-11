export const code = `<button className="group relative px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 active:scale-95">
  <span className="relative z-10 flex items-center gap-2">
    <!-- sparkles SVG -->
    <svg className="w-4 h-4 transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6" />
      <path d="M12 16v6" />
      <path d="M4.2 4.2l4.2 4.2" />
      <path d="M19.8 19.8l-4.2-4.2" />
    </svg>
    Click Me
  </span>
  <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</button>`;
