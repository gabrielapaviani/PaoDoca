from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserOut
from app.models.user import User
from app.database.database import get_db

router = APIRouter()

@router.post("/", response_model=UserOut)
def cadastrar_usuario(data: UserCreate, db: Session = Depends(get_db)):
    usuario_existente = db.query(User).filter(User.email == data.email).first()
    if usuario_existente:
        raise HTTPException(status_code=400, detail="E-mail já cadastrado")
    user = User(
        full_name=data.full_name,
        email=data.email,
        hashed_password=data.password
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

