import requests
import json
import random
from time import sleep

def cria_paciente(nome: str):
    payload = {'nome': nome, 'oxigenacao': 0, 'batimento_cardiaco': 0, 'ultrassom': ''}
    headers = {'content-type': 'application/json'}

    r=requests.post('http://127.0.0.1:8000/paciente', data=json.dumps(payload), headers=headers)

    print(r.text)

def atualiza_batimentos(batimento: int):
    headers = {'content-type': 'application/json'}
    payload = {'batimento_cardiaco': batimento}
    r = requests.put('http://127.0.0.1:8000/paciente/1/batimentos', data=json.dumps(payload), headers=headers)

    print(r.text)

def atualiza_oxigenacao(oxigenacao: int):
    headers = {'content-type': 'application/json'}
    payload = {'oxigenacao': oxigenacao}
    r = requests.put('http://127.0.0.1:8000/paciente/1/oxigenacao', data=json.dumps(payload), headers=headers)

    print(r.text)

def atualiza_ultrassom(ultrassom: str):
    headers = {'content-type': 'application/json'}
    payload = {'ultrassom': ultrassom}
    r = requests.put('http://127.0.0.1:8000/paciente/1/ultrassom', data=json.dumps(payload), headers=headers)

    print(r.text)

def main():
    cria_paciente("João")
    a = 0
    while(1):
        atualiza_oxigenacao(random.randint(0,100))
        atualiza_batimentos(random.randint(0,100))
        sleep(5)
        a = a + 1
        if (a == 2):
            atualiza_ultrassom("teste")
            a=0

main()




