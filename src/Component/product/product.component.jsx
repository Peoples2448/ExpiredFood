import './product.styles.css';
const Product=({product})=>{
    // console.log(product)
    return(
        
        <div className="product-container">
            <img src={product.url}/>
            <div>
                <p>{`Product Name: ${product.title}`}</p>
                <p>{`Price: ${product.albumId}$`}</p>
                <p>{`Provider: ${product.title}`}</p>
            </div>
        </div>
    )
}

export default Product;