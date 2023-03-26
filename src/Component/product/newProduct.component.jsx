import { useState } from "react";

const NewProduct = ({ handleNewProduct }) => {

    const[name, setName] = useState('')
    const[price, setPrice] = useState('')
    const[date, setDate] = useState('')
    const[provider, setProvider] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handlePrice = (event) => {
        setPrice(event.target.value)
    }
    const handleDate = (event) => {
        setDate(event.target.value)
    }
    const handleProvider = (event) => {
        setProvider(event.target.value)
    }

    return (

        <div className="product-container">
            <div>
                <textarea
                    placeholder="name"
                    value={name}
                    onChange={handleName}
                > </textarea>
                <textarea
                    placeholder="price"
                    value={price}
                    onChange={handlePrice}
                > </textarea>
                <textarea
                    placeholder="date"
                    value={date}
                    onChange={handleDate}
                > </textarea>
                <textarea
                    placeholder="provider"
                    value={provider}
                    onChange={handleProvider}
                > </textarea>
                <button onClick={handleNewProduct}> Create Posting </button>
            </div>
        </div>
    )
}

export default NewProduct;