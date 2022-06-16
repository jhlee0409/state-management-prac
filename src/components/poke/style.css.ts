import { globalStyle, style } from "@vanilla-extract/css";

export const pokeWrapper = style({
  display: "flex",
  gap: 10,
  flexDirection: "column",
});
export const pokeGrid = style({
  display: "grid",
  gap: 15,
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  border: "1px solid white",
  padding: "5px 10px",
});

globalStyle(`${pokeGrid}> div`, {});
globalStyle(`${pokeWrapper}  h3`, {
  textTransform: "uppercase",
});

export const pokeImageBox = style({
  position: "relative",
  width: 100,
  height: 100,
  display: "flex",
  // backgroundColor: "white",
});
export const pokeImageWrapper = style({
  position: "relative",
  display: "flex",
});

export const pagingBtnBox = style({
  display: "flex",
  gap: 20,
  padding: "20px 0",
});

globalStyle(`${pagingBtnBox} > a`, {
  border: "1px solid white",
  padding: "5px 10px",
  borderRadius: 12,
});

export const rowLi = style({
  display: "flex",
  gap: 10,
});

export const openDetailBtn = style({
  textDecoration: "underline",
});
