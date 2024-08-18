/* The code snippet you provided is importing various modules and components in a JavaScript React
file. Here's a breakdown of each import statement: */
import { ProductsContext } from '@/context/useProductsContext'
import React, { useContext } from 'react'
import Card from '@/components/Card';
import SkeletonCard from '@/components/SkeletonCard';
import LoadingSpinner from '@/components/LoadingSpinner';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* The `Home` component in the provided code snippet is a functional component in a JavaScript React
file. Here's a breakdown of what it does: */
const Home = () => {
  const productsArray = useContext(ProductsContext);

  const filterProducts = productsArray.products.filter((product) => {
    return product.product_name.toLowerCase().includes(productsArray.searchTerm.toLowerCase());
  });
  // Dynamically create an array with 52 items (or any number you want)
  const skeletons = Array.from({ length: 52 });

  return (
    /* This block of code in the `Home` component is responsible for rendering different content
      based on the state of `productsArray.loading`. Here's a breakdown of what it does: */
    <main className='flex  flex-wrap justify-center   items-center w-screen min-h-screen gap-2'>
      
      {
        productsArray.loading ?
          (
            <article className='relative w-screen'>
              <LoadingSpinner />
              <article className='flex flex-wrap justify-center items-center w-full gap-2'>
                {skeletons.map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </article>
            </article>
          ) :
          (<>
            {
              filterProducts && filterProducts.length > 0 ? (
                <>

                  {filterProducts && filterProducts.map((item) => {
                    return (

                      <article className='flex flex-wrap justify-center items-center   gap-2' key={item.product_name}>
                        <Card
                          key={item.id}
                          id={item.id}
                          url={item.url}
                          image={item.image[0]}
                          product_name={item.product_name}
                        />
                      </article>
                    )
                  })
                  }
                </>
              ) : (
                <>
                  <h1>
                    No products found. Please enter a product name in the search bar.
                  </h1>
                </>
              )
            }
          </>
          )

      }
      <ToastContainer />
    </main>
  )
};

export default Home