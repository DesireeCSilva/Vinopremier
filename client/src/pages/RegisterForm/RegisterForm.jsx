import React, { useState } from 'react';
import { createUser } from '../../services/authServices';
import { Link, useNavigate } from 'react-router-dom';
import '../RegisterForm/RegisterForm.css'

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const data = await createUser(name, email, phone, password);
      alert('Usuario registrado correctamente');
      localStorage.setItem('token', data.token);
      console.log(localStorage.getItem('token'));

    } catch (error) {
      console.error('Error:', error)
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='register-form_title'>
        <h2 className='register-form_title'>CREAR NUEVA CUENTA DE CLIENTE</h2>
      </div>

      <section className='register-form' >
        <div className='register-form_column'>
      <div className='register-form_label'>
        <label htmlFor="name">
          Nombre y Apellidos
          <br /><input type="text" value={name} onChange={(e) => {
            setName(e.target.value)}} required></input>
        </label>
      </div>

      <div className='register-form_label'>
        <label htmlFor='email'>
          Email
          <br /><input type="email" value={email} onChange={(e) =>{
            setEmail(e.target.value);
          }} required></input>
        </label>
      </div>
        </div>

        <div className='register-form_column'>
      <div className='register-form_label'>
        <label htmlFor='phone'>
          Teléfono
          <br /><input type="text" value={phone} onChange={(e) => {
            setPhone(e.target.value);
          }} required></input>
        </label>
      </div>

      <div className='register-form_label'>
        <label htmlFor='password'>
          Contraseña
          <br /><input type="password" value={password} onChange={(e) => {
            setPassword(e.target.password);
          }} required></input>
        </label>
      </div>
        </div>
      </section>
      <button className='register_form-button' type="submit">Regístrate</button>
    </form>
    </>
  )
}

export default RegisterForm