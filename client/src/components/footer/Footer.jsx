import React from "react";
import Styled from "styled-components";


export default Footer = () => {
    return (
        <FooterContainer>
        <FooterImg>Footer</FooterImg>
        </FooterContainer>
    );
    }

const FooterContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    border: 1px solid #000;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
`;