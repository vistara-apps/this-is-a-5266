/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'hsl(210, 25%, 97%)',
        'accent': 'hsl(130, 60%, 50%)',
        'primary': 'hsl(210, 70%, 45%)',
        'surface': 'hsl(0, 0%, 100%)',
        'text-primary': 'hsl(210, 25%, 15%)',
        'text-secondary': 'hsl(210, 25%, 40%)',
        'dark-bg': 'hsl(220, 25%, 10%)',
        'dark-surface': 'hsl(220, 25%, 15%)',
        'dark-text': 'hsl(220, 25%, 90%)',
      },
      borderRadius: {
        'lg': '16px',
        'md': '10px',
        'sm': '6px',
      },
      spacing: {
        'lg': '20px',
        'md': '12px',
        'sm': '8px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(210, 25%, 15%, 0.08)',
        'modal': '0 8px 24px hsla(210, 25%, 15%, 0.12)',
      },
    },
  },
  plugins: [],
}