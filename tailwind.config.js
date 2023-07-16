module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'Back-in-back': '#1F1A24',
        'Mystical-purple': '#725f84',
      },
      backgroundImage: {
        banner: "url('../src/img/banner-sun-moon.jpg')",
      },
    },
    fontFamily: {
      quicksand: 'Quicksand, sans-serif',
      rubik: 'Rubik Dirt,cursive',
      techmono: 'Share Tech Mono, monospace',
    },
  },
  plugins: [],
}
