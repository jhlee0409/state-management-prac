import { sprinkles } from "@/styles/sprinkles.css";
import { darkTheme, lightTheme } from "@/styles/theme.css";
import { ReactNode, useState } from "react";
import { changeThemeButton, layout, circleBox, left, right } from "./style.css";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <div
      className={`${layout} ${isDarkTheme ? darkTheme : lightTheme}`}
      id="app"
    >
      <button
        className={`${changeThemeButton}  ${sprinkles({
          background: isDarkTheme ? "black" : "orange",
        })}`}
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        <div className={`${circleBox} ${isDarkTheme ? left : right}`} />
      </button>
      <div>{children}</div>
    </div>
  );
};

export default LayoutComponent;
