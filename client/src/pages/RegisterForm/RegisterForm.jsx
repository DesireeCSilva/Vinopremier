import React, { useState } from 'react';
import { createUser } from '../../services/authServices';
import { Link, useNavigate } from 'react-router-dom';

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
      <div>
        <label htmlFor="name">
          Nombre y Apellidos
          <input type="text" value={name} onChange={(e) => {
            setName(e.target.value)}} required></input>
        </label>
      </div>

      <div>
        <label htmlFor='email'>
          Email
          <input type="email" value={email} onChange={(e) =>{
            setEmail(e.target.value);
          }} required></input>
        </label>
      </div>

      <div>
        <label htmlFor='phone'>
          Teléfono
          <input type="text" value={phone} onChange={(e) => {
            setPhone(e.target.value);
          }} required></input>
        </label>
      </div>

      <div>
        <label htmlFor='password'>
          Contraseña
          <input type="password" value={password} onChange={(e) => {
            setPassword(e.target.password);
          }} required></input>
        </label>
      </div>
      <button type="submit">Regístrate</button>
    </form>
    </>
  )
}

export default RegisterForm