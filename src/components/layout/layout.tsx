import { darkTheme, lightTheme } from "@/styles/theme.css";
import { ReactNode } from "react";
import { layout } from "./style.css";
import { RootState } from "src/app/store";
import ChangeThemeButton from "../libs/ChangeThemeButton";
import { useAppSelector } from "src/app/hooks";
const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const isDarkTheme = useAppSelector(
    (state: RootState) => state.theme.isDarkTheme
  );
  return (
    <div
      className={`${layout} ${isDarkTheme ? darkTheme : lightTheme}`}
      id="app"
    >
      <ChangeThemeButton />
      <div>{children}</div>
    </div>
  );
};

export default LayoutComponent;
