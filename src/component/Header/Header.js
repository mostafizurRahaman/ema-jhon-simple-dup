import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'; 
const Header = () => {
   const {user, logOut} = useContext(AuthContext); 
   
   const handleLogOut = () => {
      logOut()
      .then(()=> {
         console.log('logout successful')
      })
      .catch(err => console.log(err)); 
   }
   return (
      <div className='header'>
         <div className='header-navbar'>
            <nav>
               <img src={logo} alt="" />
            </nav>
            <div>
               <NavLink to="/orders">Orders</NavLink>
               <NavLink to="/inventory">Inventory</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/shop">Shop</NavLink>
               <NavLink to="/register">Register</NavLink>
               <NavLink to="/login">login</NavLink>               
            </div>
            {
                user && <p className='text-white'>{user.email}</p>
            }
         {
            user && <button className='logoutButton' onClick={handleLogOut}>Log Out</button>
         }
         </div>
      </div>
   );
};

export default Header;