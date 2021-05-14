import React from 'react';

import meImg from '../../assets/imgMySelf1.jpg';
import mikasaImg from '../../assets/imgMikasa.jpg';
import messiImg from '../../assets/imgMessi.jpg';
import catsImg from '../../assets/imgCats.jpg';
import './MySelfTop.scss';

const MySelfTop = () => {
  return (
    <div className='mySelfTop' id='mySelf-1-section'>
      <div className='mySelfTop__me'>
        <img className='mySelfTop__img' src={meImg} alt='me' />
        <figcaption className='mySelfTop__caption'>this is me<br />I'm mahdi</figcaption>
      </div>

      <div className='mySelfTop__other'>
        <div className='mySelfTop__titles'>
          <h1>Hello</h1>
          <h2>My name is mahdi rezayi</h2>
          <h2 className='mySelfTop__titles mySelfTop__titles-3'>MY FAVORITES:</h2>
        </div>

        <div className='mySelfTop__favs'>
          <div className='mySelfTop__fav'>
            <img src={mikasaImg} alt='mikasa' />

            <div>
              <p className='mySelfTop__text'>mikasa ackerman</p>
              <br />
              <p className='mySelfTop__text'>attack on titan</p>
            </div>
          </div>

          <div className='mySelfTop__fav'>
            <img src={messiImg} alt='messi' />

            <div>
              <p className='mySelfTop__text'>messi & ronaldinho</p>
              <br />
              <p className='mySelfTop__text'>fc barcelona</p>
            </div>
          </div>
          
          <div className='mySelfTop__fav'>
            <img src={catsImg} alt='cats' />

            <div>
              <p className='mySelfTop__text'>my brother's cats</p>
              <br />
              <p className='mySelfTop__text'>lovely cats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelfTop;