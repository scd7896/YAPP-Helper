import * as React from "react";
import classNames from "classnames/bind";
import styles from "./style.scss";

interface PageHeaderProps {
  className?: string;
  children?: React.ReactNode;
}
const cx = classNames.bind(styles);
const PageHeader = ({ className, children }: PageHeaderProps) => {
  return <header className={className ? className : cx("yapp-page-header")}>{children}</header>;
};

export default PageHeader;
