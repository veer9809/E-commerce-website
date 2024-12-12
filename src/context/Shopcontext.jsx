import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Product';
import { useNavigate } from 'react-router-dom';

export const  ShopContext = createContext(null);

export const ShopContextProvider = (props) => {


    const getDefault = () => {
        let cart = {};
        for (let i = 1;i < PRODUCTS.length + 1; i++) {
            cart[i] = 0;
        }  
      return cart;
    }



    const [cartItems ,setCartItem]  = useState(getDefault());

    const addToCart = (itemid) => {
        setCartItem ((prev)=>({...prev, [itemid] : prev[itemid]+1}));
        console.log(cartItems);
    }
    const updateCartItemCount = (newAmount, itemId) => {
      setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
    };
  
    const checkout = () => {
      setCartItem(getDefault());
    };

    const contextValue = {
      cartItems,
      addToCart,
      updateCartItemCount,
      checkout,
     
    };

  return <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
};