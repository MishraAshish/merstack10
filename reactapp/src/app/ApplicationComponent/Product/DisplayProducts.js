import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../State/Product/ProductActions";

let DisplayProduct = (props)=>{
    let dispatchToFetch = useDispatch();

    let productList = useSelector((state)=>state.productReducer.products)

    useEffect(()=>{        
        dispatchToFetch(fetchProducts())
    },[])

    console.log("productList ", productList)
    return(
        <>
            <h1>We'll display product here!!</h1>

            {productList && productList.length>0 ?
             productList.map(product=>{
                 return <b>{product.name}</b>
             }):
             "No Product Found!!"
             }
        </>
    )
}


export default DisplayProduct;