import React, { useContext } from 'react'
import shoppinCartIcon from './../assets/cart-plus.svg'
import { userContext } from '@/context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '@/context/ShoppingCartContext';


function ShoppingCart({ className, imgWidth, product }) {

  const { addToCart } = useContext(CartContext);
  
  const navigate = useNavigate()

  const { token } = useContext(userContext)

  const handleCart = () => {
    if (!token) {
      toast.warning('Please login ', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate('/login')
      }, 3000)
      return;  // prevent adding items to cart when not logged in  //* replace alert with toast notification in production code  //* implement authentication or login functionality when not logged in
    } else {

    
      toast.success('Item has been added', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });

      // Add the item to the cart here
      addToCart(product) // product comes from Cart component props

    }
  }
  return (
    <>
      <button

        className={className}
        onClick={handleCart}
      >
        <img

          width={imgWidth}
          src={shoppinCartIcon}
          alt="Shopping cart icon" />
        Add to Cart
      </button>

    </>
  )
}

export default ShoppingCart