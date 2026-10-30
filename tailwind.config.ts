import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#667085",
        brand: "#635BFF",
        soft: "#F5F6FF",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(28, 39, 76, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
