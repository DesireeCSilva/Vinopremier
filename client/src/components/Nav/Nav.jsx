import React from 'react'
import Styled from "styled-components";

const NavContainer = Styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;

  img {
    
    width: 100%;
    height: 100%;
  }

`;

const Nav = () => {
  return (
    <NavContainer>
      <img src="../../src/assets/images/header.png" alt="imagen navbar" />
    </NavContainer>
  )
}

export default Nav