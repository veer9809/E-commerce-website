import React from 'react'
import Navbar from '../component/Navbar'
import { PRODUCTS } from '../Product'
import Product from './Product';
import './Homepage.css'

function Homepage() {
  return (
    // <div className='mainhomepage'>
    //     <Navbar/>
    //   <h1>Pedrotech shop</h1>
    //   <div className="products-container">
    //     {PRODUCTS.map((product)=>(<Product data={product}/>))}
    //   </div>
    // </div>
    <div className="mainhomepage">
    <Navbar />
    <h1>Pedrotech shop</h1>
    <div className="products-container">
      {PRODUCTS.map((product) => (
        <Product data={product} key={product.id} />
      ))}
    </div>
  </div>
  )
}

export default Homepage
