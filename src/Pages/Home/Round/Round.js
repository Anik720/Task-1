import React from 'react';
import { Outlet } from 'react-router-dom';

const Round = () => {
  return (
    <div className=''>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 h-52  bg-sky-500/100 ...'>
        <div class='avatar ml-32'>
          <div class='w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 '>
            <div className='flex justify-center items-center m-auto'>
              <div className='mt-20'>
                <h1 className='text-xl font-bold '>1BN+</h1>
                <p>Daily impressions</p>
              </div>
            </div>
          </div>
        </div>
        <div class='avatar ml-32'>
          <div class='bg-slate-50 w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex items-center justify-center'>
            <div className='flex justify-center items-center m-auto'>
              <div className='mt-20'>
                <h1 className='text-xl font-bold '>$500K++</h1>
                <p>Paid</p>
              </div>
            </div>
          </div>
        </div>
        <div class='avatar ml-32'>
          <div class='w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex items-center justify-center'>
            <div className='flex justify-center items-center m-auto'>
              <div className='mt-20'>
                <h1 className='text-xl font-bold '>1BN+</h1>
                <p>Daily impressions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round;
