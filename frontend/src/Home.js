import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import minhaImagem from './assets/fundo.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar">
        
        <div className="nav-links">
          <span onClick={() => navigate('/cadastroproduto')}>Cadastrar Produtos</span>
          <span onClick={() => navigate('/cadastrofuncionario')}>Cadastrar Funcionários</span>
          <span onClick={() => navigate('/listaestoque')}>Listar Estoque</span>
         
          <span onClick={() => navigate('/listafuncionario')}>Listar Funcionários</span>
          
        </div>
        <span className="logout" onClick={handleLogout}>Sair</span>
      </nav>

      <div className="home-content">
      <img src={minhaImagem} alt="Descrição da imagem" />
      

      </div>
    </div>
  );
};

export default Home;
