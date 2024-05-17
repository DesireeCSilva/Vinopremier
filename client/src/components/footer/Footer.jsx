import React from "react";
import Styled from "styled-components";

const FooterContainer = Styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  bottom: 0;
  float: bottom;

  img {
    width: 100%;
    height: 30%;
  }


`;

const Footer = () => {
  return (
    
    <FooterContainer>
    <img src="../../src/assets/images/footer.PNG" alt="" />
    </FooterContainer>
    
  )
}

export default Footer