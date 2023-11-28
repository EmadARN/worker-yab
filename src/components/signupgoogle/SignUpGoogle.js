import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwt from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';

function GoogleOAuth (){

    return(

        <>
            <GoogleOAuthProvider clientId="13932324761-27uql6f2ovrelnc7pnsehfqtk0b85188.apps.googleusercontent.com">

                <GoogleLogin

                    onSuccess={credentialResponse => {
                        console.log(jwt(

                            credentialResponse.credential


                        ));
                    }}

                    onError={() => {
                        console.log('Login Failed');
                    }}

                />
            </GoogleOAuthProvider>
        </>
    )



}

export default GoogleOAuth;