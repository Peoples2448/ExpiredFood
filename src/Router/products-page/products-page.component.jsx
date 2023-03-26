import Product from "../../Component/product/product.component";
import { useEffect, useState } from "react";
import './products-page.styles.css';
const ProductsPage = () => {

    return (
        <Product id={12} name={'banana'} price={12} date={'march'} provider={'walmart'} />
    )

}


export default ProductsPage;