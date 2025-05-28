from sqlalchemy import Column, Integer, String, Date
from app.database import Base

class Funcionario(Base):
    __tablename__ = "funcionarios"

    id = Column(Integer, primary_key=True, index=True)
    nome_completo = Column(String, nullable=False)
    tipo_documento = Column(String, nullable=False)
    documento = Column(String, unique=True, nullable=False)
    telefone = Column(String, nullable=False)
    endereco = Column(String, nullable=False)
    tipo_funcionario = Column(String, nullable=False)
    funcao = Column(String, nullable=False)
    departamento = Column(String, nullable=False)
    data_admissao = Column(Date, nullable=False)
