import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'; 
const Header = () => {
   return (
      <div className='header'>
         <div className='header-navbar'>
            <nav>
               <img src={logo} alt="" />
            </nav>
            <div>
               <a href="/shop">Shop</a>
               <a href="/orders">Orders</a>
               <a href="/inventory">Inventory</a>
               <a href="/about">About</a>
            </div>
         </div>
      </div>
   );
};

export default Header;