import React from 'react';
import { Outlet } from 'react-router-dom';
import Available from '../Available/Available';
import Banner from '../Banner/Banner';
import Carosel from '../Carosel/Carosel';
import Round from '../Round/Round';
import Versatile from '../Versatile/Versatile';

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <Available></Available>
        <Carosel></Carosel>
        <Versatile></Versatile>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
