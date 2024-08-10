import { ProductsContext } from '@/context/useProductsContext'
import React, { useContext } from 'react'
import Card from '@/components/Card';
import SkeletonCard from '@/components/SkeletonCard';
const Home = () => {
  const productsArray = useContext(ProductsContext);

  const filterProducts = productsArray.products.filter((product) => {
    return product.product_name.toLowerCase().includes(productsArray.searchTerm.toLowerCase());
  });
  // Dynamically create an array with 10 items (or any number you want)
  const skeletons = Array.from({ length: 52 });

  return (
    <main className='flex  flex-wrap justify-center   items-center w-scree gap-2'>
      {
        productsArray.loading ?
          (
            <article className='flex flex-wrap justify-center items-center w-full gap-2'>
              {skeletons.map((_, index) => (
                <SkeletonCard key={index} />
              ))}
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
                          key={item.product_name}
                          url={item.url}
                          image={item.image}
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
    </main>
  )
};

export default Home