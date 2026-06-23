import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#08111f",
          900: "#0d1c31",
          800: "#142842"
        },
        gold: {
          500: "#c8a35f",
          400: "#d7bb7a"
        },
        mist: "#f7f4ed",
        graphite: "#313946"
      },
      boxShadow: {
        executive: "0 24px 80px rgba(8, 17, 31, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
