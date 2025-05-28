import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Lista inicial de produtos (antes era const products = [...])
const initialProducts = [
  { codigo: '001', descricao: 'Descrição do Produto A', preco: '10.00', quantidade: 50 },
  { codigo: '002', descricao: 'Descrição do Produto B', preco: '25.00', quantidade: 30 },
  { codigo: '003', descricao: 'Descrição do Produto C', preco: '15.00', quantidade: 20 },
];

function ProductList() {
  const [searchCode, setSearchCode] = useState('');
  const [products, setProducts] = useState(initialProducts); // Agora estado mutável
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchCode(e.target.value);
  };

  const handleExcluir = (codigo) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      setProducts((prev) => prev.filter((p) => p.codigo !== codigo));
    }
  };

  const handleReturn = () => {
    navigate(-1);
  };

  // Filtra produtos conforme o código digitado
  const filteredProducts = products.filter(product =>
    product.codigo.includes(searchCode)
  );

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem'
  };

  const tableStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '800px',
    overflowX: 'auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.6rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  };

  const deleteButtonStyle = {
    padding: '0.4rem 0.8rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    backgroundColor: '#cc0000',
    color: 'white',
    marginLeft: '0.5rem'
  };

  const returnButtonStyle = {
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    backgroundColor: '#6c757d',
    color: 'white',
    marginTop: '1rem',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div style={tableStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Consulta de Produtos</h2>

        <input
          type="text"
          placeholder="Buscar por código"
          value={searchCode}
          onChange={handleSearch}
          style={inputStyle}
        />

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '0.8rem', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Código</th>
              <th style={{ padding: '0.8rem', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Descrição</th>
              <th style={{ padding: '0.8rem', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Preço</th>
              <th style={{ padding: '0.8rem', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Quantidade</th>
              <th style={{ padding: '0.8rem', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <tr key={index}>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>{product.codigo}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>{product.descricao}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>R$ {product.preco}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>{product.quantidade}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
                    <button
                      style={deleteButtonStyle}
                      onClick={() => handleExcluir(product.codigo)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ padding: '1rem', textAlign: 'center' }}>Nenhum produto encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>

        <button type="button" onClick={handleReturn} style={returnButtonStyle}>
          Retornar
        </button>
      </div>
    </div>
  );
}

export default ProductList;
