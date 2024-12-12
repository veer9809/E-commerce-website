import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { PRODUCTS } from '../Product'
import Product from './Product';


const Cartpage = () => {
    const {cartItems} = useContext(ShopContext)
    console.log({cartItems})
  return (
    <div className='maincartpage'>
      cart item
        <div className='item'>
        {PRODUCTS.map((product)=>{
            if(cartItems[product.id] !== 0) {
                return <Product data={product} />
            }
        })}
      </div>
    </div>
  )
};

export default Cartpage
