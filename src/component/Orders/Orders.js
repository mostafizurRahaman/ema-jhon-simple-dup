import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
   const { initialCart } = useLoaderData();
   const [cart, setCart] = useState(initialCart);
   const handleDelete = (id) => {
      const deletedProduct = cart.find((product) => product._id === id);
      if (deletedProduct) {
         const rest = cart.filter((product) => product._id !== id);
         setCart([...rest]);
         removeFromDb(id);
      }
   };

   const clearAll = () => {
      setCart([]);
      deleteShoppingCart();
   };
   return (
      <div className="shop-container">
         <div className="orders-container">
            {cart.map((product) => (
               <ReviewItem
                  product={product}
                  key={product._id}
                  handleDelete={handleDelete}
               ></ReviewItem>
            ))}
            {cart.length <= 0 && <h1>No Item Has been Available</h1>}
         </div>
         <div className="cart-container">
            <Cart cart={cart} clearAll={clearAll}>
               <button className="helping-button">
                  <Link to="/pay-now">pay now</Link>
               </button>
            </Cart>
         </div>
      </div>
   );
};

export default Orders;
