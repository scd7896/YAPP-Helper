import * as React from 'react';
import GoogleLoginComponent, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
const GoogleLogin = () => {
	const errorCallback = (response: any) => {

	}
	const successCallback = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
		console.log(response);
	}
	const autoLoadFinishCallback = (sucessLogin: boolean) => {

	}
	return (
		<div>
			<GoogleLoginComponent
				onFailure={errorCallback}
				onSuccess={successCallback}
				onAutoLoadFinished={autoLoadFinishCallback}
				clientId='510248414048-v223biqb5or2vuu3uf431aeqlj1n19i1.apps.googleusercontent.com'
				buttonText="구글로그인"
				cookiePolicy='single_host_origin' />
		</div>
	)
}

export default GoogleLogin;