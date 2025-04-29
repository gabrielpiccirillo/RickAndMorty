/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import '../css/login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:4002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email, 
          password 
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao fazer login');
      }

      const data = await response.json();

      localStorage.setItem('token', data.auth.token);
      localStorage.setItem('name', data.auth.name)

      window.location.href = '/home'; 

    } catch (err: any) {
      console.error('Erro:', err);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Conecte-se</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Entrar</button>
          {error && <p className="error-message">{error}</p>}
          <div className="create-login-container">
            <a href="/register">Criar login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;