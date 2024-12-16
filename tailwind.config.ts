import withMT from "@material-tailwind/react/utils/withMT";
const flowbite = require("flowbite-react/tailwind");
module.exports = withMT( {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [ flowbite.plugin(),],
}) ;


