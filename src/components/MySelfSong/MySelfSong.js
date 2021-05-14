import React from 'react';

import alanWalkerImg from '../../assets/alanWalker.jpg';
import alanWalkerSong from '../../assets/audio/Faded.mp3';
import sirvanSong from '../../assets/audio/Sirvan-Khosravi.mp3';
import Player from '../Player/Player';
import './MySelfSong.scss';

const MySelfSong = () => {
  return (
    <div className='mySelfSong'>
      <div className='mySelfSong__songs'>
        <h2 className='mySelfSong__title'>My Favorite Songs:</h2>

        <div className='mySelfSong__song'>
          <div className='mySelfSong__player'>
            <img
              className='mySelfSong__img'
              src={alanWalkerImg}
              alt='alan walker'
            />
          </div>

          <div className='mySelfSong__player'>
            <div className='mySelfSong__box mySelfSong__box-1'>
              <div className='mySelfSong__des'>
                <span>Alan Walker</span>
                <span>Faded - best song 2015</span>
              </div>
              <Player url={alanWalkerSong} />
            </div>

            <div className='mySelfSong__box mySelfSong__box-2'>
              <div className='mySelfSong__des'>
                <span>Sirvan Khosravi</span>
                <span>Dost daram zendgi ro</span>
              </div>
              <Player url={sirvanSong} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className='mySelfSong__music'>
        <h2 className='mySelfSong__title'>My Favorite Songs:</h2>

        <div className='mySelfSong__img'>
          <img src={alanWalkerImg} alt='alan walker' />

          <div className='mySelfSong__player'>
            <div>
              <Player url={alanWalkerSong} />

              <div>
                <p className='mySelfSong__text'>alan walker</p>
                <br />
                <p className='mySelfSong__text'>faded - the best song 2015</p>
              </div>
            </div>

            <div>
              <Player url={sirvanSong} />

              <div>
                <p className='mySelfSong__text'>sirvan khosravi</p>
                <br />
                <p className='mySelfSong__text'>dost daram zendgi ro</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='mySelfSong__description'>
        <h2 className='mySelfSong__title'>My Favorite Text:</h2>

        <p> "go to bed with dreams and wake up with plans."</p>
      </div>
    </div>
  );
};

export default MySelfSong;
