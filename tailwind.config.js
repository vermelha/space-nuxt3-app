module.exports = {
    // mode: "jit",
    content: [
      "./app.vue",
      "./components/**/*.{vue}",
      "./pages/**/*.vue",
    ],
    theme: {
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem'
          },
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };