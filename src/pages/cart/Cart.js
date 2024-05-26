import React from 'react';
import { PRODUCTS } from '../../products';
import CartProduct from './CartProduct';

function Cart() {
  return (
    <div>
      {PRODUCTS.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Cart;
