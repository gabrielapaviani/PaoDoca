import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeForm() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    nome: '',
    cargo: '',
    salario: '',
    dataAdmissao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Funcionário cadastrado:', employee);
    alert('Funcionário cadastrado com sucesso!');
    setEmployee({
      nome: '',
      cargo: '',
      salario: '',
      dataAdmissao: ''
    });
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
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Cadastro de Funcionário</h2>

        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={employee.nome}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Cargo:</label>
        <input
          type="text"
          name="cargo"
          value={employee.cargo}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Salário:</label>
        <input
          type="number"
          name="salario"
          value={employee.salario}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Data de Admissão:</label>
        <input
          type="date"
          name="dataAdmissao"
          value={employee.dataAdmissao}
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

export default EmployeeForm;
