import './product.styles.css';
const Product=({ id, name, price, date, provider })=>{
    console.log(name)
    return(
        
        <div className="product-container">

            <div>
                <p>{`Product Name: ${name}`}</p>
                <p>{`Price: ${price}$`}</p>
                <p>{`Expiration: ${date}`}</p>
                <p>{`Provider: ${provider}`}</p>
            </div>
        </div>
    )
}

export default Product;