import React from 'react';
import { ShoppingCart } from '@phosphor-icons/react';

function Navbar() {
  return (
    <div className=' h-16 text-white bg-black flex justify-end items-center pr-8'>
      <button className='pr-2'>Shop</button>
      <ShoppingCart size={24} color='#ffffff' />
    </div>
  );
}

export default Navbar;
