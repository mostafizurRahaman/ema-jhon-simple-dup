import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
   const products = useLoaderData(); 
   const [cart , setCart] = useState([]); 

   const clearAll = () => {
      setCart([]); 
      deleteShoppingCart(); 
   }
  useEffect(()=>{
      const storedCart = getStoredCart(); 
      const cartedProduct = [];
      for(const id in storedCart){
         const addProduct  = products.find(product => product.id === id);
         if(addProduct){
            const quantity = storedCart[id];
            addProduct.quantity = quantity; 
            cartedProduct.push(addProduct);
         }
      }
      setCart(cartedProduct);
  }, [products])
   const productHandler = SelectedProduct => {
      let newCart; 
      const exits = cart.find(product => product.id === SelectedProduct.id);
      if(!exits){
         SelectedProduct.quantity = 1; 
         newCart = [...cart, SelectedProduct];
      }else{
         const rest = cart.filter(product => product.id !== exits.id);
         exits.quantity = exits.quantity + 1;
         newCart = [...rest, exits];
      }
         // const newCart = [...cart, SelectedProduct]; 
         setCart(newCart); 
         addToDb(SelectedProduct.id);         
   }
   return (
      <div className="shop-container">
         <div className="products-container">
            {products.map((product) => (
               <Product product={product} key={product.id} productHandler={productHandler} ></Product>
            ))}
         </div>
         <div className="cart-container">
               <Cart cart={cart} clearAll={clearAll}>
                     <button>
                        <Link to='/orders'>Review Items</Link>
                     </button>
               </Cart>
          </div>             
         
      </div>
   );
};

export default Shop;
