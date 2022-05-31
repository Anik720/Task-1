import React from 'react';

const PopUnder = () => {
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
          <h2 class='card-title text-black'>POP-UNDER</h2>
          <p>
            {' '}
            This is one of the most popular ads. After user’s click, this ad
            opens landing page in behind. So, the user experience is not
            hampered much.
          </p>
          <div class='card-actions justify-end'></div>
        </div>
      </div>
    </div>
  );
};

export default PopUnder;
