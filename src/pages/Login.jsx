import React, { useContext, useState } from 'react'
import logo from './../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { userContext } from '@/context/UserContext';

const Login = () => {

  const userContex = useContext(userContext);
  const { setToken, setUser } = userContex;

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    // TODO: Validate and send login request to server
    console.log('Form submitted:', data);
    // Mock login success
    setToken('mock_token');
    setUser(data);
  };


  return (
    <>

      <div className="flex w-full  min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-blue-500 p-4 rounded-md">
          <img
            alt="ecommerce logo"
            src={logo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center  underline-offset-8 underline text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
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
                {errors.email && <div class="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                  <p>This Field is required</p>
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
                {errors.password && <div class="border border-red-400 rounded bg-red-100 px-4 py-2 mt-2 text-red-700">
                  <p>This Field is required</p>
                </div>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Do not have an Account?{' '}
            <Link to='/register' className="font-semibold leading-6 text-blue-500 hover:text-indigo-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login