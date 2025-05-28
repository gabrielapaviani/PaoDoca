import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // se quiser estilizar

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simula uma verificação
    if (email === 'admin@teste.com' && senha === '123456') {
      
      navigate('/inicial');
    } else {
      alert('E-mail ou senha inválidos.');
    }
  };

  return (
    <div className="login-container">
      
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Senha:</label><br />
          <input 
            type="password" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)} 
            required
          />
        </div>
        <p>
        Não tem uma conta?
        <button onClick={() => navigate('/cadastro')} style={{ marginLeft: '10px' }}>
          Cadastrar
        </button>
        </p>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;