const { createContext } = require("react");

const CartContext = createContext();

const data = {

};

const CartProvider = ({ children }) => {



  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };




