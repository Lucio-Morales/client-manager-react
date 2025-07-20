// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Esto es crucial para que Tailwind escanee tus archivos React/TypeScript
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Aquí puedes extender el tema por defecto de Tailwind (colores, fuentes, etc.)
      colors: {
        primary: {
          light: '#6366F1', // Indigo 500 para el tema claro
          dark: '#818CF8', // Indigo 400 para el tema oscuro
        },
        secondary: {
          light: '#F59E0B', // Amber 500 para el tema claro
          dark: '#FCD34D', // Amber 300 para el tema oscuro
        },
        background: {
          light: '#F9FAFB', // Gray 50 para el tema claro
          dark: '#111827', // Gray 900 para el tema oscuro
        },
        text: {
          light: '#1F2937', // Gray 800 para el tema claro
          dark: '#E5E7EB', // Gray 200 para el tema oscuro
        },
        accent: {
          DEFAULT: '#EF4444', // Red 500 para un color de acento que no cambia
          hover: '#DC2626', // Red 600 al pasar el mouse
        },
      },
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'], // Ejemplo: Usar Inter como fuente por defecto
      //   display: ['Oswald', 'sans-serif'], // Ejemplo: Una fuente para títulos
      // }
    },
  },
  plugins: [], // Aquí puedes añadir plugins de Tailwind CSS (como @tailwindcss/forms)
};
