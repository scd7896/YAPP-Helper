import styled from "styled-components";

export const SelectDiv = styled.div`
  width: 257px;
  border-radius: 4px;
  border: solid 1px var(--gray2);
  ${({ selected }) => selected && "border-color: var(--helperblue)"};
  overflow: hidden;

  // 폰트
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  transition: border-color 0.5s;

  &:hover {
    border-color: var(--helperblue);
  }
`;
export const SelectItemListUl = styled.ul`
  margin: 0;
  padding: 0;
  height: 240px;
  overflow-y: auto;
  list-style: none;
  display: ${({ isShow }) => (isShow ? "block" : "none")};

  &::-webkit-scrollbar {
    width: 6px;
    background-color: none;
  }

  &::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 3px;
    background-color: rgba(var(--gray6), 0.6);
  }
`;

export const SelectItemLi = styled.li`
  padding: 10px 12px;
  cursor: pointer;
  &:hover {
    background-color: var(--lightblue2);
    color: var(--helperblue);
  }
`;

export const SelectItemSelectedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  color: ${({ selected }) => (selected ? "var(--gray6)" : "var(--gray4)")};
  cursor: pointer;
  transition: color 0.5s;
`;

export const SelectDropDownIcon = styled.div`
  margin-left: 1rem;
  display: inline-block;
  svg {
    transition: transform 0.5s;
    transform: ${({ toggled }) => (toggled ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;
