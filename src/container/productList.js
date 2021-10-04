import React,{useEffect} from "react";
import axios from "axios"
import { setProduct } from "../redux/actions/product_action";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./productComponent";


const ProductListing=()=>{
    const products=useSelector((state)=>state)
    const dispatch=useDispatch();

    const fetchProduct=async()=>{
        const res=await axios
.get("https://fakestoreapi.com/products")
.catch((err)=>{
    console.log(err);
});
dispatch(setProduct(res.data))
}


    useEffect(()=>{
        fetchProduct();
    },{});
    
    return(
        <div className="ui grid container">
 <ProductComponent/>
        </div>
    )
}
export default ProductListing;