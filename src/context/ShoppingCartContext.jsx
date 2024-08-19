const { createContext, useState } = require("react");

const CartContext = createContext();



const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([])// cart items array 


  const addToCart = () => {
    
  };

  const removeFromCart = () => {
    
  };

  const incrementQuantity = () => {
    
  };

  const decrementQuantity = () => {
    
  };

  const getTotalPrice = () => {
    
  };







  const data = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotalPrice,
  };
  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };




