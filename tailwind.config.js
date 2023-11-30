/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        product: {
          yellow: {
            DEFAULT: "#DBAC2C",
            light: "#F1E9C9",
            dark: "#C47F17",
          },
          purple: {
            DEFAULT: "#8047F8",
            light: "#EBE5F9",
            dark: "#4B2995",
          },
        },
        base: {
          bg: "#FAFAFA",
          button: "#E6E5E5",
          card: "#F3F2F2",
          hover: "#D7D5D5",
          input: "#EDEDED",
          label: "#8D8686",
          subtitle: "#403937",
          text: "#574F4D",
          title: "#272221",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        "sans-r": ["Roboto", "sans-serif"],
        "sans-b": ['"Baloo 2"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
