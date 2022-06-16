import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";
import { vars as root } from "./vars.css";

const colors = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  text: {
    normal: null,
    dimmed: null,
  },
});

export const lightTheme = createTheme(colors, {
  primary: "#1E40AF",
  secondary: "#DB2777",
  background: "white",
  text: {
    normal: "black",
    dimmed: "#6B7280",
  },
});

export const darkTheme = createTheme(colors, {
  primary: "#60A5FA",
  secondary: "#F472B6",
  background: "#1B1B1B",
  text: {
    normal: "white",
    dimmed: "#D1D5DB",
  },
});

export const vars = { ...root, colors };
