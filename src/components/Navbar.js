import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@phosphor-icons/react';

function Navbar() {
  return (
    <div className=' h-16 text-white bg-black flex justify-end items-center pr-8'>
      <Link to='/' className='mr-4 text-lg'>Shop</Link>
      <Link to='/cart'><ShoppingCart size={32} color='#ffffff' /></Link>
    </div>
  );
}

export default Navbar;
