import React, { createContext } from 'react';

export const ShopContext = createContext();

function ShopContextProvider(props) {
  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
}

export default ShopContextProvider;
