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
