import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ListaFuncionarios() {
  const navigate = useNavigate();

  // Lista simulada de funcionários
  const [funcionarios, setFuncionarios] = useState([
    { id: 1, nome: 'João Silva', cargo: 'Gerente' },
    { id: 2, nome: 'Maria Souza', cargo: 'Vendedora' },
    { id: 3, nome: 'Carlos Pereira', cargo: 'Estoquista' }
  ]);

  const handleExcluir = (id) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir este funcionário?');
    if (confirmacao) {
      const novaLista = funcionarios.filter((f) => f.id !== id);
      setFuncionarios(novaLista);
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
    //background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  };

  const tableStyle = {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    padding: '20px'
  };

  const thStyle = {
    borderBottom: '2px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    borderRadius: '8px'
  };

  const tdStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd'
  };

  const buttonStyle = {
    padding: '6px 12px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    backgroundColor: '#cc0000',
    color: 'white',
    marginRight: '8px'
  };

  const returnButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
    marginTop: '16px'
  };

  return (
    <div style={containerStyle}>
      <div style={tableStyle}>
        <h2 style={{ textAlign: 'center' }}>Lista de Funcionários</h2>
        {funcionarios.length > 0 ? (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Nome</th>
                <th style={thStyle}>Cargo</th>
                <th style={thStyle}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {funcionarios.map((func) => (
                <tr key={func.id}>
                  <td style={tdStyle}>{func.id}</td>
                  <td style={tdStyle}>{func.nome}</td>
                  <td style={tdStyle}>{func.cargo}</td>
                  <td style={tdStyle}>
                    <button
                      style={buttonStyle}
                      onClick={() => handleExcluir(func.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: 'center' }}>Nenhum funcionário cadastrado.</p>
        )}
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={handleReturn}
            style={returnButtonStyle}
          >
            Retornar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListaFuncionarios;
