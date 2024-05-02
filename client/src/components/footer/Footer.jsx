import React from "react";
import Styled from "styled-components";

const FooterContainer = Styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Footer = () => {
  return (
    
    <FooterContainer>
    <img src="src/assets/images/footer.PNG" alt="" />
    </FooterContainer>
    
  )
}

export default Footer