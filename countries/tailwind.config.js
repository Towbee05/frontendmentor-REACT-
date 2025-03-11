/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        darkmodeBlue: "hsl(209, 23%, 22%)",
        darkmodeVeryBlue: "hsl(207, 26%, 17%)",
        lightmodeVeryBlue: "hsl(200, 15%, 8%)",
        lightmodedarkgrey: "hsl(0, 0%, 52%)",
        lightmodelightgrey: "#B2B2B2",

      },
      boxShadow:{
        "3xl" : "0px 2px 9px 0px rgba(0,0,0,0.1)",
        "4xl" : "0px 0px 4px 1px rgba(0,0,0,0.1)",
        "5xl" : "0px 4px 4px 0px rgba(0,0,0,0.25)"
      },
      screens: {
        "desktop" : {
          min: "700px"
        }
      }
    },
  },
  plugins: [],
};
