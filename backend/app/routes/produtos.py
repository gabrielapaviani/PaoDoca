from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.produto import ProdutoCreate, ProdutoOut
from app.models.produto import Produto
from app.database import get_db

router = APIRouter()

@router.post("/", response_model=ProdutoOut)
def cadastrar_produto(data: ProdutoCreate, db: Session = Depends(get_db)):
    produto = Produto(**data.dict())
    db.add(produto)
    db.commit()
    db.refresh(produto)
    return produto

@router.get("/", response_model=list[ProdutoOut])
def listar_estoque(db: Session = Depends(get_db)):
    return db.query(Produto).all()
