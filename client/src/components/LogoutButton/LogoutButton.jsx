import React from 'react'
import { useUserContext } from '../../context/UserContext'

const LogoutButton = () => {
    const { setUser, setIsAuthenticated } = useUserContext();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.removeItem('id_user')
        
        setUser(null);
        setIsAuthenticated(false);
      };


  return (
    <button style={{ cursor: 'pointer', float: 'right', padding:'1.5vw', margin:'2vw', backgroundColor:'#ffffff',color: '#000000',border:'4px solid #000000' , fontWeight:'bold', fontSize:'2vw'}} onClick={handleLogout}>CERRAR SESIÓN</button>
  )
}

export default LogoutButton