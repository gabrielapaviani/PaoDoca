from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.user import UserLogin, UserOut
from app.models.user import User
from app.database import get_db

router = APIRouter()

@router.post("/", response_model=UserOut)
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()
    if not db_user or db_user.hashed_password != user.password:
        raise HTTPException(status_code=400, detail="Credenciais inválidas")
    return db_user
