import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product , handleDelete }) => {
   const { name, shipping, quantity, img, price , _id} = product;
   return (
      <div className="review-item">
         <img src={img} alt={name} />
         <div className="review-container">
            <div className="review-details-container">
               <h4>{name}</h4>
               <p>quantity:{quantity} </p>
               <p>Price : ${price}</p>
               <p>Shipping Charge:${shipping}</p>
            </div>
            <div className="delete-icon-container" onClick={()=> handleDelete(_id)}>
               <FontAwesomeIcon className="delete-icon" icon={faTrashCan}></FontAwesomeIcon>
            </div>
         </div>
      </div>
   );
};

export default ReviewItem;
