import React from 'react'
import { useUserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
    const { setUser, setIsAuthenticated } = useUserContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.removeItem('id')
        
        setIsAuthenticated(false);

        alert("Se ha cerrado sesión correctamente");
        navigate('/');
      };

  return (
    <button style={{ cursor:'pointer', float: 'right', fontFamily: 'Gotham', fontSize: '1rem', color:'#fff', background:'#000', border: 'none', padding:'2%', marginTop: '2rem', height: '4.4rem', cursor: 'pointer', letterSpacing: '0.09em', marginRight:'2.1rem'}} onClick={handleLogout}>CERRAR SESIÓN</button>
  )
}

export default LogoutButton