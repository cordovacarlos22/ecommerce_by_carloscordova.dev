import React from 'react'
import { ProductsProvider } from './context/useProductsContext'
import Nav from './components/Nav'
import Home from './pages/Home'


const App = () => {
  return (
    <>
      <ProductsProvider>
        <Nav />
        <Home/>
        {/* Your application components */}


    </ProductsProvider>
    </>
  )
}

export default App