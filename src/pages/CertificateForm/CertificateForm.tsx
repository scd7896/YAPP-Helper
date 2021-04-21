import * as React from "react";
import { CertifiCateModel } from "@cmodel";
import SelectLayout from "template/SelectLayout/SelectLayout";

export default function CertificateForm() {
  React.useEffect(() => {
    CertifiCateModel.getFindByTitle("test");
  }, []);
  return (
    <SelectLayout>
      <div>test</div>
    </SelectLayout>
  );
}
