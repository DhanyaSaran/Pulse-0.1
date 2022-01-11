import React from 'react'
import LogoImg from '../../../../assets/episilia_logo_edited.webp';

import  "../styles/logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoImg} alt="No" height="50px"/>
    </div>
  )
}

export default Logo;
