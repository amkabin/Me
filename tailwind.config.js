/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0A0A0A",
        bgSecondary: "#1A1A2E",
        cardDark: "#111827",
        accentGold: "#C9A84C",
        accentBurgundy: "#8B1A2B",
        textPrimary: "#E5E5E5",
        textSecondary: "#9CA3AF",
      },
    },
  },
  plugins: [],
};