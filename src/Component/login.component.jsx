import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Config/firebase"
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [visible, setVisible] = useState(false)

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
            .catch(setVisible(true))
        } else {
            setVisible(true)
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
                {visible ? <Alert /> : null}
            </form>
        </div>
    )
}

const Alert = () => (
    <div id="alert">
        email or password invalid
    </div>
)

export default Login;