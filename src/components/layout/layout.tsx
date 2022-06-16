import { ReactNode } from "react";
import { layout } from "./style.css";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  return <div className={layout}>{children}</div>;
};

export default LayoutComponent;
