import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div class='navbar bg-base-100'>
        <div class='flex-1'>
          <a class='btn btn-ghost normal-case text-xl'>HOME</a>
          <a class='btn btn-ghost normal-case text-xl'>ADVERTISERS</a>
          <a class='btn btn-ghost normal-case text-xl'>PUBLISHERS</a>
          <a class='btn btn-ghost normal-case text-xl'>Ad FORMATS</a>
          <a class='btn btn-ghost normal-case text-xl'>BLOG</a>
          <a class='btn btn-ghost normal-case text-xl'>CONTACT US</a>
        </div>
        <div class='flex-none gap-2'>
          <div class=''>
            <button class='btn btn-sm'>Login</button>
            <button class='btn btn-sm'>Signin</button>
          </div>
          <div class='dropdown dropdown-end'>
            <label tabindex='0' class='btn btn-ghost btn-circle avatar'>
              <div class='w-10 rounded-full'>
                <img src='https://api.lorem.space/image/face?hash=33791' />
              </div>
            </label>
            <ul
              tabindex='0'
              class='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
              <li>
                <a class='justify-between'>
                  Profile
                  <span class='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
