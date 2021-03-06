import React from 'react';

import './BtnHover.scss';

const BtnHover = ({ nameClass, text1, text2, ...otherProps }) => {
  return (
    <button className={`btn ${nameClass}`} {...otherProps}>
      <span className='btn__visible'>{text1}</span>
      <span className='btn__invisible'>{text2}</span>
    </button>
  );
};

export default BtnHover;