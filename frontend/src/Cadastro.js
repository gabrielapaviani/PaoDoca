import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // pode usar o mesmo estilo do login

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Aqui seria o envio para o backend
    alert(`Usuário ${nome} cadastrado com sucesso!`);
    // Limpar os campos
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
  };

  return (
    <div className="login-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <div>
          <label>Nome:</label><br />
          <input 
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required 
          />
        </div>
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
        <div>
          <label>Confirmar Senha:</label><br />
          <input 
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required 
          />
        </div>
        <p>
        Já tem uma conta?
        <button onClick={() => navigate('/login')} style={{ marginLeft: '10px' }}>
          Login
        </button>
      </p>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
