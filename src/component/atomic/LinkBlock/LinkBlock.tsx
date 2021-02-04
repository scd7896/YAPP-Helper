import * as React from "react";
import { Link } from "react-router-dom";
import { LinkBoxContainerDiv } from "./LinkBlock.styles";
interface LinkBlockProp {
  children: React.ReactElement | React.ReactElement[];
  to: string;
}

const LinkBlock = ({ children, to }: LinkBlockProp) => {
  return (
    <LinkBoxContainerDiv>
      <Link to={to}>{children}</Link>
    </LinkBoxContainerDiv>
  );
};

export default LinkBlock;
