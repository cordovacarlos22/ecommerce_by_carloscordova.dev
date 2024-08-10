import React from 'react'
import { ProductsProvider } from './context/useProductsContext'
import Nav from './components/Nav'
import Home from './pages/Home'
import OffertSpan from './components/OffertSpan'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Login from './components/Login'
import Register from './components/Register'
import CheckOut from './components/CheckOut'


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav></Nav>,
     
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/checkout', element: <CheckOut /> },
      ],
    }
  ])
  return (
    <>
      <ProductsProvider>
        <OffertSpan/>
        <RouterProvider router={router} />
      </ProductsProvider>
    </>
  )
}

export default App