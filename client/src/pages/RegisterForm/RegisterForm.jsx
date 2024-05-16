import React, { useState } from 'react';
import { createUser } from '../../services/authServices';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../RegisterForm/RegisterForm.css'

const RegisterForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors }} = useForm();
  const { setIsAuthenticated } = useUserContext();

  const onSubmit = async(data) => {
    try {
      const response = await createUser(data);
      alert('Usuario registrado correctamente');
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='register-form_titlebox'>
        <h2 className='register-form_title'>CREAR NUEVA CUENTA DE CLIENTE</h2>
      </div>

      <section className='register-form' >
        <div className='register-form_column'>
      <div>
        <label className='register-form_label' htmlFor="name">
          Nombre y Apellidos
          <br /><input className='register-form_input' type="text" {...register('name')} required />
        </label>
      </div>

      <div>
        <label className='register-form_label' htmlFor='email'>
          Correo electrónico
          <br /><input className='register-form_input' type="email" {...register('email')}required />
        </label>
      </div>
        </div>

        <div className='register-form_column'>
        <div>
        <label className='register-form_label' htmlFor='phone'>
          Teléfono
          <br /><input className='register-form_input' type="text" {...register('phone')} required />
        </label>
      </div>

      <div>
        <label className='register-form_label' htmlFor='password'>
          Contraseña
          <br /><input className='register-form_input' type="password" {...register('password')} required />
        </label>
      </div>
        </div>
      </section>
      <button className='register-form_button' type="submit">REGÍSTRATE</button>
    </form>
    </>
  )
}

export default RegisterForm