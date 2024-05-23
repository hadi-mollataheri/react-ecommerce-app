import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext();

function ShopContextProvider(props) {
  // Create a state named cartProducts with initial value
  // of: An object with properties that count how many
  // products exist in the cart with a specific id for
  // every product that exist. like: {1: 0, 2: 0, ... }
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

  const [cartProducts, setCartProducts] = useState(getDefaultCart());
  console.log(cartProducts);

  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
}

export default ShopContextProvider;
