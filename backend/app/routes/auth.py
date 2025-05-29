from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.post("/")
def login(email: str, password: str):
    if email == "admin@admin.com" and password == "admin":
        return {"message": "Login realizado com sucesso"}
    raise HTTPException(status_code=401, detail="Credenciais inválidas")

