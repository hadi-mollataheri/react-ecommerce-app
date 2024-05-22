import React from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';
function Landing() {
  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      <h1 className='text-3xl font-bold mb-16'>Hadi OnlineShop</h1>
      <div id='products' className='flex flex-col justify-between gap-16 mb-16'>
        {PRODUCTS.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default Landing;
