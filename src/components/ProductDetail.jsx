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
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:m-6">
        <span className='text-blue-500'>{product.brand}</span>
        <h1 className='font-bold'>{product.product_name}</h1>
        <p className='font-light'>
          <span className='font-bold'>sku: </span>{product.sku}
        </p>
        <p>
          <span className='font-bold'>Description: </span>{product.description}
        </p>
        <p>
          <span className='font-bold'>Price: </span>${product.price}
        </p>

        {product.isActive ? (
          <ShoppingCart
            className="text-white flex justify-center items-center bg-yellow-400 font-bold rounded-md md:w-64 h-12 my-2 hover:bg-yellow-200"
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