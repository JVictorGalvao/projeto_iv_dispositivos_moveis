from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
from fastapi.encoders import jsonable_encoder

app = FastAPI()

db = []
class Oxigenacao(BaseModel):
    oxigenacao: float
    severidade_oxigenacao: float
class BatimentoCardiaco(BaseModel):
    batimento_cardiaco: float
    severidade_batimento_cardiaco: float
class Ultrassom(BaseModel):
    ultrassom: str

class Intervencao(BaseModel):
    intervencao: str

class Dados(BaseModel):
    oxigenacao: float
    severidade_oxigenacao: float
    batimento_cardiaco: float
    severidade_batimento_cardiaco: float

class Paciente(BaseModel):
    nome: str = ''
    oxigenacao: float
    severidade_oxigenacao: float
    batimento_cardiaco: float
    severidade_batimento_cardiaco: float
    ultrassom: str = ''
    intervencao: str = ''


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

@app.put('/paciente/{paciente_id}/batimentos')
def update_batimentos(paciente_id: int, dados: BatimentoCardiaco):
    stored_paciente_data = db[paciente_id-1]
    stored_paciente_model = Paciente(**stored_paciente_data)
    update_data = dados.dict(exclude_unset=True)
    updated_paciente = stored_paciente_model.copy(update=update_data)
    db[paciente_id-1] = jsonable_encoder(updated_paciente)
    return updated_paciente

@app.put('/paciente/{paciente_id}/oxigenacao')
def update_oxigenacao(paciente_id: int, dados: Oxigenacao):
    stored_paciente_data = db[paciente_id-1]
    stored_paciente_model = Paciente(**stored_paciente_data)
    update_data = dados.dict(exclude_unset=True)
    updated_paciente = stored_paciente_model.copy(update=update_data)
    db[paciente_id-1] = jsonable_encoder(updated_paciente)
    return updated_paciente

@app.put('/paciente/{paciente_id}/ultrassom')
def update_ultrassom(paciente_id: int, dados: Ultrassom):
    stored_paciente_data = db[paciente_id-1]
    stored_paciente_model = Paciente(**stored_paciente_data)
    update_data = dados.dict(exclude_unset=True)
    updated_paciente = stored_paciente_model.copy(update=update_data)
    db[paciente_id-1] = jsonable_encoder(updated_paciente)
    return updated_paciente

@app.put('/paciente/{paciente_id}/intervencao')
def update_intervencao(paciente_id: int, dados: Intervencao):
    stored_paciente_data = db[paciente_id-1]
    stored_paciente_model = Paciente(**stored_paciente_data)
    update_data = dados.dict(exclude_unset=True)
    updated_paciente = stored_paciente_model.copy(update=update_data)
    db[paciente_id-1] = jsonable_encoder(updated_paciente)
    return updated_paciente

@app.put('/paciente/{paciente_id}/dados')
def update_dados(paciente_id: int, dados: Dados):
    stored_paciente_data = db[paciente_id-1]
    stored_paciente_model = Paciente(**stored_paciente_data)
    update_data = dados.dict(exclude_unset=True)
    updated_paciente = stored_paciente_model.copy(update=update_data)
    db[paciente_id-1] = jsonable_encoder(updated_paciente)
    return updated_paciente

@app.delete('/paciente/{paciente_id}')
def delete_paciente(paciente_id: int):
    db.pop(paciente_id-1)
    return {"Paciente apagado"}