/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "icon-border-color": "var(--icon-border-color)",
        "nav-color": "var(--nav-color:)"
      }
    },
  },
  plugins: [],
}

