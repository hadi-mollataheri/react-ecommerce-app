import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import CartProduct from './CartProduct';
import { ShopContext } from '../../context/ShopContextProvider';

function Cart() {
  const { emptyCartMessage } = useContext(ShopContext);



  return !emptyCartMessage ? (
    PRODUCTS.map((product) => (
      <CartProduct key={product.id} product={product} />
    ))
  ) : (
    <p className=' opacity-65 flex justify-center my-16'>{emptyCartMessage}</p>
  );
}

export default Cart;
