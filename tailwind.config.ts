import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        cosmic: {
          dark: "#1B1035",
          darker: "#0D002E",
          black: "#000000",
          accent: "#FF007F",
          silver: "#C0C0C0",
          lavender: "#B19CD9",
          light: "#E5DEFF",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        "nebula": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "stardust": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%, 100%": { textShadow: "0 0 10px #FF007F" },
          "50%": { textShadow: "0 0 20px #FF007F, 0 0 30px #FF007F" },
        },
        "shooting-star": {
          "0%": { transform: "translateX(-100%) translateY(0)", opacity: "1" },
          "100%": { transform: "translateX(200%) translateY(-200%)", opacity: "0" },
        },
      },
      animation: {
        "nebula": "nebula 15s ease infinite",
        "stardust": "stardust 2s ease-out forwards",
        "shimmer": "shimmer 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "shooting-star": "shooting-star 2s ease-out forwards",
      },
      backgroundImage: {
        "cosmic-gradient": "linear-gradient(135deg, #1B1035 0%, #0D002E 100%)",
        "accent-gradient": "linear-gradient(90deg, #FF007F 0%, #B19CD9 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;