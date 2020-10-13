import * as React from "react";

import { LeftNav } from "organisms";
import classNames from "classnames/bind";
import styles from "./styles.scss";

interface SelectLayoutProps {
  children: React.ReactElement[] | React.ReactElement;
}
const cx = classNames.bind(styles);
const SelectLayout = ({ children }: SelectLayoutProps) => {
  return (
    <section className={cx("select-layout-wrapper")}>
      <LeftNav />
      <main className={cx("select-right-wrapper")}>{children}</main>
    </section>
  );
};

export default SelectLayout;
