import React from 'react';

import meImg from '../../assets/imgMySelf2.jpg';
import parkImg from '../../assets/imgPark.jpg';
import reactImg from '../../assets/imgReact.jpg';
import dogImg from '../../assets//imgDog.jpg';
import './MySelfBottom.scss';

const MySelfBottom = () => {
  return (
    <div className='mySelfBottom' id='mySelf-2-section'>
      <div className='mySelfBottom__other'>
        <div className='mySelfBottom__titles'>
          <h1>and</h1>
          <h2>My social name is m_hazara_77</h2>
          <h2 className='mySelfBottom__titles mySelfBottom__titles-3'>MY FAVORITES:</h2>
        </div>

        <div className='mySelfBottom__favs'>
          <div className='mySelfBottom__fav'>
            <img src={parkImg} alt='park min young' />

            <div>
              <p className='mySelfBottom__text'>Park Min Young</p>
              <br />
              <p className='mySelfBottom__text'>favorite actor</p>
            </div>
          </div>

          <div className='mySelfBottom__fav'>
            <img src={reactImg} alt='react' />

            <div>
              <p className='mySelfBottom__text'>react developer</p>
              <br />
              <p className='mySelfBottom__text'>Exciting technology</p>
            </div>
          </div>
          
          <div className='mySelfBottom__fav'>
            <img src={dogImg} alt='dog' />

            <div>
              <p className='mySelfBottom__text'>my brother's dog</p>
              <br />
              <p className='mySelfBottom__text'>lovely dog</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mySelfBottom__me'>
        <img className='mySelfBottom__img' src={meImg} alt='me' />
        <figcaption className='mySelfBottom__caption'>this is me<br />I'm mahdi</figcaption>
      </div>
    </div>
  );
};

export default MySelfBottom;