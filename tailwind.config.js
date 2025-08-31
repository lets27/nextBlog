/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // adjust if using Next.js 13+ app dir
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        layoutBg: "#212529",
        primary: "#1D4ED8",
        secondary: "#2563EB",
      },

      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "375px", // small phones
        sm: "640px", // phones
        md: "768px", // tablets
        lg: "1024px", // small laptops
        xl: "1280px", // desktops
        "2xl": "1536px", // large screens
        wide: "1440px", // custom wide
      },
    },
  },
  plugins: [],
};
