import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import CartProduct from './CartProduct';
import { ShopContext } from '../../context/ShopContextProvider';

function Cart() {
  const { emptyCartMessage, cartProductsState, subtotal } =
    useContext(ShopContext);

  return !emptyCartMessage ? (
    <div className='mb-16'>
      {PRODUCTS.map((product) => {
        if (cartProductsState[product.id] > 0) {
          return <CartProduct key={product.id} product={product} />;
        } else return null;
      })}
      <p id='subtotal' className='flex justify-center font-bold'>
        Subtotal: {subtotal}
      </p>
      <div id='cart-navLinks' className='flex justify-center mt-6'>
        <Link
          to={'/'}
          className='mx-3 bg-slate-900 text-slate-200 rounded-md px-3 pb-1 pt-0.5 hover:bg-slate-950 hover:text-white transition'
        >
          Continue Shopping
        </Link>
        <Link
          to={''}
          className='mx-3 bg-slate-900 text-slate-200 rounded-md px-3 pb-1 pt-0.5 hover:bg-slate-950 hover:text-white transition'
        >
          Checkout
        </Link>
      </div>
    </div>
  ) : (
    <p className=' opacity-65 flex justify-center my-16'>{emptyCartMessage}</p>
  );
}

export default Cart;
