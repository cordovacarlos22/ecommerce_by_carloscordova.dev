import { createContext, useEffect, useState } from "react";

//! creates ProductsContext context
const ProductsContext = createContext();

//! creates Products provider 

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loadings, setLoadings] = useState(true);

  // fetch products data from an API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //? toastify loading logic pending 

        let responce = await fetch('https://json-server-by-carloscordova-dev.onrender.com/items');
        let responseJson = await responce.json();
        setProducts(responseJson);
        setLoadings(false);

      } catch (error) {
        //?  toastify error pending 

        console.error("Error fetching products: ", error);
        setLoadings(false);
      }
    }
    fetchProducts()
  }, [])


  let data = {
    products,
    setProducts,
    loadings,
    setLoadings
  }
  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  );
}
export { ProductsContext, ProductsProvider }
