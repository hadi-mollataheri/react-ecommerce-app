// Import necessary modules from React and the products data
import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../products';

// Create a new context for the shop
// This will allow child components to access the shop's state and functions
export const ShopContext = createContext();

function ShopContextProvider(props) {
  // Function to initialize the cart with each product id set to 0
  // This represents that there are no products in the cart initially: exp: {1: 0, 2: 0, ...}
  function getDefaultCart() {
    let defaultCart = {};
    // Loop through all products and set the initial quantity in the cart to 0
    for (let i = 1; i <= PRODUCTS.length; i++) {
      defaultCart[i] = 0;
    }
    return defaultCart;
  }

  // State to track the quantity of each product in the cart
  // The key is the product id and the value is the quantity
  // Initial state is set by getDefaultCart function
  const [cartProductsState, setCartProductsState] = useState(getDefaultCart());

  // State to store a message when the cart is empty
  const [emptyCartMessage, setEmptyCartMessage] = useState('');

  // State to store the subtotal of the cart
  const [subtotal, setSubtotal] = useState(0);

  // Effect hook to update the empty cart message based on the cart's state
  useEffect(() => {
    let counter = 0;
    // Count the total quantity of products in the cart
    for (let prop in cartProductsState) {
      counter += cartProductsState[prop];
    }
    // If the total quantity is 0, set the message to 'Your Cart Is Empty'
    // Otherwise, clear the message
    counter === 0
      ? setEmptyCartMessage('Your Cart Is Empty')
      : setEmptyCartMessage('');
  }, [cartProductsState]); // This effect runs whenever cartProductsState changes

  // Function to add a product to the cart
  // It takes the id of the product as a parameter
  // The function updates the state by incrementing the quantity of the product in the cart
  const addToCart = (id) => {
    setCartProductsState((prevCartProducts) => {
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
    setCartProductsState((prevCartProducts) => {
      return {
        ...prevCartProducts,
        [id]: prevCartProducts[id] > 0 ? prevCartProducts[id] - 1 : 0,
      };
    });
  };

  // Effect hook to calculate the subtotal of the cart
  useEffect(() => {
    let total = 0;
    // Loop through all products
    for (let product of PRODUCTS) {
      // If the product is in the cart, add its total price to the subtotal
      if (cartProductsState[product.id] > 0) {
        total += product.price * cartProductsState[product.id];
      }
    }
    // Update the subtotal state
    setSubtotal((prev) => (prev = total));
  }, [cartProductsState]); // This effect runs whenever cartProductsState changes

  // The ShopContext.Provider component is returned
  // This component wraps the children components and provides them the context
  // The context includes the cart's state and the functions to manipulate it
  return (
    <ShopContext.Provider
      value={{
        cartProductsState,
        addToCart,
        removeFromCart,
        emptyCartMessage,
        subtotal,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

// Export the ShopContextProvider component
// This component should be used to wrap any components that need access to the shop's context
export default ShopContextProvider;
