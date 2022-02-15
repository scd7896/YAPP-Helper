import * as React from "react";
import { useHistory } from "react-router-dom";
import GoogleLoginComponent, { GoogleLoginResponse } from "react-google-login";
import request from "utils/request";
import { setCookie } from "utils/cookie";

const GoogleLogin = () => {
  const history = useHistory();
  const errorCallback = () => {
    alert("구글 오류");
  };
  const successCallback = (response: GoogleLoginResponse) => {
    request
      .post("/api/login", {
        body: { accessToken: response.accessToken },
      })
      .then((res) => {
        setCookie("token", res.data.token, 1);

        history.push("/select");
      })
      .catch(() => {
        alert("로그인 실패");
      });
  };
  const autoLoadFinishCallback = () => null;
  return (
    <div>
      <GoogleLoginComponent
        onFailure={errorCallback}
        onSuccess={successCallback}
        onAutoLoadFinished={autoLoadFinishCallback}
        clientId="229956339445-l8g17q7qnlt18rssl4nuvo8k6kvdb91o.apps.googleusercontent.com"
        buttonText="Google 계정으로 로그인"
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default GoogleLogin;
