/* The code snippet you provided is importing necessary modules and components for the React
application: */
import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import rightArrowIcon from './../assets/right-arrow.svg'
/* The `Card` component in the provided code snippet is a functional component in a React application.
It takes in three props: `id`, `image`, and `product_name`. */
const Card = ({ id, image, product_name, description, price, category, brand }) => {

  //? product props for shopping cart BTN (getting them from home page)
  const product = {id, image, product_name, description, price, category, brand} 
  return (
    /* The `<div>` element with the provided structure in the `Card` component is responsible for
    rendering a card-like layout for displaying product information. Here's a breakdown of what each
    part of the structure is doing: */
    <div key={product_name} className="w-[470px] h-[470px] flex flex-col justify-center p-2 items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <Link to={`product/${id}`}>
        <img  className="rounded-t-lg" src={image} alt={product_name} />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          {product_name}
        </h5>
        <aside className='flex flex-col md:flex-row justify-center text-center items-center gap-4'>

          <ShoppingCart
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            imgWidth="26"
            product={product}
          />
          <Link
            to={`product/${id}`}
            className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            More Details
            {/* //! need arrow svg element */}
            <img
              width={26}

              src={rightArrowIcon} alt="right arrow icon" />
          </Link>
        </aside>
      </div>
    </div>
  )
};

export default Card