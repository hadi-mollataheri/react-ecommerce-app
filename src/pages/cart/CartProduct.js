import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';

function CartProduct({ product }) {
  const { cartProductsState, addToCart, removeFromCart } =
    useContext(ShopContext);
  const { id, productImage, productName, price } = product;
  const handleDeleteButton = () => {
    removeFromCart(id);
  };
  const handleAddButton = () => {
    addToCart(id);
  };

  return (
    <div id='cart-product-container' className='mx-auto max-w-80 sm:max-w-md mb-16 text-lg'>
      <div
        id='cart-product'
        className='flex justify-start pl-4 sm:justify-center sm:w-full sm:pl-5 items-center mt-16 mx-3 shadow-[0px_0px_5px_rgba(0,0,0,0.4)] rounded-xl'
      >
        <div
          id='cart-image-container'
          className=' w-1/2 h-40 overflow-hidden my-4 sm:w-1/2 sm:mx-auto'
        >
          <img
            src={productImage}
            alt={productName}
            className=' w-full h-full object-contain'
          />
        </div>
        <div id='cart-info-container' className='pl-5 w-1/2 sm:w-1/2 sm:mx-auto flex flex-col items-start sm:justify-center sm:items-center'>
          <p className='font-bold'>{productName}</p>
          <p className='font-semibold mt-3'>Price: {price}</p>
          <div
            id='cart-quantity-container'
            className='flex items-center w-20 justify-between mt-4'
          >
            <button
              id='delete'
              onClick={handleDeleteButton}
              className='bg-black text-white sm:pb-1 sm:pt-0 px-2 py-2 mx-auto align-middle leading-none w-6 h-6 rounded-full flex justify-center items-center'
            >
              -
            </button>
            <span
              id='cart-product-quantity'
              className='text-sm bg-slate-600 text-white sm:pb-0.5 mx-auto align-middle leading-none w-6 h-6 rounded-full flex justify-center items-center'
            >
              {cartProductsState[id]}
            </span>
            <button
              id='add'
              onClick={handleAddButton}
              className='bg-black text-white sm:pb-1 sm:pt-0 py-2 px-2 mx-auto align-middle leading-none w-6 h-6 rounded-full flex justify-center items-center'
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
