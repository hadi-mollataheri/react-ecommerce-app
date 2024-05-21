import React from 'react';

function Product({ product }) {
  const { id, productImage, productName, price } = product;
  return (
    <div key={id}>
      <img src={productImage} alt={productName} />
      <div id='info' className='flex flex-col items-center justify-center'>
        <p className='mb-3 font-semibold'>{productName}</p>
        <p className='mb-4'>{price}</p>
        <button className=' border-2 border-black rounded-3xl px-0.5 pt-0.5 pb-1 m-0 box-border text-sm'>{`Add To Cart(${'num'})`}</button>
      </div>
    </div>
  );
}

export default Product;
