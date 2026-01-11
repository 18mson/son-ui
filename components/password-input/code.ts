export const code = `<div className="relative">
  <input
    type={visible ? 'text' : 'password'}
    placeholder=" "
    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 peer"
  />
  <label className="absolute left-4 top-3 text-slate-500 transition-all duration-300 peer-focus:-top-6 peer-focus:left-4 peer-focus:text-sm peer-focus:font-medium peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-500">
    Password
  </label>

  <button type="button" aria-label={visible ? 'Hide password' : 'Show password'} onClick={() => setVisible((s) => !s)} className="absolute right-3 top-2.5 p-2 rounded-md text-slate-500 hover:text-slate-700">
    {visible ? (
      // eye-off SVG
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.31 21.31 0 0 1 5-5" />
        <path d="M1 1l22 22" />
      </svg>
    ) : (
      // eye SVG
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )}
  </button>
</div>
`;
