import React from 'react';

import BtnHover from '../BtnHover/BtnHover';
import './MyPortfolios.scss';

const MyPortfolios = () => {
  return (
    <div className='myPortfolios' id='myPortfolios-section'>
      <h2 className='myPortfolios__title'>My Portfolios:</h2>

      <div className='myPortfolios__btns'>
        <a
          href='https://delicious-m-hazara-77.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          <BtnHover 
            text1={'The delicious organic foods'}
            text2={'frontend project'}
            nameClass={'orang'}
          />
        </a>

        <a
          href='https://honarshop-m-hazara-77.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          <BtnHover 
            text1={'honarshop a place for artists'}
            text2={'front and backend project'}
            nameClass={'pink'}
          />
        </a>
      </div>
    </div>
  );
};

export default MyPortfolios;
