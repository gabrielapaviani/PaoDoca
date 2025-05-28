from pydantic import BaseModel
from datetime import date
from typing import Optional

class ProdutoBase(BaseModel):
    descricao: str
    quantidade_estoque: int
    valor_unitario: float
    validade: Optional[date] = None

class ProdutoCreate(ProdutoBase):
    pass

class ProdutoOut(ProdutoBase):
    id: int

    class Config:
        orm_mode = True
