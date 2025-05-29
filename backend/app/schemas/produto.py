from pydantic import BaseModel
from datetime import date

class ProdutoCreate(BaseModel):
    descricao: str
    quantidade_estoque: int
    valor_unitario: float
    validade: date

class ProdutoOut(ProdutoCreate):
    id: int

    class Config:
        from_attributes = True

