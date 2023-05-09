import React from "react";
import "./Product.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




const Product = (props) => {
   //console.log(props);
  const { img, name, seller, price, stock } = props.pdt;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only{stock}left in stock - order soon </small>
        </p>
        <button onClick={()=>props.handleAdProduct(props.pdt)} className="main-btn"><FontAwesomeIcon icon={faCartShopping} />add to cart</button>
      </div>
    </div>
  );
};

export default Product;
