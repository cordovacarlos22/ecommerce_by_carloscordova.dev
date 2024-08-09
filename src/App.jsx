import React from 'react'
import { ProductsProvider } from './context/useProductsContext'
import Nav from './components/Nav'


const App = () => {
  return (
    <>
      <ProductsProvider>
        <Nav />
        test
        {/* Your application components */}


    </ProductsProvider>
    </>
  )
}

export default App