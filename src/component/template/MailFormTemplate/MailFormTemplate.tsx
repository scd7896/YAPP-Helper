import * as React from "react";
import { FC } from "react";
import SelectLayout from "../SelectLayout/SelectLayout";

interface IProp {
  children: React.ReactElement[] | React.ReactElement;
}
const MailFormTemplate: FC<IProp> = ({ children }) => {
  return (
    <SelectLayout>
      <main>{children}</main>
    </SelectLayout>
  );
};

export default MailFormTemplate;
