import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products,setProducts] =useState(first10);
  const [cart,setCart] = useState([]);

  
  const handleAdProduct = (pdt) => {
    console.log("product added",pdt);
    const newCart = [...cart,pdt]
    setCart(newCart)
  }

  return (
    <div className='shop-container'>

      <div className="product-container">
      
      {
        products.map(pd=>
          <Product 
          key={pd.key} 
          handleAdProduct={handleAdProduct}
          pdt={pd}>

          </Product>
          
        )
      }
      
      
      </div>
      <div className="cart-container">
        <Cart cart = {cart}></Cart>
      </div>
      
    </div>
  );
};

export default Shop;