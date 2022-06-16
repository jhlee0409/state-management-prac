import { globalStyle, style } from "@vanilla-extract/css";

export const pokeListWrapper = style({
  display: "flex",
  gap: 10,
  flexDirection: "column",
});

globalStyle(`${pokeListWrapper}  h3`, {
  textTransform: "uppercase",
});

export const pokeNameLinkBox = style({
  display: "flex",
  gap: 5,
  alignItems: "center",
  fontWeight: "bold",
  borderBottom: "1px solid white",
  width: "fit-content",
});
