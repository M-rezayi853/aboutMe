import React from 'react';

import BtnSocial from '../BtnSocial/BtnSocial';
import './MySelfSocial.scss';

const MySelfSocial = () => {
  return (
    <div className='mySelfSocial' id='mySocial-section'>
      <h2 className='mySelfSocial__title'>I'm on social media:</h2>

      <div className='mySelfSocial__links'>
        <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/m_hazara_77/'>
          <BtnSocial instagram>instagram</BtnSocial>
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://t.me/Rainy_evening_01'>
          <BtnSocial telegram>telegram</BtnSocial>
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/M-rezayi853'>
          <BtnSocial github>github</BtnSocial>
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/mahdi-rezayi-a53078210/'>
          <BtnSocial linkedin>linkedin</BtnSocial>
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/MahdiRezayi11'>
          <BtnSocial twitter>twitter</BtnSocial>
        </a>
      </div>
    </div>
  );
};

export default MySelfSocial;
