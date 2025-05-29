import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    codigo: '',
    descricao: '',
    preco: '',
    quantidade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      descricao: product.descricao,
      quantidade_estoque: parseInt(product.quantidade),
      valor_unitario: parseFloat(product.preco),
      validade: "2025-12-31" // valor fixo por enquanto
    };

    try {
      const response = await fetch("http://localhost:8000/cadastro-produto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert("Produto cadastrado com sucesso!");
        setProduct({
          codigo: '',
          descricao: '',
          preco: '',
          quantidade: ''
        });
      } else {
        const error = await response.json();
        alert("Erro ao cadastrar produto: " + error.detail);
      }
    } catch (error) {
      alert("Erro de rede ao tentar cadastrar produto.");
    }
  };

  const handleReturn = () => {
    navigate(-1);
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '400px'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.6rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  };

  const buttonStyle = {
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    marginRight: '1rem',
    backgroundColor: '#2575fc',
    color: 'white'
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Cadastro de Produto</h2>

        <label>Código:</label>
        <input
          type="text"
          name="codigo"
          value={product.codigo}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Descrição:</label>
        <textarea
          name="descricao"
          value={product.descricao}
          onChange={handleChange}
          style={{ ...inputStyle, height: '80px', resize: 'none' }}
          required
        />

        <label>Preço:</label>
        <input
          type="number"
          name="preco"
          value={product.preco}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Quantidade:</label>
        <input
          type="number"
          name="quantidade"
          value={product.quantidade}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={buttonStyle}>Cadastrar</button>
          <button type="button" onClick={handleReturn} style={{ ...buttonStyle, backgroundColor: '#6c757d' }}>
            Retornar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;


