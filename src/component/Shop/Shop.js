import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
   addToDb,
   deleteShoppingCart,
   getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
   // const { products, count } = useLoaderData();
   const [products, setProducts] = useState([]);
   const [count, setCount] = useState(0);
   const [cart, setCart] = useState([]);
   const [page, setPage] = useState(0);
   const [size, setSize] = useState(10);
   const pages = Math.ceil(count / size);

   useEffect(() => {
      const url = `http://localhost:5000/products?page=${page}&size=${size}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setProducts(data.products);
            setCount(data.count);
         });
   }, [page, size]);

   const clearAll = () => {
      setCart([]);
      deleteShoppingCart();
   };
   useEffect(() => {
      const storedCart = getStoredCart();
      const ids = Object.keys(storedCart);
      console.log(ids);
      fetch("http://localhost:5000/productsbyids", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(ids),
      })
         .then((res) => res.json())
         .then((data) => {
            const cartedProduct = [];
            for (const id in storedCart) {
               const addProduct = data.find(
                  (product) => product._id === id
               );
               if (addProduct) {
                  const quantity = storedCart[id];
                  addProduct.quantity = quantity;
                  cartedProduct.push(addProduct);
               }
            }
            setCart(cartedProduct);
         })
         .catch((err) => console.log(err));
   }, []);

   const productHandler = (SelectedProduct) => {
      let newCart;
      const exits = cart.find((product) => product._id === SelectedProduct._id);
      if (!exits) {
         SelectedProduct.quantity = 1;
         newCart = [...cart, SelectedProduct];
      } else {
         const rest = cart.filter((product) => product._id !== exits._id);
         exits.quantity = exits.quantity + 1;
         newCart = [...rest, exits];
      }
      // const newCart = [...cart, SelectedProduct];
      setCart(newCart);
      addToDb(SelectedProduct._id);
   };
   return (
      <div className="shop-container">
         <div className="products-container">
            {products.map((product) => (
               <Product
                  product={product}
                  key={product._id}
                  productHandler={productHandler}
               ></Product>
            ))}
         </div>
         <div className="cart-container">
            <Cart cart={cart} clearAll={clearAll}>
               <button>
                  <Link to="/orders">Review Items</Link>
               </button>
            </Cart>
         </div>
         <div className="pagination-container">
            <h5>
               <span>current Page : {page} </span>{" "}
               <span> products show: {size}</span>
            </h5>
            {
               <div className="pagination ">
                  {[...Array(pages).keys()].map((number) => (
                     <button
                        key={number}
                        className={`${page === number && "active"}`}
                        onClick={() => setPage(number)}
                     >
                        {number}
                     </button>
                  ))}

                  <select
                     className="selection"
                     onChange={(event) => setSize(event.target.value)}
                  >
                     <option value="5" >5</option>
                     <option value="10" selected>10</option>
                     <option value="15">15</option>
                     <option value="20">20</option>
                     <option value="30">30</option>
                  </select>
               </div>
            }
         </div>
      </div>
   );
};

export default Shop;
