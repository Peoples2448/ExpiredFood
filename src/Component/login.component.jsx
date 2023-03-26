import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(1)
        if(email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => console.log("Login success"))
            .catch((err) => console.log(err))
        }
    }

    return (
        <div>
            <h1>User Login</h1>
            <form>
                <label>Email</label>
                <input type='email' onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input label="Password" type='password' onChange={(e) => setPassword(e.target.value)}/>
                <button className="submit-button" type="submit" onClick={handleLogin}>Submit</button>
            </form>
        </div>
    )
}

export default Login;