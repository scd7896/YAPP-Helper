import * as React from "react";
import { useMemo } from "react";

import { FolderIcon, SendIcon, PencilIcon } from "atomic/Icon";

interface IProp {
  isSelect?: boolean;
  icon: "pencil" | "send" | "folder";
}

const IconSelector: React.FC<IProp> = ({ isSelect, icon }) => {
  const Icon = useMemo(() => {
    switch (icon) {
      case "pencil":
        return PencilIcon;
      case "folder":
        return FolderIcon;
      case "send":
        return SendIcon;
    }
  }, [icon]);
  return <Icon isSelect={isSelect} />;
};

export default IconSelector;
