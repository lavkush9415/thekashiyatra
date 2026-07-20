import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sandalwood: {
          50: "#fdf6f0",
          100: "#fae8d8",
          200: "#f5cfb0",
          300: "#edaf7f",
          400: "#e4864c",
          500: "#8B4513",
          600: "#7a3d11",
          700: "#65320e",
          800: "#52290c",
          900: "#44220b",
        },
        saffron: {
          50: "#fff8ec",
          100: "#ffefd0",
          200: "#ffdb9d",
          300: "#ffc265",
          400: "#ffa733",
          500: "#FF9933",
          600: "#f07d0a",
          700: "#c75f0a",
          800: "#9e4a10",
          900: "#7f3d10",
        },
        golden: {
          50: "#fffde7",
          100: "#fff9c4",
          200: "#fff59d",
          300: "#fff176",
          400: "#FFD54F",
          500: "#ffca28",
          600: "#ffb300",
          700: "#ffa000",
          800: "#ff8f00",
          900: "#ff6f00",
        },
        brand: {
          primary: "#8B4513",
          secondary: "#FF9933",
          accent: "#FFD54F",
          bg: "#FFF8F0",
          darkbg: "#111827",
          text: "#1F2937",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "saffron-gradient": "linear-gradient(135deg, #FF9933 0%, #FFD54F 100%)",
        "spiritual-gradient": "linear-gradient(135deg, #8B4513 0%, #FF9933 50%, #FFD54F 100%)",
        "dark-gradient": "linear-gradient(135deg, #111827 0%, #1F2937 100%)",
        "hero-gradient": "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(255, 153, 51, 0.3)",
        "glow-lg": "0 0 60px rgba(255, 153, 51, 0.4)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
        luxury: "0 20px 60px rgba(139, 69, 19, 0.15)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
