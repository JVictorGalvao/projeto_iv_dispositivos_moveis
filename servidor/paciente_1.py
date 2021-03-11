import requests
import json
import random
from time import sleep

imagens = [
    'https://www.saudebemestar.pt/media/88211/ecografia-transfontanelar.jpg',
    'https://www.saudebemestar.pt/media/88212/eco-cerebral.jpg',
    'https://ars.els-cdn.com/content/image/1-s2.0-S1245178910701840-gr2e.jpg',
    'https://ars.els-cdn.com/content/image/1-s2.0-S1245178910701840-gr19b.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhV6N_B4NOEe23a4HzQGVlrdinc2xlFOGaw&usqp=CAU'
]

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

def atualiza_intevencao(intervencao: str):
    headers = {'content-type': 'application/json'}
    payload = {'intervencao': intervencao}
    r = requests.put('http://127.0.0.1:8000/paciente/1/ultrassom', data=json.dumps(payload), headers=headers)

    print(r.text)

def main():
    cria_paciente("João")
    atualiza_oxigenacao(random.randint(0,120))
    atualiza_batimentos(random.randint(0,120))
    atualiza_ultrassom(imagens[random.randint(0,4)])

    a = 0
    while(1):
        atualiza_oxigenacao(random.randint(0,120))
        atualiza_batimentos(random.randint(0,120))
        sleep(1)
        a = a + 1
        if (a == 600):
            atualiza_ultrassom(imagens[random.randint(0,4)]) 
            a=0

main()
