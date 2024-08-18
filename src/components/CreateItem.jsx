/* The above code is a JavaScript React component that is using the `useContext` hook to access the
`userContext`, `useForm` hook from `react-hook-form` for form handling, `yup` for form validation
using schema, `ToastContainer` and `toast` from `react-toastify` for displaying notifications, and
`createItemService` from `auth.service` for creating an item. The code is setting up the necessary
dependencies and components for handling user input, form validation, and displaying notifications
in a React application. */
import { userContext } from '@/context/UserContext'
import { useContext } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createItemService } from '@/services/auth.service';



/* The above code is a React component named `CreateItem` that allows users with the role of 'ADMIN' to
create a new product item. Here is a breakdown of what the code is doing: */
const CreateItem = () => {

  /* The above code is defining a schema using the Yup library for validating an object representing a
  product. The schema includes validation rules for various properties of the product object such as
  product_name, description, price, category, brand, sku, and images. Each property has specific
  validation rules defined using Yup methods like string(), number(), positive(), array(), of(),
  url(), and required(). The schema ensures that the product object must have all these properties
  with the specified validation rules in order to be considered valid. */
  const schema = yup.object({
    product_name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().required(),
    category: yup.string().required(),
    brand: yup.string().required(),
    sku: yup.string().required(),
    images: yup.array().of(yup.string().url().required()).min(1, "At least one image URL is required"),
  }).required();

  /* The above code snippet is using the useForm hook from React Hook Form library in a React component.
  It is destructuring the register, handleSubmit, and formState objects from the useForm hook. The
  resolver property is being set to yupResolver(schema), which means it is using Yup schema validation
  to validate the form data. The errors object is used to store any validation errors that occur
  during form submission. */

  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );




  /* The above code is using the useContext hook from React to access the userContext and destructure
  the values of role and token from it. These values can then be used within the component where this
  code is written. */
  const { role, token } = useContext(userContext);

  /**
   * The function `handleCreateItem` processes data, sends a request to create an item on the server,
   * and displays corresponding toast messages based on the response.
   */
  const handleCreateItem = async (data) => {

    /* The above code is checking if the `data.image` field is defined and not empty. If `data.image` is
    defined and not empty, it splits the string by commas, trims any extra whitespace from each
    image, and stores the resulting array in `imagesArray`. If `data.image` is not defined or empty,
    `imagesArray` will be an empty array. */
    // Ensure the images field is defined and not empty
    const imagesArray = data.image ? data.image.split(',').map(image => image.trim()) : [];
    /* The above code is creating a new object `finalData` by spreading the properties of an existing
    object `data`. It then replaces the value of the `image` property with an array `imagesArray`. */
    const finalData = {
      ...data,
      image: imagesArray, // Replace the images string with the array
    };

    /* The above code is a JavaScript React code snippet that is handling the process of creating an
    item by sending data to a server using an asynchronous function. Here is a breakdown of the
    code: */
    try {
      /* The above code is using the `react-toastify` library to display an informational toast message
      with the text "Awaiting server response...". The toast message is positioned at the
      bottom-right corner of the screen and will automatically close after 5 seconds (5000
      milliseconds). Other configurations include showing the progress bar, allowing the user to
      close the toast message by clicking on it, pausing the auto-close on hover, making the toast
      draggable, and setting the theme to "light". */
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

     /* The above code is sending data to the server to create an item using an asynchronous function
     call. The `createItemService` function is being called with the `token` and `finalData` as
     parameters, and the result is being stored in the `response` variable. The `await` keyword is
     used to wait for the asynchronous operation to complete before proceeding with the code
     execution. */
      // Send data to the server to create an item
      let response = await createItemService(token, finalData);

      /* The above code is a JavaScript React code snippet that checks if the response status is equal
      to 200. If the condition is true, it displays a success toast notification with the message
      'Item created!' at the bottom-right position of the screen. The toast notification will
      automatically close after 5 seconds, and it includes options for hiding the progress bar,
      closing on click, pausing on hover, and being draggable. The theme of the toast notification
      is set to "light". */
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
      /* The above code is displaying an error toast notification using the `toast.error` method from a
      library like `react-toastify`. The notification will show the error message passed as a
      parameter, with specific configurations such as position, autoClose duration, progressBar
      visibility, click behavior, hover behavior, draggability, and theme. */
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


  /* The above code is a React component that renders a form for creating a new product. It checks the
  user's role, and if the role is 'ADMIN', it displays the form with input fields for product name,
  description, price, category, brand, SKU, and image URLs. The form also includes validation for
  required fields and displays error messages if validation fails. */
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