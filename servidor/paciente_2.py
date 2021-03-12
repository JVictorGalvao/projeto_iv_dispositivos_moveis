import requests
import json
import random
from time import sleep
from queue import PriorityQueue

imagens = [
    'https://www.saudebemestar.pt/media/88211/ecografia-transfontanelar.jpg',
    'https://www.saudebemestar.pt/media/88212/eco-cerebral.jpg',
    'https://ars.els-cdn.com/content/image/1-s2.0-S1245178910701840-gr2e.jpg',
    'https://ars.els-cdn.com/content/image/1-s2.0-S1245178910701840-gr19b.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhV6N_B4NOEe23a4HzQGVlrdinc2xlFOGaw&usqp=CAU'
]

nome = [
    'Joice Carvalheira Poças', 'Suri Sequeira Mascarenhas', 'Liara Macena Correia',
    'Jadir Carrasco Araújo', 'Pietro Candeias Gois', 'Claúdio Quesado Vinhas',
    'Maya Curado Ponte', 'Dulce Vilela Gomes', 'Gusttavo Varejão Granja'
]

fila = PriorityQueue()

def define_severidade(dado: float):
    if(dado >= 115 or dado <= 5):
        return 1
    elif(dado >= 105 and dado < 115 or dado <= 15 and dado > 5):
        return 2
    elif(dado < 105 and dado > 15):
        return 3    

def cria_paciente(nome: str):
    payload = {'nome': nome, 'oxigenacao': 0, 'batimento_cardiaco': 0, 'ultrassom': '', 
        'severidade_batimento_cardiaco': 0, 'severidade_oxigenacao': 0}
    headers = {'content-type': 'application/json'}

    r=requests.post('http://127.0.0.1:3000/paciente', data=json.dumps(payload), headers=headers)

    print(r.text)

def atualiza_batimentos(batimento: int):
    headers = {'content-type': 'application/json'}
    payload = {'batimento_cardiaco': batimento, 'severidade_batimento_cardiaco': define_severidade(batimento) }
    r = requests.put('http://127.0.0.1:3000/paciente/2/batimentos', data=json.dumps(payload), headers=headers)

    print(r.text)

def atualiza_oxigenacao(oxigenacao: int):
    headers = {'content-type': 'application/json'}
    payload = {'oxigenacao': oxigenacao, 'severidade_oxigenacao': define_severidade(oxigenacao)}
    r = requests.put('http://127.0.0.1:3000/paciente/2/oxigenacao', data=json.dumps(payload), headers=headers)

    print(r.text)

def atualiza_ultrassom(ultrassom: str):
    headers = {'content-type': 'application/json'}
    payload = {'ultrassom': ultrassom}
    r = requests.put('http://127.0.0.1:3000/paciente/2/ultrassom', data=json.dumps(payload), headers=headers)

    print(r.text)

def atualiza_intevencao(intervencao: str):
    headers = {'content-type': 'application/json'}
    payload = {'intervencao': intervencao }
    r = requests.put('http://127.0.0.1:3000/paciente/2/intevencao', data=json.dumps(payload), headers=headers)

    print(r.text)

def atualiza_dados(batimento: int, oxigenacao: int):
    headers = {'content-type': 'application/json'}
    payload = {'oxigenacao': oxigenacao, 'severidade_oxigenacao': define_severidade(oxigenacao), 
    'batimento_cardiaco': batimento, 'severidade_batimento_cardiaco': define_severidade(batimento)}
    r = requests.put('http://127.0.0.1:3000/paciente/2/dados', data=json.dumps(payload), headers=headers)

    return define_severidade(oxigenacao), define_severidade(batimento)


def main():
    cria_paciente(nome[random.randint(0,8)])
    atualiza_ultrassom(imagens[random.randint(0,4)])

    a = 0
    while(1):
        dados_pessoa = atualiza_dados(random.randint(0,120), (random.randint(0,120)))
        fila.put(dados_pessoa)
        print(dados_pessoa)
        sleep(1)
        a = a + 1
        if (a == 600):
            atualiza_ultrassom(imagens[random.randint(0,4)]) 
            a=0

main()
