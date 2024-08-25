/* The code snippet you provided is importing various modules and components in a JavaScript React
file. Here's a breakdown of each import statement: */
import { ProductsContext } from '@/context/useProductsContext'
import React, { useContext, useState } from 'react'
import Card from '@/components/Card';
import SkeletonCard from '@/components/SkeletonCard';
import LoadingSpinner from '@/components/LoadingSpinner';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* The `Home` component in the provided code snippet is a functional component in a JavaScript React
file. Here's a breakdown of what it does: */
const Home = () => {
  const productsArray = useContext(ProductsContext);
  const [selectedCategory, setSelectedCategory] = useState(''); // New state for category



  const filterProducts = productsArray.products.filter((product) => {
    return (
      product.product_name.toLowerCase().includes(productsArray.searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory)
    );
  });

  // Dynamically create an array with 52 items (or any number you want)
  const skeletons = Array.from({ length: 52 });

  return (
    /* This block of code in the `Home` component is responsible for rendering different content
     based on the state of `productsArray.loading`. Here's a breakdown of what it does: */
    <>
      <section
        className=' m-2'>

        <label
          htmlFor="categoryFilter"
          className="block mb-2 text-sm capitalize font-medium  text-gray-900 text-center dark:text-white"
        >
          filter by category:
        </label>

        <select
          className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="categoryFilter"
          name="categoryFilter"
          value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option disabled value=''>Select category</option>
          <option value="appliances">Appliances</option>
          <option value="tv">TV's</option>
          <option value="computers">Computers</option>
          <option value="laptops">laptops</option>
          <option value="tablets">Tablets</option>
          <option value="cellphones">Cell Phones</option>
          <option value="audio">Audio</option>
          <option value="video games">Video Games</option>
          <option value=''>reset filter </option>
        </select>
      </section>

      <section className='flex  flex-wrap justify-center   items-center w-screen min-h-screen gap-2'>

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

                        <article className='flex flex-wrap justify-center items-center   gap-2 m-2.5' key={item.product_name}>
                          <Card
                            key={item.id}
                            id={item.id}
                            url={item.url}
                            image={item.image[0]}
                            product_name={item.product_name}
                            description={item.description}
                            price={item.price}
                            category={item.category}
                            brand={item.brand}
                          />
                        </article>
                      )
                    })
                    }
                  </>
                ) : (
                  <>
                    <h1>
                      No products found.
                    </h1>
                  </>
                )
              }
            </>
            )

        }
        <ToastContainer />
      </section>
    </>
  )
};

export default Home