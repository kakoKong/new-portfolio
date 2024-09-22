/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Add custom fonts here
        sans: ['Space Grotesk', 'sans-serif'],
        // You can also add local fonts if available
      },
    }
  },
  plugins: [],
}

