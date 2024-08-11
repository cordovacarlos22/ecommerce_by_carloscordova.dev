import React from 'react'
import { ProductsProvider } from './context/useProductsContext'
import Nav from './components/Nav'
import Home from './pages/Home'
import OffertSpan from './components/OffertSpan'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Register from './pages/Register'
import CheckOut from './pages/CheckOut'
import ProductDetail from './components/ProductDetail'


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
        { path: '/product/:id', element: <ProductDetail /> },
      ],
    }
  ])
  return (
    <>
      <ProductsProvider>
        <OffertSpan />
        <RouterProvider router={router} />
      </ProductsProvider>
    </>
  )
}

export default App