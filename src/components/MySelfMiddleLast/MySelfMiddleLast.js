import React from 'react';

import plantImg1 from '../../assets/imgPlant1.jpg';
import plantImg2 from '../../assets/imgPlant2.jpg';
import './MySelfMiddleLast.scss';

const MySelfMiddleLast = () => {
  return (
    <div className='mySelfMiddleLast'>
        <div className='mySelfMiddleLast__plant mySelfMiddleLast__plant-1'>
          <img src={plantImg1} alt='portulacaria afra' />

          <div>
            <p className='mySelfMiddleLast__text'>portulacaria afra</p>
            <br />
            <p className='mySelfMiddleLast__text'>a special plant for me</p>
          </div>
        </div>

        <div className='mySelfMiddleLast__plant mySelfMiddleLast__plant-2'>
          <img src={plantImg2} alt='portulacaria afra' />

          <div>
            <p className='mySelfMiddleLast__text'>portulacaria afra</p>
            <br />
            <p className='mySelfMiddleLast__text'>a special plant for me</p>
          </div>
        </div>
    </div>
  );
};

export default MySelfMiddleLast;