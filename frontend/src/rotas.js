import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';
import CadastroProduto from './CadastroProduto'
import CadastroFuncionario from './CadastroFuncionario'
import ListaEstoque from './ListaEstoque'
import ListaFuncionario from './ListaFuncionario'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/inicial" element={<Home />} />
        <Route path="/cadastroproduto" element={<CadastroProduto />} />
        <Route path="/cadastrofuncionario" element={<CadastroFuncionario />} />
        <Route path="/listaestoque" element={<ListaEstoque />} />
        
        <Route path="/listafuncionario" element={<ListaFuncionario />} />       
      </Routes>
    </Router>
  );
};

export default AppRoutes;
