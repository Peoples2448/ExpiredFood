import Product from "../../Component/product/product.component";
import { useEffect, useState } from "react";
import './products-page.styles.css';
const ProductsPage = () => {
    const [mockProducts, setMockProducts]=useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setMockProducts(json))
    }, [])
    
    return (
        <div className="products-container">
            {mockProducts.filter((ele, index)=> index<20).map((product, idx)=> {
                    return <Product product={product} key={product.id}/>
            })}
        </div>
    )

}


export default ProductsPage;