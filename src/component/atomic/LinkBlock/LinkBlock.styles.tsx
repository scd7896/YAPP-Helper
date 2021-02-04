import styled from "styled-components";

export const LinkBoxContainerDiv = styled.div`
  & + & {
    margin-left: 14px;
  }
  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    width: 318px;
    height: 217px;
    text-decoration: none;
    border: solid 1px #e7e7ea;
  }

  &:hover {
    > a {
      border: solid 1px #4b5ef6;
      box-shadow: 2px 2px 6px 0 rgba(44, 56, 119, 0.2);
    }
  }
`;
