from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

db = []

class Paciente(BaseModel):
    nome: str
    oxigenacao: float
    batimento_cardiaco: float
    ultrassom: str

@app.get('/')
def index():
    return {'key': 'value'}

@app.get('/pacientes')
def get_pacientes():
    return db

@app.get('/paciente/{paciente_id}')
def get_paciente_id(paciente_id: int):
    return db[paciente_id-1]

@app.post('/paciente')
def create_paciente(paciente: Paciente):
    db.append(paciente.dict())
    return db[-1]

@app.delete('/paciente/{paciente_id}')
def delete_paciente(paciente_id: int):
    db.pop(paciente_id-1)
    return {"Paciente apagado"}