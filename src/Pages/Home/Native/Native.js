import React from 'react';

const Native = () => {
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
          <h2 class='card-title text-black'>Native</h2>
          <p>
            {' '}
            Ad format with the image and the title, that perfectly fits into the
            content of the site. Native ads are placed in the most visible areas
            of the page and, thus, this format shows good results and the level
            of interaction.
          </p>
          <div class='card-actions justify-end'></div>
        </div>
      </div>
    </div>
  );
};

export default Native;
