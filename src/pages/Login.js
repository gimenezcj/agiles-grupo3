import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "79944232594-6koavdob3u7b0mha99nbu2c50u4rpopt.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    localStorage.setItem('usuario', res.profileObj);
   window.location.href = "/"
    console.log("[Login Success] currentUser: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
