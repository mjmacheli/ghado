import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/fashionC.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='home-nav' to='/'>
        Home
      </Link>
      <Link className='option' to='/category'>
        ABOUT
      </Link>
      <Link className='option' to='/category'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
