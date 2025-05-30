from pydantic import BaseModel
from datetime import date

class FuncionarioBase(BaseModel):
    nome_completo: str
    tipo_documento: str
    documento: str
    telefone: str
    endereco: str
    tipo_funcionario: str
    funcao: str
    departamento: str
    data_admissao: date

class FuncionarioCreate(FuncionarioBase):
    pass

class FuncionarioOut(BaseModel):
    id: int
    nome: str
    cargo: str

    class Config:
        from_attributes = True




