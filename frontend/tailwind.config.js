/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',},
      },
      gridColumn: {
        'span-3': 'span 3 / span 3',
        'span-3.75': 'span 3.75 / span 3.75',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      }
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: "none",
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

