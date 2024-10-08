import React, { useContext } from 'react'
import { userContext } from '@/context/UserContext';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { loginUserService } from '@/services/auth.service';
import { accountInfo } from '@/services/user.service';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().min(8).required(),
}).required();


const Login = () => {

  const navigate = useNavigate();
  const { setupSession, loading } = useContext(userContext);

  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );
  const onSubmit = async (data) => {
    try {
      toast.info(' waiting for server !', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });

      let response = await loginUserService(data)


      // ! handles login request
      if (response.status === 200) {
        const user = await accountInfo(response.data.token);

        setupSession(response.data.token, user)
        // todo : should add a toasify alert if user logged in
        toast.success(' login succesfull !', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });

        setTimeout(() => {
          navigate('/')
        }, 2000);
        //! handles user request after login

      }
    } catch (error) {
      toast.error(`please verify credentials ${error.message}`, {
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
    <>
      {loading ? (<>
        <LoadingSpinner />
      </>) : (
        <>

          <div className="flex w-full  min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm  p-4 rounded-md">
              <h1 className="mt-10 text-center text-black font-extrabold  underline-offset-8 underline text-2xl  leading-9 tracking-tight ">
                Sign in to your account
              </h1>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="email@example.com"
                      autoComplete="email"
                      className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.email &&
                      <div className="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                        <p>{errors.email?.message}</p>
                      </div>}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    {/* <div className="text-sm">
                  <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div> */}
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      {...register('password', { required: true })}
                      autoComplete="current-password"
                      placeholder='Enter your password'
                      className="block text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.password && <div className="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                      <p>{errors.password?.message}</p>
                    </div>}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Do not have an Account?{' '}
                <Link to='/register' className="font-semibold leading-6 text-blue-500 hover:text-blue-800">
                  Sign Up
                </Link>
              </p>
            </div>
            <ToastContainer />
          </div>

        </>)}
    </>
  )
}

export default Login