import requests
import json

def cria_paciente():
    payload = {'nome': 'Joao', 'oxigenacao': 1, 'batimento_cardiaco': 1, 'ultrassom': ''}
    headers = {'content-type': 'application/json'}

    r=requests.post('http://127.0.0.1:8000/paciente', data=json.dumps(payload), headers=headers)

    print(r.text)

def atualiza_batimentos(batimento: int):
    headers = {'content-type': 'application/json'}
    payload = {'batimento_cardiaco': batimento}
    r = requests.put('http://127.0.0.1:8000/paciente/1/batimentos', data=json.dumps(payload), headers=headers)

    print(r.text)

cria_paciente()
atualiza_batimentos(10)

