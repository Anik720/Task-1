import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Versatile = () => {
  return (
    <div>
      <div className='flex justify-center items-center'></div>

      <div class='card card-side bg-base-100 shadow-xl my-10'>
        <figure>
          <img
            src='https://api.lorem.space/image/movie?w=800&h=380'
            alt='Movie'
          />
        </figure>
        <div class='card-body'>
          <h2 class='card-title text-black'>BANNER AD</h2>
          <p>
            {' '}
            Choose between the available banner formats. Highly effective ad for
            visibility.
          </p>
          <div class='card-actions justify-end'></div>
        </div>
      </div>
    </div>
  );
};

export default Versatile;
