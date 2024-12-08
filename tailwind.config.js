/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    extend: {
      colors: {
        "theme-color-50": "#eff6ff",
        "theme-color-100": "#dbeafe",
        "theme-color-200": "#bfdbfe",
        "theme-color-300": "#93c5fd",
        "theme-color-400": "#60a5fa",
        "theme-color-500": "#3b82f6",
        "theme-color-600": "#2563eb",
        "theme-color-700": "#1d4ed8",
        "theme-color-800": "#1e40af",
        "theme-color-900": "#1e3a8a",
        "theme-color-950": "#172554",
      }
    },
  },
  plugins: [],
};
