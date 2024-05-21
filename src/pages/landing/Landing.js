import React from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';
function Landing() {
  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      <h1 className='text-3xl font-bold'>Hadi OnlineShop</h1>
      <div id='products'>
        {PRODUCTS.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default Landing;
