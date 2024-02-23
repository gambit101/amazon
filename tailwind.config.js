/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('https://plus.unsplash.com/premium_photo-1661901122974-e280f0c1efab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      backgroundSize: {
        'full': '100% 100%',
      }
    },
  },
  plugins: [require("daisyui")],
}

