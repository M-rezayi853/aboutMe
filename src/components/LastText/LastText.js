import React from 'react';

import { ReactComponent as CodeIcon } from '../../assets/icons/code1.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as CoffeeIcon } from '../../assets/icons/coffee.svg';
import './LastText.scss';

const LastText = () => {
  return (
    <div className='lastText'>
      <p className='lastText__description'>
        <CodeIcon className='lastText__icon' /> with <HeartIcon className='lastText__icon lastText__icon-heart' /> and <CoffeeIcon className='lastText__icon' /> by  M_HAZARA_77
      </p>
    </div>
  );
};

export default LastText;