import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("button", {
  backgroundColor: "unset",
  outline: "none",
  border: "none",
  cursor: "pointer",
});

globalStyle("a", {
  outline: "none",
  cursor: "pointer",
  textDecoration: "none",
});

globalStyle("li", {
  margin: "0 20px",
});
