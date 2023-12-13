/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 200ms linear',
        fade: 'fadeOut 1.5s linear',
        slide_left: 'slide_left 2s ease-in-out',
        slide_right: 'slide_right 2s ease-in-out',
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.7 },
          '100%': { opacity: 1 },
        },

        slide_left: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slide_right: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0)' },
        },

      }),
    },
  },
  plugins: [
  ],
}

