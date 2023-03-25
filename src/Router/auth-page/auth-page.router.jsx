import Login from "../../Component/login.component";
import SignUp from "../../Component/sigin-in.component";
import './auth-page.styles.css';
import { useState } from "react";
const AuthPage=()=>{
    const defaultState=false;
    const [logInOrSignIn, setLogInOrSignUp]=useState(false)
    const switchPageHandler=()=>{
        setLogInOrSignUp(!logInOrSignIn)
    }
    return(
        <div className="auth-page-container">
        <button className="switch-button"onClick={switchPageHandler}>{logInOrSignIn ? "Go To Log In ?":"Go To Sign Up ?"}</button>
        {logInOrSignIn ? <SignUp/>:<Login/>}
        </div>
    )
}

export default AuthPage;