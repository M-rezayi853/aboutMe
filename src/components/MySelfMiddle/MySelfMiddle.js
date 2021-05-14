import React from 'react';

import bridgeImg1 from '../../assets/imgBridge1.jpg';
import bridgeImg2 from '../../assets/imgBridge2.jpg';
import bridgeImg3 from '../../assets/imgBridge3.jpg';
import './MySelfMiddle.scss';

const MySelfMiddle = () => {
  return (
    <div className='mySelfMiddle'>
      <div className='mySelfMiddle__description'>
        <p>
          My name is mahdi rezayi.
          I'm a civil engineering student. I love technology and programming. My favorite sport is futsal. I like irrigation and growing plants. my favorite structure is oresund bridge that's located between sweden and denmark.
          <br />
          I love learning and getting new challenges in different situations.
        </p>
      </div>
        

      <div className='mySelfMiddle__favs'>
        <div className='mySelfMiddle__side'>
          <img src={bridgeImg2} alt='resund bridge' />
        </div>

        <div className='mySelfMiddle__center'>
          <img src={bridgeImg1} alt='resund bridge' />

          <div>
            <span className='mySelfMiddle__text'>oresund bridge</span>
            <br />
            <span className='mySelfMiddle__text'>between sweden and denmark</span>
          </div>
        </div>

        <div className='mySelfMiddle__side'>
          <img src={bridgeImg3} alt='resund bridge' />
        </div>
      </div>
    </div>
  );
};

export default MySelfMiddle;