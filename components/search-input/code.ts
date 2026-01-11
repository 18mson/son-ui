export const code = `
<div className="relative">
  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
    {/* simple magnifying glass SVG */}
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </div>
  <input
    placeholder={focused ? "Search components..." : " "}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-slate-200 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 peer"
  />
  <label className="absolute left-10 top-3 text-slate-500 transition-all duration-300 peer-focus:-top-6 peer-focus:left-10 peer-focus:text-sm peer-focus:font-medium peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-500">
    Search
  </label>
</div>
`;
