import { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Cart items array
  const [quantity, setQuantity] = useState(0); // Total quantity of items in cart
  const [totalPrice, setTotalPrice] = useState(0); // Total price of cart items

  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);

      // Calculate initial total price and quantity
      const initialTotalPrice = parsedCartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      const initialQuantity = parsedCartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      setTotalPrice(initialTotalPrice);
      setQuantity(initialQuantity);
    }
  }, []);

  // Save cart items to local storage whenever they change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('cartItems'); // Remove cart from storage if it's empty
    }
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    let updatedCartItems;

    if (existingProduct) {
      updatedCartItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCartItems);
    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price);
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const removeFromCart = (productId) => {
    const removedProduct = cartItems.find(item => item.id === productId);
    if (!removedProduct) return;

    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    setTotalPrice(prevTotalPrice => prevTotalPrice - removedProduct.price * removedProduct.quantity);
    setQuantity(prevQuantity => prevQuantity - removedProduct.quantity);
  };

  const incrementQuantity = (productId) => {
    const product = cartItems.find(item => item.id === productId);
    if (!product) return;

    const updatedCartItems = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updatedCartItems);
    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price);
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = (productId) => {
    const product = cartItems.find(item => item.id === productId);
    if (!product) return;

    if (product.quantity > 1) {
      const updatedCartItems = cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCartItems);
      setTotalPrice(prevTotalPrice => prevTotalPrice - product.price);
      setQuantity(prevQuantity => prevQuantity - 1);
    } else {
      removeFromCart(productId); // Remove item if quantity is 1 and user wants to decrement
    }
  };

  const getTotalPrice = () => totalPrice;

  const data = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotalPrice,
    quantity,
    setQuantity,
    totalPrice,
    setTotalPrice,
  };

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };