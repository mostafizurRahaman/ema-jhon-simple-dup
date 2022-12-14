import { getStoredCart } from "../utilities/fakedb";


export const ProductAndCartLoader = async () => {
   //Get Products
   const res = await fetch("http://localhost:5000/products");
   const {products} = await res.json();
  
   // Get Saved Products
   const savedCart = getStoredCart();
   const initialCart = [];
   for (const id in savedCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
         const quantity = savedCart[id];
         addedProduct.quantity = quantity;
         initialCart.push(addedProduct);  
      }
   }

   console.log(products);

   return { products, initialCart };
};
