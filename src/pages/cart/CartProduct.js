import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';

function CartProduct({ product }) {
  const { cartProducts, addToCart, removeFromCart } = useContext(ShopContext);
  const { id, productImage, productName, price } = product;

  return (
    <div>
      {cartProducts[id] > 0 ? (
        <div className='flex justify-evenly items-center mt-16 mx-3 shadow-[0px_0px_9px_rgba(0,0,0,0.5)] rounded-xl'>
          <div className=' w-40 h-auto overflow-hidden my-4 rounded-lg'>
            <img
              src={productImage}
              alt={productName}
              className=' w-full h-full object-contain'
            />
          </div>
          <div>
            <p className='font-bold'>{productName}</p>
            <p>Price: {price}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CartProduct;
