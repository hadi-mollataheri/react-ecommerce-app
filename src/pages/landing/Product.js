import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';

function Product({ product }) {
  const { cartProducts, addToCart } = useContext(ShopContext);
  const { id, productImage, productName, price } = product;

  const productQuantity = cartProducts[id];

  const handleAddToCartButton = () => addToCart(id);

  return (
    <div key={id} className='flex flex-col justify-center items-center'>
      <div className='max-w-full'>
        <img
          src={productImage}
          alt={productName}
          className=' w-4/5 h-auto mx-auto object-contain shadow-md overflow-hidden rounded'
        />
      </div>
      <div id='info' className='flex flex-col items-center justify-center mt-5'>
        <p className='mb-2 font-semibold'>{productName}</p>
        <p className='mb-3'>{price}</p>
        <button
          onClick={handleAddToCartButton}
          className=' border-[1.5px] border-black rounded-3xl px-1 pt-0.5 pb-1 m-0 box-border text-xs font-semibold hover:bg-black hover:text-white'
        >
          Add To Cart {productQuantity !== 0 ? `(${productQuantity})` : ''}
        </button>
      </div>
    </div>
  );
}

export default Product;
