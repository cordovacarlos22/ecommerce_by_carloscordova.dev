import LoadingSpinner from '@/components/LoadingSpinner'
import { CartContext } from '@/context/ShoppingCartContext'
import { userContext } from '@/context/UserContext'
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CheckOut = () => {
  const navigate = useNavigate()

  const { login, loading } = useContext(userContext)
  const {

    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotalPrice
  } = useContext(CartContext);

  useEffect(() => {


    if (!login) {
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  }, [login, navigate]);

  if (!login) {
    return (
      <aside className='flex justify-center items-center w-screen min-h-screen'>
        <h1 className='capitalize'>
          Please login to Check Out
        </h1>
      </aside>
    );
  }

  return (
    <>
      {loading ? (
        <>
        <LoadingSpinner/>
      </>) : (
          <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Shopping Cart
              </h2>
              <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                  <div className="space-y-6">
                    {/* Items */}
                    {cartItems.length > 0 ? (<>
                      {cartItems.map((item) => (
                        <section key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                            <Link to={`/product/${item.id}`} className="shrink-0 md:order-1">
                              <img
                                className="h-20 w-20"
                                src={item.image}
                                alt={item.product_name}
                              />
                            </Link>
                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                              <div className="flex items-center">
                                {/* Decrement button */}
                                <button
                                  type="button"
                                  onClick={() => decrementQuantity(item.id)}
                                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                >
                                  <svg
                                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 2"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M1 1h16"
                                    />
                                  </svg>
                                </button>
                                {/* Quantity input */}
                                <input
                                  type="text"
                                  id="counter-input"
                                  data-input-counter=""
                                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                  value={item.quantity}
                                  readOnly
                                />
                                {/* Increment button */}
                                <button
                                  type="button"
                                  onClick={() => incrementQuantity(item.id)}
                                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                >
                                  <svg
                                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 1v16M1 9h16"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <div className="text-end md:order-4 md:w-32">
                                <p className="text-base font-bold text-gray-900 dark:text-white">
                                  ${item.price}
                                </p>
                              </div>
                            </div>
                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                              {/* Item title */}
                              <p className="text-base font-medium text-gray-900 dark:text-white">
                                {item.product_name}
                              </p>
                              <div className="flex items-center gap-4">
                                <button
                                  type="button"
                                  className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <svg
                                    className="me-1.5 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M6 18 17.94 6M18 18 6.06 6"
                                    />
                                  </svg>
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </section>
                      ))}
                    </>
                    ) :
                      (
                        <>
                          <h1>no items in your cart</h1>
                          <span>please add items</span>
                        </>)}
                  </div>
                </div>
                <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                  <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      Order summary
                    </p>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {/* Summary of prices */}
                        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                          <dt className="text-base font-bold text-gray-900 dark:text-white">
                            Total
                          </dt>
                          <dd className="text-base font-bold text-gray-900 dark:text-white">
                            ${getTotalPrice()}
                          </dd>
                        </dl>
                      </div>
                    </div>
                    {/* check out bnt */}
                    <Link
                      to="#"
                      className="flex bg-blue-500 hover:bg-blue-800 w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Proceed to Checkout
                    </Link>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {" "}
                        or{" "}
                      </span>
                      <Link
                        to="/"

                        className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                      >
                        Continue Shopping
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
      )}
    </>
  )
}

export default CheckOut