import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent=()=>{
    const product=useSelector((state)=>state.allProducts.products)
    //const {id,title}=product[0];
    const productList=product.map((items)=>{
        return(
            <div className="four wide column" key={items.id}>
                <Link to={`/product/${items.id}`}>
                <div className="ui link cards">
                  <div className="card" >
                      <div className="image">
                         <img src={items.image} alt={items.title}/>
                      </div>
                      <div className="content">
                          <div className="header">
                            {items.title}
                          </div>
                          <div className="meta price">
                              {items.price}
                          </div>
                          <div className="meta">{items.category}</div>
                      </div>
                  </div>
                 
                </div>
                </Link>
            </div>
        )
    });
    return <> {productList}</>
    
   
}
export default ProductComponent;