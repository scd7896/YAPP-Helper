import * as React from "react";
import GoogleLogin from "atomic/GoogleLogin";

import { IndexDiv, HelperTextLogoSpan, GoogleLoginTitleSpan } from "./Index.styles";

const Index = () => {
  return (
    <IndexDiv>
      <HelperTextLogoSpan>YAPP Helper</HelperTextLogoSpan>
      <GoogleLoginTitleSpan>로그인하세요</GoogleLoginTitleSpan>
      <GoogleLogin />
    </IndexDiv>
  );
};

export default Index;
