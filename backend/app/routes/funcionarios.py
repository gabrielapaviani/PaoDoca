from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.funcionario import FuncionarioCreate, FuncionarioOut
from app.models.funcionario import Funcionario
from app.database.database import get_db

router = APIRouter()

@router.post("/", response_model=FuncionarioOut)
def cadastrar_funcionario(data: FuncionarioCreate, db: Session = Depends(get_db)):
    funcionario = Funcionario(**data.dict())
    db.add(funcionario)
    db.commit()
    db.refresh(funcionario)
    return funcionario

@router.get("/", response_model=list[FuncionarioOut])
def listar_funcionarios(db: Session = Depends(get_db)):
    return db.query(Funcionario).all()

@router.delete("/{id}")
def deletar_funcionario(id: int, db: Session = Depends(get_db)):
    funcionario = db.query(Funcionario).filter(Funcionario.id == id).first()
    if not funcionario:
        raise HTTPException(status_code=404, detail="Funcionário não encontrado")
    db.delete(funcionario)
    db.commit()
    return {"detail": "Funcionário excluído com sucesso"}






