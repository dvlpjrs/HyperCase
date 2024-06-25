import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sfProRounded: "SfProRounded",
        sfProDisplay: "SfProDisplay",
      },
      colors: {
        background: "hsla(0, 0%, 100%, 1)",
        secondary: "hsla(205, 17%, 25%, 1)",
        decorative: "hsla(205, 100%, 91%, 1)",
        decorativeSecondary: "hsla(210, 29%, 97%, 1)",
        foreground: "hsla(234, 15%, 25%, 1)",
        secondaryForeground: "hsla(0, 2%, 55%, 1)",
        border: "hsla(220, 17%, 93%, 1)",
        imageBg: "hsla(0, 0%, 85%, 1)",
        hover: "hsla(0, 0%, 68%, 0.3)",
        footerBg: "hsla(240, 16%, 6%, 1)",
        footerDivider: "hsl(231, 15.87%, 24.71%, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
