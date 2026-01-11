export const code = `
<div className="relative">
  <select className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 appearance-none transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20">
    <option value="">Choose</option>
    <option value="one">One</option>
    <option value="two">Two</option>
  </select>
  <label className="absolute left-4 top-3 text-slate-500 transition-all duration-300 peer-focus:-top-6 peer-focus:left-4 peer-focus:text-sm peer-focus:font-medium peer-focus:text-blue-600">Options</label>
  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </div>
</div>
`;
