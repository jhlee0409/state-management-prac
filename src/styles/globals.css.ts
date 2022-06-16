import { keyframes, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const fadeInAnimation = keyframes({
  "0%": { transform: "translateX(-20px)", opacity: 0 },
  "100%": { transform: "translateX(0)", opacity: 1 },
});

globalStyle("#app", {
  padding: vars.space["2x"],
  fontFamily: vars.fonts.fontFamily,
  backgroundColor: vars.colors.background,
  minHeight: "100vh",
});

globalStyle("main > div", {
  animation: `${fadeInAnimation} ease 500ms`,
  animationFillMode: "forwards",
  animationIterationCount: 1,
});

globalStyle("p, span, label, button, a, div", {
  color: vars.colors.text.normal,
});
