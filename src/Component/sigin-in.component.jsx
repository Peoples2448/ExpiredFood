import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Config/firebase"
import React, { useState } from "react";
<<<<<<< HEAD
import { doc, setDoc, addDoc, getDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
=======
import { doc, setDoc, addDoc } from "@firebase/firestore";


>>>>>>> alerts
const SignUp = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [store, setStore] = useState(false)
    const [visible, setVisible] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password)
                await updateProfile(res.user, {
                    username,
                    store,
                })
                await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    username,
                    email,
                    store,
                })

                if(!store){
                    navigate("/products")
                }else{
                    navigate("/storeInterface")
                }



            } catch(err) {
                console.log(err)
                setVisible(true)
            }
        } else {
            setVisible(true)
        }
    }

    const handleCheck = () => {
        setStore(!store);
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form >
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <label>Username</label>
                <input type='text'  onChange={(e) => setUsername(e.target.value)} />
                <label>Password</label>
                <input label="Password"  type='password' onChange={(e) => setPassword(e.target.value)} />
                <label>Confirm Password</label>
                <input label="Password"  type='password' onChange={(e) => setPassword2(e.target.value)} />
                <label>Sign Up as a Store?</label><br />
                <input type="checkbox" onChange={handleCheck}/>
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
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

export default SignUp;