import { CertifiCate } from "@prisma/client";
import * as React from "react";
import { WrapperDiv, ContentsWrapperDiv, BackgroundImage } from "./RenderCertificate.styles";

interface IProp {
  certificate: CertifiCate;
}

export default function RenderCertificate({ certificate }: IProp) {
  return (
    <WrapperDiv>
      <ContentsWrapperDiv dangerouslySetInnerHTML={{ __html: certificate.contents }} />
      <BackgroundImage src={`/${certificate.backgroundImage}`} />
    </WrapperDiv>
  );
}
