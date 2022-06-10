import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 

import { saveProduct } from "../../State/Product/ProductActions";
import DisplayProduct from "./DisplayProducts";

let Product = (props)=>{
    let defaultProduct = useSelector((state)=>state.productReducer.defaultProduct); //mapStateToProps

    let dispatchToSave = useDispatch();

    //creating states for product component by using default value
    let [name, setName] = useState(defaultProduct.name);
    let [price, setPrice] = useState(defaultProduct.price);
    let [desc, setDescription] = useState(defaultProduct.desc);
    let [rating, setRating] = useState(defaultProduct.rating);

    let saveProductClick = (evt)=>{
        let productToBeSaved = {name, price, desc, rating} ;//this makes a product object

        //alert("Save Product will be implemented here!! "+ JSON.stringify(productToBeSaved));
        dispatchToSave(saveProduct(productToBeSaved))
        evt.preventDefault();
    }

    return(
        <>
            <h1>Product Component</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                            onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6" value={price} 
                          placeholder="Product Price"
                          onChange={(evt)=>setPrice(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description </b>
                    <input type="text" className="form-control col-md-6" value={desc} 
                          placeholder="Please Describe the product"
                          onChange={(evt)=>setDescription(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Ratings </b>
                    <input type="text" className="form-control col-md-6" value={rating} 
                          placeholder="Ratings"
                          onChange={(evt)=>setRating(evt.target.value)} />
                    </div>

                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Product"} 
                        onClick={saveProductClick}/>
                </div>
            </section>
            <hr/>
            <div className={"col-md-10"}>
                <DisplayProduct />
            </div>
        </>
    )
}

export default Product;