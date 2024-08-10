import { ProductsContext } from '@/context/useProductsContext'
import React, { useContext } from 'react'

const Nav = () => {
  const itemsContext = useContext(ProductsContext);
  
  return (
    <div>
        <h1>navigation</h1>
      
        <input
          onChange={(e) => itemsContext.setSearchTerm(e.target.value)}
          type="search"
          value={itemsContext.searchTerm}
          placeholder='search Item'
        />
      <h1>
        {itemsContext.searchTerm}
       </h1>
    </div>
  )
}

export default Nav