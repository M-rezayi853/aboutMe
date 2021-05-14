import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer__links'>
        <li className='footer__item'>
          <Link className='footer__link' to='/'>
            find information
          </Link>
        </li>

        <li className='footer__item'>
          <Link className='footer__link' to='/'>
            contact us
          </Link>
        </li>

        <li className='footer__item'>
          <Link className='footer__link' to='/'>
            privacy
          </Link>
        </li>

        <li className='footer__item'>
          <Link className='footer__link' to='/'>
            work with us
          </Link>
        </li>

        <li className='footer__item'>
          <Link className='footer__link' to='/'>
            request proposal
          </Link>
        </li>
      </ul>

      <div className='footer__description'>
        <p>
          Built my{' '}
          <a
            className='footer__linkHerf'
            href='https://www.instagram.com/m_hazara_77'
            target='_blank'
            rel='noreferrer'
          >
            M_HAZARA_77
          </a>{' '}
          for his online course{' '}
          <a
            className='footer__linkHerf'
            href='https://www.instagram.com/m_hazara_77'
            target='_blank'
            rel='noreferrer'
          >
            ADVENCED CSS AND SASS.
          </a>
          Copyright © by Mahdi Rezayi.
          <br />
          You are 100% allowed to use this webpage for both personal and
          commercial use, but NOT to claim it as your design. A credit to the
          original author, Mahdi rezayi, is of course highly appreciated!
        </p>
      </div>
    </div>
  );
};

export default Footer;
