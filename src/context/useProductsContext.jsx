import { createContext, useEffect, useState } from "react";

//! creates ProductsContext context
const ProductsContext = createContext();

//! creates Products provider 

const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('') // product to be searched
  console.log("db variable", import.meta.env.VITE_DB_URL)
  // fetch products data from an API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //? toastify loading logic pending 

        let url = import.meta.env.VITE_DB_URL
        let response = await fetch(`${url}/items`);
        let responseJson = await response.json();
        setProducts(responseJson);
        setLoading(false);

      } catch (error) {
        //?  toastify error pending 

        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    }
    fetchProducts()
  }, [])


  let data = {
    products,
    setProducts,
    loading,
    setLoading,
    searchTerm,
    setSearchTerm,
  }
  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  );
}
export { ProductsContext, ProductsProvider, }
