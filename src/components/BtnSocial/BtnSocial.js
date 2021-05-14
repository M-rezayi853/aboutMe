import React from 'react';

import { ReactComponent as IconInstagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as IconTelegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as IconGithub } from '../../assets/icons/github.svg';
import { ReactComponent as IconLinkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as IconTwitter } from '../../assets/icons/twitter.svg';
import './BtnSocial.scss';


const BtnSocial = ( { children, instagram, telegram, github, linkedin, twitter } ) => {
    return (
      <div className={`btnSocial 
        ${instagram ? 'instagram' 
        : telegram ? 'telegram' 
        : github ? 'github' 
        : linkedin ? 'linkedin' 
        : twitter ? 'twitter' 
        : ''}`}>
        <div className={`btnSocial__icon 
          ${instagram ? 'instagram' 
          : telegram ? 'telegram' 
          : github ? 'github' 
          : linkedin ? 'linkedin'
          : twitter ? 'twitter'
          : ''}`}>
          {
            instagram ? <IconInstagram className='btnSocial__svg'/> :
            telegram ? <IconTelegram className='btnSocial__svg'/> :
            github ? <IconGithub className='btnSocial__svg'/> : 
            linkedin ? <IconLinkedin className='btnSocial__svg' /> :
            twitter ? <IconTwitter className='btnSocial__svg' /> :
            null
          }
        </div>

        <button className='btnSocial__btn'>{children}</button>
      </div>
    );
};


export default BtnSocial;