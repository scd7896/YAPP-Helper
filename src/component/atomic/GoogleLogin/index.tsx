import * as React from "react";
import { useHistory } from "react-router-dom";
import GoogleLoginComponent, { GoogleLoginResponse } from "react-google-login";
import request from "utils/request";
import { setCookie } from "utils/cookie";
const GoogleLogin = () => {
  const history = useHistory();
  const errorCallback = (response: any) => {};
  const successCallback = (response: GoogleLoginResponse) => {
    request
      .post("/api/login", {
        body: { email: response.profileObj.email },
      })
      .then((res) => {
        setCookie("token", res.data.token, 1);

        history.push("/select");
      })
      .catch((err) => {
        console.log("err", err);
        alert("로그인 실패");
      });
  };
  const autoLoadFinishCallback = (sucessLogin: boolean) => {};
  return (
    <div>
      <GoogleLoginComponent
        onFailure={errorCallback}
        onSuccess={successCallback}
        onAutoLoadFinished={autoLoadFinishCallback}
        clientId="510248414048-v223biqb5or2vuu3uf431aeqlj1n19i1.apps.googleusercontent.com"
        buttonText="Google 계정으로 로그인"
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default GoogleLogin;
