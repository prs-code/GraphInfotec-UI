/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
        extend: {
      backgroundImage: {
        "Baner": "url('/src/assets/images/bg1.jpg')",
        "bgHamishe": "url('/src/assets/images/همیشه و همه جا.jpeg')",
        "bgGozaresh": "url('/src/assets/images/گزارش ساز.jpeg')",
        "bgMeidani": "url('/src/assets/images/میدانی گزارش.jpeg')",
        "bgBank": "url('/src/assets/images/بانک اطلاعاتی.jpeg')",
        "bgAnformatic": "url('/src/assets/images/anformatic.jpg')",
        "bgFata": "url('/src/assets/images/fata.jpg')",
        "bgDanesh": "url('/src/assets/images/danesh-bonyan.jpg')",
        "bgVideo": "url('/src/assets/videos/graph_Co.mp4')",
      },

      boxShadow: {
        "underShadow": '0 4px 6px rgba(0, 0, 0, 0.3)', 
      },
      backgroundOpacity: ['active'],
    },
  },
  plugins: [], 
}
