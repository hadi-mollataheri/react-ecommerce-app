import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import CartProduct from './CartProduct';
import { ShopContext } from '../../context/ShopContextProvider';

function Cart() {
  const { emptyCartMessage, cartProductsState } = useContext(ShopContext);

  return (
    <>
      {!emptyCartMessage ? (
        PRODUCTS.map((product) => {
          return cartProductsState[product.id] > 0 ? (
            <CartProduct key={product.id} product={product} />
          ) : null;
        })
      ) : (
        <p className=' opacity-65 flex justify-center my-16'>
          {emptyCartMessage}
        </p>
      )}
    </>
  );
}

export default Cart;
