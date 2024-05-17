import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginButton = () => {
    const navigate = useNavigate();

    return (
    <div>
        <button style={{ cursor:'pointer', float: 'right', fontFamily: 'Gotham', fontSize: '1rem', color:'#fff', background:'#000', border: 'none', padding:'2%', marginTop: '2rem', height: '4.4rem', cursor: 'pointer', letterSpacing: '0.09em', marginRight:'2.1rem', background:'#AC946A'}} onClick={() => navigate (`/login`)} >INICIA SESIÓN</button>
    </div>
    )
}

export default LoginButton


