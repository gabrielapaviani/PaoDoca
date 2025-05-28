from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserOut
from app.models.user import User
from app.database import get_db

router = APIRouter()

@router.post("/", response_model=UserOut)
def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(
        full_name=user.full_name,
        email=user.email,
        hashed_password=user.password  # No real app, use hashed password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
