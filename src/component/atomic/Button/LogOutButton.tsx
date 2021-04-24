import * as React from "react";
import styled from "styled-components";
import * as color from "utils/styles/color";

import { LogOutIcon } from "../Icon";

const Button = styled.button`
  width: 160px;
  height: 36px;
  border-radius: 8px;
  font-size: 12px;
  color: ${color.gray_5};
  border: none;
  background-color: ${color.gray_1};
  &:hover {
    background-color: #f0f0f7;
  }
`;

const LogOutButton = () => (
  <Button>
    <LogOutIcon />
    &nbsp;로그아웃
  </Button>
);
export default LogOutButton;
