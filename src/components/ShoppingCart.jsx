import React, { useContext } from 'react'
import shoppinCartIcon from './../assets/cart-plus.svg'
import { userContext } from '@/context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ShoppingCart({ className, imgWidth }) {

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

      // TODO : logic to handle cart 


    }
  }
  return (
    <>
      <Link

        className={className}
        onClick={handleCart}
      >
        <img

          width={imgWidth}
          src={shoppinCartIcon}
          alt="Shopping cart icon" />
        Add to Cart
      </Link>

    </>
  )
}

export default ShoppingCart