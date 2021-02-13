import * as React from "react";
import { Header } from "./PageHeader.styles";

interface PageHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const PageHeader = ({ className, children }: PageHeaderProps) => {
  return <Header>{children}</Header>;
};

export default PageHeader;
