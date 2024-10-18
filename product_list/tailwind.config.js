/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "hsl(14, 86%, 42%)",
        "custom-green": "hsl(159, 69%, 38%)",
        "Rose-50": "hsl(20, 50%, 98%)",
        "Rose-100": "hsl(13, 31%, 94%)",
        "Rose-300": "hsl(14, 25%, 72%)",
        "Rose-400": "hsl(7, 20%, 60%)",
        "Rose-500": "hsl(12, 20%, 44%)",
        "Rose-900": "hsl(14, 65%, 9%)",
      },
      fontFamily: {
        "red-hat" : '"Red Hat Text", sans-serif'
      },
      screens: {
        mobile: {
          max: "650px"
        },
        tablet: {
          min: "650px",
          max: "1150px"
        },
        laptop: {
          min: "1150px"
        }
      }
    },
  },
  plugins: [],
}

