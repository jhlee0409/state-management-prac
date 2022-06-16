import { darkTheme, defaultTheme, themeClass } from "@/styles/theme.css";
import { ReactNode, useState } from "react";
import { layout } from "./style.css";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={themeClass}>
      <button
        onClick={() => setTheme(theme === "default" ? "dark" : "default")}
      >
        theme
      </button>
      <div className={`${theme === "default" ? defaultTheme : darkTheme}`}>
        {children}
      </div>
    </div>
  );
};

export default LayoutComponent;
