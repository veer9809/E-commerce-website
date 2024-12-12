import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to='/'>homepage</Link>
      <Link to='/Cartpage'>Cartpage</Link>
    </div>
  )
}

export default Navbar
