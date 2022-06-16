// import { darkTheme } from "@/styles/theme.css";
import { createTheme, globalStyle, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    default: "white",
    dark: "#1b1b1b",
  },
  font: {
    body: "arial",
  },
});

export const defaultTheme = style({
  backgroundColor: vars.color.default,
  fontFamily: vars.font.body,
  padding: 10,
});

globalStyle(`${defaultTheme} p, a, button, h1, h3, span`, {
  color: vars.color.dark,
});

export const darkTheme = style({
  backgroundColor: vars.color.dark,
  fontFamily: vars.font.body,
  padding: 10,
});

globalStyle(`${darkTheme} p, a, button, h1, h3, span`, {
  color: vars.color.default,
});
