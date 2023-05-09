import React from 'react';
import logo from '../../images/logo ema.png'
import './Header.css'


const Header = () => {
  return (

      <div className='header'>
        <div className='logoHead'>
        <img src={logo }alt="" />
        </div>
        <nav><a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Inventory</a>
        </nav>
        
        </div>
     
  );
};

export default Header;