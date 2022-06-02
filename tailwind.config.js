const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Iceland", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        myblue: {
          1: "#1D4ED8",
          2: "#BFDBFE",
          3: "#3B82F6",
        },
        mygray: {
          1: "#18181B",
          2: "#71717A",
          3: "#3E4347",
          4: "#D4D4D8",
          5: "#f5f5f5",
          6: "#333336",
        },
        myred: "#EF4444",
        mygreen: "#22C55E",
      },
    },
  },
  plugins: [],
};
