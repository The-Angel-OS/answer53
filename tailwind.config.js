/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lcars: {
          amber: '#C4956A',
          lavender: '#9B8EC4',
          peach: '#C48A7A',
          teal: '#7AB5B0',
          blue: '#7A9EC4',
          mauve: '#A8879E',
          'bg': '#0A0810',
          'text': '#F5F2F0',
        },
      },
      fontFamily: {
        orbitron: ["'Orbitron'", 'monospace'],
        rajdhani: ["'Rajdhani'", 'sans-serif'],
        inter: ["'Inter'", 'sans-serif'],
      },
      backgroundImage: {
        'gradient-lcars': 'linear-gradient(135deg, #C4956A 0%, #9B8EC4 50%, #7AB5B0 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(196, 149, 106, 0.1) 0%, transparent 100%)',
      },
      boxShadow: {
        'lcars-amber': '0 0 20px rgba(196, 149, 106, 0.3)',
        'lcars-lavender': '0 0 20px rgba(155, 142, 196, 0.3)',
        'lcars-teal': '0 0 20px rgba(122, 181, 176, 0.3)',
      },
      animation: {
        'pulse-lcars': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [],
};
