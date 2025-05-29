from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, cadastro, funcionarios, produtos, home
from app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Pão Doca API", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/login", tags=["Login"])
app.include_router(cadastro.router, prefix="/cadastro", tags=["Cadastro"])
app.include_router(funcionarios.router, prefix="/cadastro-funcionario", tags=["Cadastro Funcionário"])
app.include_router(funcionarios.router, prefix="/lista-funcionarios", tags=["Lista Funcionários"])
app.include_router(produtos.router, prefix="/cadastro-produto", tags=["Cadastro Produto"])
app.include_router(produtos.router, prefix="/lista-estoque", tags=["Lista Estoque"])
app.include_router(home.router, prefix="/home", tags=["Home"])

@app.get("/")
def read_root():
    return {"message": "API do sistema Pão Doca"}

