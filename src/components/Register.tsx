/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import '../css/register.css';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [successMessage, setSuccessMessage] = useState(''); 

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(''); 
    setSuccessMessage(''); 

    try {
      const response = await fetch('http://localhost:4002/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao cadastrar');
      }

      const data = await response.json();


      console.log('Cadastro bem-sucedido:', data);
      setSuccessMessage('Cadastro realizado com sucesso!'); 
   
      setName('');
      setEmail('');
      setPassword('');

      window.location.href = '/'; 

    } catch (err: any) {
      console.error('Erro:', err);
      setError(err.message); 
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Cadastro</h1>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Cadastrar</button>
          {error && <p className="error-message">{error}</p>} 
          {successMessage && <p className="success-message">{successMessage}</p>} 
        </form>
      </div>
    </div>
  );
};

export default Register;