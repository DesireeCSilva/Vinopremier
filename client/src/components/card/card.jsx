import React from "react";
import Styled from "styled-components";

export default Card = ({ title, description, image }) => {
    return (
        <CardContainer>
            <Image src={image} alt={title} />
            <Title>{title}</Title>
            <Counter>AÑADIR <Icon>Carrito</Icon></Counter>
        </CardContainer>
    );
    }

const CardContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;


`;
