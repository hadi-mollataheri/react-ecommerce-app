import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../products';

// Create a new context for the shop
export const ShopContext = createContext();

function ShopContextProvider(props) {
  // Function to initialize the cart with each product id set to 0
  // This represents that there are no products in the cart initially: exp: {1: 0, 2: 0, ...}
  function getDefaultCart() {
    let defaultCart = {};
    for (let i = 1; i <= PRODUCTS.length; i++) {
      defaultCart[i] = 0;
    }
    return defaultCart;
  }

  // State to track the quantity of each product in the cart
  // The key is the product id and the value is the quantity
  // Initial state is set by getDefaultCart function
  const [cartProducts, setCartProducts] = useState(getDefaultCart());
  const [emptyCartMessage, setEmptyCartMessage] = useState('');

  useEffect(() => {
    let counter = 0;
    for (let prop in cartProducts) {
      counter += cartProducts[prop];
    }
    counter === 0
      ? setEmptyCartMessage('Your Cart Is Empty')
      : setEmptyCartMessage('');
  }, [cartProducts]);

  console.log(emptyCartMessage);

  // Function to add a product to the cart
  // It takes the id of the product as a parameter
  // The function updates the state by incrementing the quantity of the product in the cart
  const addToCart = (id) => {
    setCartProducts((prevCartProducts) => {
      return {
        ...prevCartProducts,
        [id]: prevCartProducts[id] + 1,
      };
    });
  };

  // Function to remove a product from the cart
  // It takes the id of the product as a parameter
  // The function updates the state by decrementing the quantity of the product in the cart
  // If the quantity is already 0, it remains 0
  const removeFromCart = (id) => {
    setCartProducts((prevCartProducts) => {
      return {
        ...prevCartProducts,
        [id]: prevCartProducts[id] > 0 ? prevCartProducts[id] - 1 : 0,
      };
    });
  };

  // The ShopContext.Provider component is returned
  // This component wraps the children components and provides them the context
  return (
    <ShopContext.Provider
      value={{ cartProducts, addToCart, removeFromCart, emptyCartMessage }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
