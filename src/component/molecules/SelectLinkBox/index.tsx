import * as React from "react";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import { LinkBlock, SmallIconWrapper } from "atomic";

interface SelectLinkBoxProp {
  to: string;
  title: string;
  icon?: React.ReactElement;
}

const cx = classNames.bind(styles);
const SelectLinkBox = ({ to, title, icon }: SelectLinkBoxProp) => {
  return (
    <LinkBlock to={to}>
      <SmallIconWrapper width={48} height={48}>
        {icon ? icon : ""}
      </SmallIconWrapper>
      <p className={cx("link-box-title")}>{title}</p>
    </LinkBlock>
  );
};

export default SelectLinkBox;
