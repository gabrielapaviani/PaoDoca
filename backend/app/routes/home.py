from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def home():
    return {"message": "Bem-vindo à tela principal do sistema!"}
