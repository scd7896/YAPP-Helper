import * as React from "react";

import "./styles.scss";

const InnerHeadStyle = ({ children }: FontStyle) => {
  return <p className="inner-head-text-style">{children}</p>;
};

export default InnerHeadStyle;
