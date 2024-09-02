module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    "./node_modules/flowbite/**/*.js", "./src/**/*.{js,jsx,ts,tsx}",
  ]
  ,
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1E3A8A', // Navy Blue
          dark: '#5A20CB',  // Royal Purple
        },
        secondary: {
          light: '#F3F4F6', // Soft Gray
          dark: '#111827',  // Charcoal Gray
        },
        text: {
          light: '#1F2937', // Dark Slate
          dark: '#D1D5DB',  // Light Gray
        },
        accent: {
          cyan: '#0EA5E9',  // Cyan
          coral: '#F97316', // Coral
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Include Flowbite for components
  ],
};
