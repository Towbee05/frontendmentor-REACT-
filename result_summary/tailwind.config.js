/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors : {
        'custom-reaction' : 'hsl(0, 100%,67%)',
        'custom-memory' : 'hsl(39, 100%, 56%)',
        'custom-verbal' : 'hsl(166, 100%, 37%)',
        'custom-visual' : 'hsl(234, 85%, 45%)',
        'light-blue' : 'hsl(241, 100%, 89%)',
        'gradient-1' : 'hsl(252, 100%, 67%)',
        'gradient-2' : 'hsl(241, 81%, 54%)',
        'custom-navy-blue' : '#303B59',
        'circle-gradient1' : 'hsla(241, 72%, 46%, 0)',
        'circle-gradient2' : 'hsla(256, 72%, 46%, 1)',
        'background' : 'hsl(221, 100%, 96%)'
      },
      screens: {
        laptop: {
          min : '600px'
        }
      }
    },
  },
  plugins: [],
}

