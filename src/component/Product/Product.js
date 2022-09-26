import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'; 
const Product = (props) => {
  
   const {productHandler, product} = props; 
   const {img, name, seller, ratings, price} = product;
   // console.log(props.product); 
   return (
      <div className='product'>
     <div className='product-img-wrapper'>
         <img src={img} alt="" />
     </div>
      <div className='product-info'>
         <p className='product-name'>{name}</p>
         <p className='product-price'>Price: ${price}</p>
         <p className='seller-info'><small>Seller : {seller}</small></p>
         <p className='ratings-info'><small>Ratings: {ratings} stars</small></p>
      </div>
      <button className='addToCartBtn' onClick={()=> productHandler(product)} ><p>add To cart</p> <FontAwesomeIcon className='cartIcon' icon={faShoppingCart} spin></FontAwesomeIcon></button>
      </div>
   );
};

export default Product;