import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
     manrope:"Manrope"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#0256B2",
        white:"#FFFFFF",
        black:"#111111",
        gray:"#7F8184",
        borderColor:"#EAEAEB",
        red:"#E31B23",
        lightBlue:"#E6EEF7"
      },
      screens: {
        'xxs':'330px',  
        "xxmds":"370px",
        'xs':'400px',
        "mdxs":"450px",
        "mds":"500px",
        'sm': '640px',
        'md': '768px',
        'lg': '900px',
        "xl": '1024px',
        "2xl": '1280px',
    
      }
    },
  },
  plugins: [],
} satisfies Config;
