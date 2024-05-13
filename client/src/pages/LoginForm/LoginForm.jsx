import React from 'react'
import { loginUser } from '../../services/authServices';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const LoginForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors }} = useForm();

  const onSubmit = async(data) => {
    try {
      const response = await loginUser(data);
      alert(`Inicio de sesión correcto, bienvenido ${response.data.name}`);
      localStorage.setItem('token', response.token);
      console.log(localStorage.getItem('token'));
      navigate('/')

    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">
          Email
          <input type="email" {...register('email')} required />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Contraseña
          <input type="password" {...register('password')} required />
        </label>
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    </>
  )
}

export default LoginForm