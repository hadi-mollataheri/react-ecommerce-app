import React from 'react';

function Product({ product }) {
  const { id, productImage, productName, price } = product;
  return (
    <div
      key={id}
      className='flex flex-col justify-center items-center'
    >
      <div className='max-w-full'>
        <img
          src={productImage}
          alt={productName}
          className=' w-4/5 h-auto mx-auto object-contain shadow-md overflow-hidden'
        />
      </div>
      <div id='info' className='flex flex-col items-center justify-center mt-5'>
        <p className='mb-2 font-semibold'>{productName}</p>
        <p className='mb-3'>{price}</p>
        <button className=' border-2 border-black rounded-3xl px-0.5 pt-0.5 pb-1 m-0 box-border text-xs'>{`Add To Cart(${'num'})`}</button>
      </div>
    </div>
  );
}

export default Product;
