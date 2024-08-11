import React from 'react'
import shoppinCartIcon from './../assets/cart-plus.svg'
function ShoppingCart({ className, imgWidth }) {
  return (
    <button
      className={className}
    >
      <img

        width={imgWidth}
        src={shoppinCartIcon}
        alt="Shopping cart icon" />
      Add to Cart
    </button>
  )
}

export default ShoppingCart