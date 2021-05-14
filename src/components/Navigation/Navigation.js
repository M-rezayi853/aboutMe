import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Navigation.scss';

const Navigation = () => {
  return (
    <ul className='navigation'>
      <div className='navigation__logo'>
        <li className='navigation__item'>
          <Link className='navigation__link navigation__link-logo' to='/'>M_HAZARA_77</Link>
        </li>
      </div>

      <div className='navigation__items'>
        <li className='navigation__item'>
          <Link className='navigation__link' to='/#mySelf-1-section'>Hi Me1</Link>
        </li>

        <li className='navigation__item'>
          <Link className='navigation__link' to='/#mySelf-2-section'>Hi Me2</Link>
        </li>

        <li className='navigation__item'>
          <Link className='navigation__link' to='/#mySocial-section'>Social</Link>
        </li>

        <li className='navigation__item'>
          <Link className='navigation__link' to='/#myPortfolios-section'>Portfolios</Link>
        </li>
      </div>
    </ul>
  );
};

export default Navigation;