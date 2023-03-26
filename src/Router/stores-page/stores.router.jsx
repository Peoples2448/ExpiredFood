import { useState, useContext } from "react";
import {ref, uploadBytes} from "firebase/storage"
import { storage } from "../../Config/firebase";
import { UserContext } from "../../Context/user.context";

const Stores = () => {
    const {currentUser}=useContext(UserContext)
    const [img, setImg]=useState(null);
    const uploadHandler=(event)=>{
        setImg(event.target.files[0])
    }
    const submit=(e)=>{
        e.preventDefault();
        if (img==null) return   
        console.log(currentUser)
        const imgRef=ref(storage, `images/${currentUser.uid}/${img.name}`)
        uploadBytes(imgRef, img)
        .then(()=>{
            console.log(1)
        })
    }
    return (
        <div>
            <h1>Upload Button Example</h1>
            <form>
                <input type="file"  onChange={uploadHandler}/>
                <input type="submit" value="Upload File"  onClick={submit} />
            </form>
        </div>
    )
}

export default Stores;

