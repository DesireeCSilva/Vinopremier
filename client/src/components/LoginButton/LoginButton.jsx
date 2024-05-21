import React from 'react'
import { useNavigate } from 'react-router-dom'




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
            marginRight:'2.1rem', 
            background:'#AC946A',
            textAlign: 'center' 
        }} onClick={() => navigate (`/login`)} >INICIA SESIÓN</button>
    </div>
    )
}

export default LoginButton


