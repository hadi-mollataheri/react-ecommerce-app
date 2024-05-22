import React from 'react';

function Cart({ cartProducts }) {
  // const { id, productImage, productName, price } = cartProducts;

  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      <h2 className='text-2xl font-bold'>Your Cart Items</h2>
      {!cartProducts.length ? (
        <p className='mt-10 opacity-75'>Your cart is empty</p>
      ) : (
        cartProducts.map((product) => (
          <div
            key={product.id}
            className='flex flex-col justify-center items-center'
          >
            <div className='max-w-full'>
              <img
                src={product.productImage}
                alt={product.productName}
                className=' w-4/5 h-auto mx-auto object-contain shadow-md overflow-hidden'
              />
            </div>
            <div
              id='info'
              className='flex flex-col items-center justify-center mt-5'
            >
              <p className='mb-2 font-semibold'>{product.productName}</p>
              <p className='mb-3'>{product.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
