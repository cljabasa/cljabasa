// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: [
        'Inconsolata',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'Roboto',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      mono: ['Inconsolata', 'Menlo', 'Consolas', 'monospaced'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
