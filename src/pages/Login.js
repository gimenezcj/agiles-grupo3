import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'

function Login(){
    const onSucces = (res) =>{
        console.log('[Login Success] currentUser: ', res.profileObj)
    }

    const onFailure = (res) =>{
        console.log('[Login failed] res: ', res)
    }

    return(
        <div>
            <GoogleLogin 
             clientId={clientId}
             buttonText="Login"
             onSuccess={onSucces}
             onFailure={onFailure}
             cookiePolicy={'single_host_origin'}
             style={{marginTop: '100px'}}
             isSignedIn={true}
            />
        </div>
    )
}

export default Login;
