import { darkTheme, lightTheme } from "@/styles/theme.css";
import { ReactNode, useState } from "react";
import { layout } from "./style.css";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <div className={`${isDarkTheme ? darkTheme : lightTheme}`} id="app">
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>theme</button>
      <p>{`current Theme : ${isDarkTheme ? "dark" : "light"}`}</p>
      <div>{children}</div>
    </div>
  );
};

export default LayoutComponent;
