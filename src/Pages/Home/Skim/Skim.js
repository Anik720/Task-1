import React from 'react';

const Skim = () => {
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
          <h2 class='card-title text-black'>Skim</h2>
          <p>
            {' '}
            SKIM" is a link that a publisher inserts on a specific site element,
            and after clicking on it, an advertisement appears to the user. SKIM
            gives 100% control of your sold traffic amount, higher CR to
            advertisers and CPM rates to publishers.
          </p>
          <div class='card-actions justify-end'></div>
        </div>
      </div>
    </div>
  );
};

export default Skim;
