import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Versatile = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-center font-bold text-xl'>Versatile Add Formats</h1>
      <div className='flex justify-center items-center'>
        <Link to='/ad/versatile'>
          {' '}
          <button class='btn btn-sm m-10'>POP-UNDER</button>
        </Link>
        <Link to='/ad/banner'>
          {' '}
          <button class='btn btn-sm m-10'>BANNER AD</button>
        </Link>
        <Link to='/ad/native'>
          {' '}
          <button class='btn btn-sm m-10'>NATIVE</button>
        </Link>
        <Link to='/ad/skim'>
          {' '}
          <button class='btn btn-sm m-10'>SKIM</button>
        </Link>
      </div>
    </div>
  );
};

export default Versatile;
