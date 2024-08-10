import React from 'react'

const Card = ({ url, image, product_name, }) => {
  return (
    <div key={product_name} className="max-w-sm flex flex-col justify-center p-2 items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={url}>
        <img className="rounded-t-lg" src={image} alt={product_name} />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          {product_name}
        </h5>
        <aside className='flex  justify-center text-center items-center gap-4'>

          <a
            href={url}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {/* //! needs card svg element */}
            Add to Cart


          </a>
          <a
            href={url}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            More Details
            {/* //! need arrow svg element */}
          </a>
        </aside>
      </div>
    </div>
  )
};

export default Card