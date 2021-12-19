module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.html",
      "./src/**/*.scss",
    ],
  },
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        bg: {
          DEFAULT: "#f8f9ff",
          card: "#f1f3fa"
        },
        darkbg: {
          DEFAULT: "#20222f",
          card: "#252b43",
          dark: "#1d2029"
        },
        facebook: "#1791f0",
        twitter: "#1da1f5",
        instagram: "#f09433",
        maingreen: "#3fac8e"
      },
    },
  },
  varaiants: {
    extend: {}
  },
  plugins: [],
}
