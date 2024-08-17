import { userContext } from '@/context/UserContext'
import { useContext } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createItemService } from '@/services/auth.service';



const CreateItem = () => {

  const schema = yup.object({
    product_name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().required(),
    category: yup.string().required(),
    brand: yup.string().required(),
    sku: yup.string().required(),
    images: yup.array().of(yup.string().url().required()).min(1, "At least one image URL is required"),
  }).required();


  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );




  const { role, token } = useContext(userContext);

  const handleCreateItem = async (data) => {
    console.log('Raw data', data.image);

    // Ensure the images field is defined and not empty
    const imagesArray = data.image ? data.image.split(',').map(image => image.trim()) : [];
    const finalData = {
      ...data,
      image: imagesArray, // Replace the images string with the array
    };

    console.log('Final data', finalData);

    try {
      toast.info('Awaiting server response...', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });

      // Send data to the server to create an item
      let response = await createItemService(token, finalData);
      console.log("Response from create item", response);

      if (response.status === 200) {
        toast.success('Item created!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      }
    } catch (error) {
      toast.error(`Error creating item: ${error.message}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
  };


  return (
    <div className=' bg-white m-2 rounded-md'>
      {role === 'ADMIN' ? (
        <>
          <div className="flex w-full  min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm  p-4 rounded-md">
              <h1 className="mt-10 capitalize text-center text-black font-extrabold  underline-offset-8 underline text-2xl  leading-9 tracking-tight ">
                Create a new product
              </h1>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit(handleCreateItem)} className="space-y-6 capitalize">
                {/* product name */}
                <div>
                  <label htmlFor="product_name" className="block text-sm font-medium leading-6 text-gray-900">
                    product name
                  </label>
                  <div className="mt-2">
                    <input
                      id="product_name"
                      name="product_name"
                      type="text"
                      {...register("product_name", { required: true })}
                      placeholder="Enter Product Name"
                      className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.product_name &&
                      <div className="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                        <p>{errors.product_name?.message}</p>
                      </div>}
                  </div>
                </div>
                {/* description */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                      product description
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="description"
                      name="description"
                      type="text"
                      {...register('description', { required: true })}
                      placeholder='Enter Product Description'
                      className="block text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.description && <div className="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                      <p>{errors.description?.message}</p>
                    </div>}
                  </div>
                </div>
                {/*  price */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                      product price
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="price"
                      name="price"
                      type="number"
                      min="0"
                      {...register('price', { required: true })}
                      placeholder='Enter Product Price: 2.99'
                      className="block text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.price && <div className="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                      <p>{errors.price?.message}</p>
                    </div>}
                  </div>
                </div>
                {/* category */}
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    product category
                  </label>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("category", { required: true })}
                    defaultValue=""

                  >
                    <option disabled value=''>Select category</option>
                    <option value="appliances">appliances</option>
                    <option value="tv">tv's</option>
                    <option value="computers">computers</option>
                    <option value="tablets">tablets</option>
                    <option value="cellphones">cell phones</option>
                    <option value="audio">audio</option>
                    <option value="video games">video games</option>
                  </select>
                  {
                    errors.category &&
                    <div className="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                      <p>{errors.category.message}</p>
                    </div>
                  }
                </div>
                {/* brand */}
                <div>
                  <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
                    product brand
                  </label>
                  <div className="mt-2">
                    <input
                      id="brand"
                      name="brand"
                      type="text"
                      {...register("brand", { required: true })}
                      placeholder="Enter Product Brand"
                      className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.brand &&
                      <div className="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                        <p>{errors.brand?.message}</p>
                      </div>}
                  </div>
                </div>
                {/* sku */}
                <div>
                  <label htmlFor="sku" className="block text-sm font-medium leading-6 text-gray-900">
                    product sku
                  </label>
                  <div className="mt-2">
                    <input
                      id="sku"
                      name="sku"
                      type="text"
                      {...register("sku", { required: true })}
                      placeholder="Enter Product Sku"
                      className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.sku &&
                      <div className="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                        <p>{errors.sku?.message}</p>
                      </div>}
                  </div>
                </div>
                {/* image  */}
                <div>
                  <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                    Product Image URLs (separate with commas)
                  </label>
                  <div className="mt-2">
                    <input
                      id="image"
                      name="image"
                      type="text"
                      {...register("image", { required: true })}
                      placeholder="Enter Product Image URLs"
                      className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.image &&
                      <div className="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                        <p>{errors.image?.message}</p>
                      </div>}
                  </div>
                </div>
                {/* submit btn  */}
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <section
          className='w-screen min-h-screen m-2 p-2 flex flex-col justify-center items-center'
        >
          <h1
            className='text-lg font-bold animate-pulse '
          >You are not authorized to create an item</h1>
          <span>Only Admin's can create an Item</span>
        </section>)}
      <ToastContainer />
    </div>
  )
}

export default CreateItem