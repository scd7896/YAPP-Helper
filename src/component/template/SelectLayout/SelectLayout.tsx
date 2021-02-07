import * as React from "react";
import { LeftNav } from "organisms";
import { WrapperSection, Main } from "./SelectLayout.styles";

interface SelectLayoutProps {
  children: React.ReactElement[] | React.ReactElement;
}

const SelectLayout = ({ children }: SelectLayoutProps) => {
  return (
    <WrapperSection>
      <LeftNav />
      <Main>{children}</Main>
    </WrapperSection>
  );
};

export default SelectLayout;
