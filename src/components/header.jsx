import React from 'react';
import Logo from '../Images/Drive-informed-logo.png';

const Header = () => (
  <div>
    <div>
      <h1>
        <img className="logo-class" src={Logo} alt="Drive Informed" height="45" width="70" hspace="25" />
          Drive Informed
      </h1>
    </div>
  </div>
);

export default Header;
