import Login from "../Component/login/login.component";
import SignIn from "../Component/sign-in/sigin-in.component";
import { useState } from "react";
const AuthPage=()=>{
    const defaultState=false;
    const [logInOrSignIn, setLogInOrSignUp]=useState(false)
    return(
        <>
        <Login/>
        <SignIn/>
        </>
    )
}

export default AuthPage;