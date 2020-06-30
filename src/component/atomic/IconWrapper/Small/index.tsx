import * as React from "react";
import "./styles.scss";

interface SmallIconWrapperProp {
  children?: React.ReactElement | string;
  width: number;
  height: number;
}
const SmallIconWrapper = ({ children, width, height }: SmallIconWrapperProp) => {
  return (
    <picture className="small_icon_wrapper" style={{ width: `${width}px`, height: `${height}px` }}>
      {children}
    </picture>
  );
};

export default SmallIconWrapper;
