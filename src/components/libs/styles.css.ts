import { globalStyle, style } from "@vanilla-extract/css";

export const disableLink = style({
  cursor: "not-allowed",
  opacity: 0.4,
  pointerEvents: "none",
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

export const nameLinkBox = style({
  display: "flex",
  gap: 5,
  alignItems: "center",
  fontWeight: "bold",
  borderBottom: "1px solid white",
  width: "fit-content",
});
