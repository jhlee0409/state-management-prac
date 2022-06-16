import { vars } from "@/styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const layout = style({
  maxWidth: 1200,
  width: "100%",
  margin: "0 auto",
  padding: "40px 40px",
});

export const listWrapper = style({
  display: "flex",
  gap: 10,
  flexDirection: "column",
});

globalStyle(`${listWrapper}  h3`, {
  textTransform: "uppercase",
});

export const ListLayoutWrapper = style({});

globalStyle(`${ListLayoutWrapper} > h1`, {
  textTransform: "uppercase",
});

export const changeThemeButton = style({
  width: 60,
  height: 30,
  borderRadius: 20,
  position: "relative",
});

export const dark = style({
  backgroundColor: "black",
});
export const light = style({
  backgroundColor: "orange",
});

export const circleBox = style({
  height: "80%",
  width: "40%",
  borderRadius: "100%",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  transition: `all 50ms linear`,
});

export const left = style({
  transform: `translate(130%,-50%)`,
});
export const right = style({
  transform: `translate(15%, -50%)`,
});
