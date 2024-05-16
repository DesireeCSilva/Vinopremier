import React from 'react';
import Styled from 'styled-components';
import imageMobile from '/src/assets/images/header-mobile.png';
import imageDesktop from '/src/assets/images/header.png';

const NavContainer = Styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    img.navbar {
      content: url(${imageMobile});
      display: flex;
      justify-content: center;
      top: 0;
      width: 100%;
    }
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <img className='navbar' src={imageDesktop} alt="imagen navbar" />
    </NavContainer>
  );
}

export default Nav;