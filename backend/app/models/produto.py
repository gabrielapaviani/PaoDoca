from sqlalchemy import Column, Integer, String, Float, Date
from app.database.database import Base

class Produto(Base):
    __tablename__ = "produtos"
    id = Column(Integer, primary_key=True, index=True)
    descricao = Column(String, nullable=False)
    quantidade_estoque = Column(Integer, nullable=False)
    valor_unitario = Column(Float, nullable=False)
    validade = Column(Date, nullable=False)
