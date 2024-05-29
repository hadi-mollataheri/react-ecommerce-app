import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';

function Product({ product }) {
  const { cartProductsState, addToCart } = useContext(ShopContext);
  const { id, productImage, productName, price } = product;

  const productQuantity = cartProductsState[id];

  const handleAddToCartButton = () => addToCart(id);

  return (
    <div key={id} className='sm:w-full'>
      <div className='max-w-full sm:w-full sm:shadow-sm rounded'>
        <img
          src={productImage}
          alt={productName}
          className=' w-4/5 h-60 shadow-sm rounded mx-auto object-contain overflow-hidden sm:mx-0 sm:w-full sm:h-64 sm:rounded-none'
        />
      </div>
      <div id='info' className='flex flex-col items-center justify-center mt-5'>
        <p className='mb-2 font-semibold'>{productName}</p>
        <p className='mb-3'>{price}</p>
        <button
          onClick={handleAddToCartButton}
          className=' border-[1.5px] border-black rounded-3xl px-1 flex items-center justify-center py-1 sm:pt-0.5 sm:pb-1 m-0 box-border text-xs font-semibold hover:bg-black hover:text-white transition'
        >
          Add To Cart {productQuantity !== 0 ? `(${productQuantity})` : ''}
        </button>
      </div>
    </div>
  );
}

export default Product;
