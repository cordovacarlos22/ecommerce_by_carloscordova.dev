import React, { useContext } from 'react'
import shoppinCartIcon from './../assets/cart-plus.svg'
import { userContext } from '@/context/UserContext'
import { Link } from 'react-router-dom'
function ShoppingCart({ className, imgWidth }) {

  const { token } = useContext(userContext)
  
  const handleCart = () => {
    if (!token) {
      alert('Please login to add items to the cart')
    } else {
      alert('items added successfully')
      // navigate to cart page or login page if not logged in
    }
  }
  return (
    <Link 
      to={token? null:'/login'}
      className={className}
      onClick={handleCart}
    >
      <img

        width={imgWidth}
        src={shoppinCartIcon}
        alt="Shopping cart icon" />
      Add to Cart
    </Link>
  )
}

export default ShoppingCart