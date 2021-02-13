import * as React from "react";
import styled from "styled-components";
import * as color from "utils/styles/color";
const LinkBoxTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${color.gray_5};
`;

import { LinkBlock, SmallIconWrapper } from "atomic";

interface SelectLinkBoxProp {
  to: string;
  title: string;
  icon?: React.ReactElement;
}

const SelectLinkBox = ({ to, title, icon }: SelectLinkBoxProp) => {
  return (
    <LinkBlock to={to}>
      <SmallIconWrapper width={48} height={48}>
        {icon ? icon : ""}
      </SmallIconWrapper>
      <LinkBoxTitle>{title}</LinkBoxTitle>
    </LinkBlock>
  );
};

export default SelectLinkBox;
