import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Config/firebase"
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        if(email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
            .then((users)=>getDoc(doc(db, "users", users.user.uid)))
            .then((doc)=>{
                console.log(doc.data().store)
                if(!doc.data().store){
                    navigate("/products")
                }else{
                    navigate("/storeInterface")
                }
            })
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