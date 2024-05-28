import React from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';
function Landing() {
  return (
    <div className='flex flex-col items-center justify-center mt-16 sm:mx-5'>
      <h1 className='text-3xl font-bold mb-16'>Hadi OnlineShop</h1>
      <div id='products-container' className='flex flex-col justify-between gap-16 mb-16 sm:grid sm:grid-cols-3 sm:items-center sm:justify-items-center sm:justify-center sm:content-center sm:gap-5 sm:w-full'>
        {PRODUCTS.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Landing;
