import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";

interface SmallIconWrapperProp {
  children?: React.ReactElement | string;
  width: number;
  height: number;
}

const cx = classNames.bind(styles);
const SmallIconWrapper = ({ children, width, height }: SmallIconWrapperProp) => {
  return (
    <picture className={cx("small_icon_wrapper")} style={{ width: `${width}px`, height: `${height}px` }}>
      {children}
    </picture>
  );
};

export default SmallIconWrapper;
