import React, { useContext } from 'react';
import './Product.css';
import { ShopContext } from '../context/Shopcontext';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const {id, productname , price, productimage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const Navigate  = useNavigate() ;

    const cartItemCount = cartItems[id];
  return (
    <div className="productmaincart">
        <img src={productimage} alt={productimage}></img>
      <p>{productname}</p>
      <p>${price}</p>
      {/* <button className='addtocart' onClick={()=>addToCart()}>Add To Cart</button> */}
      <button className='addtocart' 
       onClick={() => {addToCart(id); 
        // Navigate("/Cartpage")
      }}
       >Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
    </div>
  )
}

export default Product
