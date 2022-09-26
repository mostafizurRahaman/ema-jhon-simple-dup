import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
   const [products, setProducts] = useState([]);
   const [cart , setCart] = useState([]); 
   useEffect(() => {
      fetch("products.json")
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);
   const productHandler = product => {
         // console.log(product); 
         const newCart = [...cart, product]; 
         setCart(newCart); 
         // localStorage.setItem('cart', JSON.stringify(newCart));
   }
   return (
      <div className="shop-container">
         <div className="products-container">
            {products.map((product) => (
               <Product product={product} key={product.id} productHandler={productHandler} ></Product>
            ))}
         </div>
         <div>
            <h2>Order Summary: </h2>
            <p>Product added to cart: {cart.length}</p>
         </div>
      </div>
   );
};

export default Shop;
