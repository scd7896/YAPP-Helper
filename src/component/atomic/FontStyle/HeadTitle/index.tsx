import * as React from "react";

import "./styles.scss";

type FontStyle = {
  children: React.ReactElement | string;
};
const HeadTitleText = ({ children }: FontStyle) => {
  return <p className="title-text-style">{children}</p>;
};

export default HeadTitleText;
