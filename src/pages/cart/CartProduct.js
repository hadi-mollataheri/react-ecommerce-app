import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';

function CartProduct({ product }) {
  const { cartProducts, addToCart, removeFromCart } = useContext(ShopContext);
  const { id, productImage, productName, price } = product;
  const handleDeleteButton = () => {
    removeFromCart(id);
  };
  const handleAddButton = () => {
    addToCart(id);
  };

  return (
    <div id='cart-product-container' className='mx-auto max-w-80 mb-16 text-lg'>
      {cartProducts[id] > 0 ? (
        <div
          id='cart-product'
          className='flex justify-evenly items-center mt-16 mx-3 shadow-[0px_0px_9px_rgba(0,0,0,0.5)] rounded-xl'
        >
          <div
            id='cart-image-container'
            className=' max-w-40 h-40 overflow-hidden my-4'
          >
            <img
              src={productImage}
              alt={productName}
              className=' w-full h-full object-contain'
            />
          </div>
          <div id='cart-info-container'>
            <p className='font-bold'>{productName}</p>
            <p className='font-semibold mt-3'>Price: {price}</p>
            <div
              id='cart-quantity-container'
              className='flex items-center w-20 justify-between mt-4'
            >
              <button
                id='delete'
                onClick={handleDeleteButton}
                className='bg-black text-white pb-1 px-1 leading-none w-5 h-5 rounded-full flex justify-center items-center'
              >
                -
              </button>
              <span
                id='cart-product-quantity'
                className='text-sm bg-slate-600 text-white pb-0.5 px-1 w-6 h-6 rounded-full flex justify-center items-center'
              >
                {cartProducts[id]}
              </span>
              <button
                id='add'
                onClick={handleAddButton}
                className='bg-black text-white pb-1 px-1 leading-none w-5 h-5 rounded-full flex justify-center items-center'
              >
                +
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CartProduct;
