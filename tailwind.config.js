/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#f3f4f8",
        white: "#fff",
        textprimary: "#040513",
        textsecondary: "#79858c",
        whitesmoke: "#ebebeb",
        gray: "rgba(0, 0, 0, 0.05)",
      },
      spacing: {},
      fontFamily: {
        nunito: "Nunito",
        inherit: "inherit",
      },
      borderRadius: {
        "9980xl": "9999px",
      },
    },
    fontSize: {
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
