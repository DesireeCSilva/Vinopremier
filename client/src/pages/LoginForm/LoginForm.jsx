import React from 'react'
import { loginUser } from '../../services/authServices';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../LoginForm/LoginForm.css';
import { useUserContext } from '../../context/UserContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors }} = useForm();
  const { setIsAuthenticated } = useUserContext();

  const onSubmit = async(data) => {
    try {
      const response = await loginUser(data);
      alert(`Inicio de sesión correcto, bienvenido ${response.data.name}`);
      localStorage.setItem('token', response.token);
      setIsAuthenticated (true);
      console.log(localStorage.getItem('token'));
      navigate('/')

    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
      <p className='login-form_title' >Clientes registrados</p>
      <p className='login-form_subtitle'>Si tienes una cuenta inicia sesión con tu dirección de correo electrónico</p>
      <div>
        <label className='register-form_label' htmlFor="email">
          Correo electrónico <br />
          <input className='login-form_input' type="email" {...register('email')} required />
        </label>
      </div>

      <div>
        <label className='register-form_label' htmlFor="password">
          Contraseña <br />
          <input className='login-form_input' type="password" {...register('password')} required />
        </label>
      </div>
      <button className='register_form-button-login' type="submit">INICIAR SESIÓN</button>
      <p style={{ marginTop: '20px' }}>
        ¿Aún no tienes cuenta?{' '}
        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate (`/register`)}>
          Regístrate
        </span>
      </p>
    </form>
    </>
  )
}

export default LoginForm