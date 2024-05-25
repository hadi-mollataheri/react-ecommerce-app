import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';
// This context includes state and info for Clicking the Add To Cart button feature
export const ShopContext = createContext();

function ShopContextProvider(props) {
  // Get the default value of cartProducts state
  function getDefaultCart() {
    let defaultCart = {};
    for (let i = 1; i <= PRODUCTS.length; i++) {
      // defaultCart[i] works because js knows inside the []
      //as a variable witch is what we want at it end to: 0, 1, 2
      // but if we do this: defaultCart.i js will create a property
      // with the key of exactly i (as a string key) not the value
      // of it and its return value will just one {i=0} because
      // defaultCart.i = 0 is executed every time because i is a string
      defaultCart[i] = 0;
    }
    return defaultCart;
  }
  // Create a state named cartProducts
  // This state represent the existent of each products in the cart
  // based on their id property:
  // initial value is: An object with properties that count how many
  // products exist in the cart with a specific id for
  // every product that exist. like: {1: 0, 2: 0, ... }
  const [cartProducts, setCartProducts] = useState(getDefaultCart());

  // Add product to cart: This function increment the old
  // value of the product for the product id that it's add button
  const addToCart = (id) => {
    setCartProducts((prevCartProducts) => {
      return {
        ...prevCartProducts,
        [id]: prevCartProducts[id] + 1,
      };
    });
  };

  // Remove product from cart: This function decrement
  // from the stock value of the product id that has
  // been added to it when the it's remove button has been clicked
  const removeFromCart = (id) => {
    setCartProducts((prevCartProducts) => {
      return {
        ...prevCartProducts,
        [id]: prevCartProducts[id] > 0 ? prevCartProducts[id] - 1 : 0,
      };
    });
  };

  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
}

export default ShopContextProvider;
