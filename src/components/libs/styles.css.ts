import { vars } from "@/styles/theme.css";
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
  border: `1px solid ${vars.colors.text.normal}`,
  padding: "5px 10px",
  borderRadius: 12,
});

export const nameLinkBox = style({
  display: "flex",
  gap: 5,
  alignItems: "center",
  fontWeight: "bold",
  borderBottom: `1px solid ${vars.colors.text.normal}`,
  width: "fit-content",
});

export const changeThemeButton = style({
  width: 60,
  height: 30,
  borderRadius: 20,
  position: "relative",
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
