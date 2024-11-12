/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
     "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { animation: {
      tilt: 'tilt 10s infinite linear',
    },
    keyframes: {
      tilt: {
        '0%, 50%, 100%': {
          transform: 'rotate(0deg)',
        },
        '25%': {
          transform: 'rotate(0.5deg)',
        },
        '75%': {
          transform: 'rotate(-0.5deg)',
        },
      },
    },},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Hide scrollbar for WebKit-based browsers */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
};
