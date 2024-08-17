import { ProductsContext } from '@/context/useProductsContext';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ProductDetail = () => {
  const productArray = useContext(ProductsContext);
  const { id } = useParams();

  const product = productArray.products.find((item) => item.id === id);

  console.log('Product:', product); // Debugging: log the product to verify its structure

  if (!product) return <div>Product not found</div>;

  return (
    <section className='flex mt-4 flex-col md:flex-row flex-wrap justify-center items-center w-screen min-h-screen'>
      <div className='flex justify-center items-center lg:mx-2 p-2'>
        <Carousel
          className='w-1/2 flex items-center justify-center lg:w-[550px]'
          orientation="horizontal"
        >
          <CarouselContent>
            {/* Iterate over product.image array */}
            {product.image && product.image.map((imgUrl, index) => (
              <CarouselItem key={index}>
                <img src={imgUrl} alt={`${product.product_name} image ${index + 1}`} className="w-full h-auto" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:m-6 gap-4">
        <span className='text-blue-500'>{product.brand}</span>
        <h1 className='font-bold md:text-2xl'>{product.product_name}</h1>
        <p className='md:text-3xl font-bold'>
        ${product.price}
        </p>
        <p className='font-light md:text-xl'>
          <span className='font-bold'>sku: </span>{product.sku}
        </p>
        <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
        <p
          className='mb-6 text-gray-500 dark:text-gray-400'
        >
          {product.description}
        </p>
       

        {product.isActive ? (
          <ShoppingCart
            className="text-white flex justify-center items-center bg-blue-700 font-bold rounded-md md:w-64 h-12 my-2 hover:bg-yellow-200"
            imgWidth="42"
          >
          </ShoppingCart>
        ) : (
          <p className="text-gray-500 text-sm">This product is currently unavailable.</p>
        )}
      </div>
    </section>
  );
}

export default ProductDetail;