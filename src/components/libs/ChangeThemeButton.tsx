import { changeTheme } from "src/app/theme";
import { changeThemeButton, circleBox, left, right } from "./styles.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { useAppDispatch, useAppSelector } from "src/app/hooks";

const ChangeThemeButton = () => {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);

  return (
    <button
      className={`${changeThemeButton}  ${sprinkles({
        background: isDarkTheme ? "black" : "orange",
      })}`}
      onClick={() => dispatch(changeTheme())}
    >
      <div className={`${circleBox} ${isDarkTheme ? left : right}`} />
    </button>
  );
};

export default ChangeThemeButton;
