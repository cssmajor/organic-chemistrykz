/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#06B6D4',
          dark: '#38BDF8',
        },
        secondary: '#22C55E',
        bg: {
          primary: {
            light: '#F9FAFB',
            dark: '#020617',
          },
          card: {
            light: '#FFFFFF',
            dark: '#0F172A',
          },
        },
        text: {
          main: {
            light: '#0B1220',
            dark: '#E5E7EB',
          },
          muted: {
            light: '#6B7280',
            dark: '#94A3B8',
          },
        },
        border: {
          light: '#E5E7EB',
          dark: '#1E293B',
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'card-dark': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'card-hover-dark': '0 4px 12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
