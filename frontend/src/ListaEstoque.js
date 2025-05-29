import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/lista-estoque');
      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      alert("Erro ao carregar produtos. Verifique o backend e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();

    const handleFocus = () => fetchProducts();
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const handleExcluir = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        const response = await fetch(`http://localhost:8000/lista-estoque/${id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          setProducts((prev) => prev.filter((p) => p.id !== id));
        } else {
          const error = await response.json();
          alert('Erro ao excluir produto: ' + (error.detail || response.statusText));
        }
      } catch (error) {
        alert('Erro de rede ao tentar excluir produto.');
      }
    }
  };

  const handleReturn = () => {
    navigate(-1);
  };

  const filteredProducts = products.filter(product =>
    product.descricao.toLowerCase().includes(search.toLowerCase())
  );

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
          placeholder="Buscar por descrição"
          value={search}
          onChange={handleSearch}
          style={inputStyle}
        />

        {loading ? (
          <p style={{ textAlign: 'center' }}>Carregando produtos...</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '0.8rem', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Descrição</th>
                <th style={{ padding: '0.8rem', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Preço</th>
                <th style={{ padding: '0.8rem', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Quantidade</th>
                <th style={{ padding: '0.8rem', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>{product.descricao}</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>R$ {product.valor_unitario.toFixed(2)}</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>{product.quantidade_estoque}</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
                      <button
                        style={deleteButtonStyle}
                        onClick={() => handleExcluir(product.id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ padding: '1rem', textAlign: 'center' }}>Nenhum produto encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        <button type="button" onClick={handleReturn} style={returnButtonStyle}>
          Retornar
        </button>
      </div>
    </div>
  );
}

export default ProductList;



