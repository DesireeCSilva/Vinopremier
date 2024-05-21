import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const LoginButtonContainer = styled.div`

    button {
        cursor: pointer;
        float: right;
        font-family: Gotham;
        font-size: 1.25vw;
        color: #fff;
        background: #000;
        border: none;
        padding: 1vw;
        margin-top: 2.5vw;
        cursor: pointer;
        letter-spacing: 0.09em;
        margin-right: 50px;
        background: #AC946A;
        text-align: center;
    }
`;




const LoginButton = () => {
    const navigate = useNavigate();

    return (
        <div>
        <button style={{ 
            cursor:'pointer', 
            float: 'right', 
            fontFamily: 'Gotham', 
            fontSize: '1.25vw', 
            color:'#fff', 
            background:'#000', 
            border: 'none', 
            padding:'1vw', 
            marginTop: '2.5vw', 
            cursor: 'pointer', 
            letterSpacing: '0.09em', 
            marginRight:'6vw', 
            background:'#AC946A',
            textAlign: 'center' 
        }} onClick={() => navigate (`/login`)} >INICIA SESIÓN</button>
    </div>
    )
}

export default LoginButton


