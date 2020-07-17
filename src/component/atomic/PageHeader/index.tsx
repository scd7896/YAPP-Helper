import * as React from "react";
import "./style.scss";

interface PageHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const PageHeader = ({ className, children }: PageHeaderProps) => {
  return <header className={className ? className : "yapp-page-header"}>{children}</header>;
};

export default PageHeader;
