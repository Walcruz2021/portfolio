/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          'body-color': 'var(--color-body)',
          'dark-6': 'var(--color-dark-6)',
          'dark-3': 'var(--color-dark-3)',
          'stroke': 'var(--color-stroke)',
          'primary': 'var(--color-primary)',
        },
      },
    },
    plugins: [],
  }
  