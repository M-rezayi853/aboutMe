import React from 'react';

import MySelfTop from '../components/MySelfTop/MySelfTop';
import MySelfMiddle from '../components/MySelfMiddle/MySelfMiddle';
import MySelfBottom from '../components/MySelfBottom/MySelfBottom';
import MySelfMiddleLast from '../components/MySelfMiddleLast/MySelfMiddleLast';
import MySelfSocial from '../components/MySelfSocial/MySelfSocial';
import MySelfSong from '../components/MySelfSong/MySelfSong';
import MyPortfolios from '../components/MyPortfolios/MyPortfolios';
import './HomeScreen.scss';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <MySelfTop />

      <MySelfMiddle />

      <MySelfBottom />

      <MySelfMiddleLast />

      <MySelfSocial />

      <MySelfSong />

      <MyPortfolios />
    </div>
  );
};

export default HomeScreen;