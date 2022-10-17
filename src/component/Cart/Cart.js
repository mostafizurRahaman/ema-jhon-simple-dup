import React from 'react';
import './Cart.css'; 
const Cart = ({cart, clearAll, children}) => {
   let total = 0; 
   let shipping = 0; 
   let quantity = 0; 
   for(const product of cart){
      quantity = quantity + product.quantity;  
      total = total + product.price * product.quantity;
      shipping = shipping + product.shipping;
   }
   let tax =parseFloat((total * 0.1).toFixed(3));
   const grandTotal = total + shipping + tax; 
   return (
      <div className='cart'>
         <h2>Order Summery</h2>
         <p>Added Prdouct: {quantity}</p>
         <p>Total: ${total}</p>
         <p>Shipping: ${shipping}</p>
         <p>Tax : ${tax}</p>
         <h5>Grand Total: ${grandTotal}</h5>
         {/* <button className='clearAll' onClick={clearAll}>Clear Cart</button> */}
         {children}
      </div>
   );
};

export default Cart;