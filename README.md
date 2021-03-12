# projeto_iv_dispositivos_moveis

Seleção para o Edital 03/2021 do Laboratório de Inovação Tecnológica em Saúde

Desenvolver uma aplicação que consiste em um aplicativo de monitoramento em tempo real dos dados vitais de pacientes em homecare​.Esses dados serão recebidos por um sistema servidor, que será compartilhado entre os módulos do cuidador e do neurologista.

# Índice
+ [Configurando o ambiente](#configuracao)
+ [Api](#api)
+ [Aplicativo](#aplicativo)
    - [Rota do Neurologista](#neurologista)


<h1 id="configuracao">Configurando o ambiente</h2>

Para a execução desse projeto, são necessárias a instalação de certos pacotes para que tudo funcione como deve.

Para a api é necessário possuir o Python na versão 3.6 ou superior.

Com o python instalado, basta por no terminal esses dois comandos:

`pip install fastapi` 

`pip install uvicorn[standard]`

Após a instalação, já é possível executar o servidor, basta navegar para a pasta `/servidor/`

`$ uvicorn api:app --reload --host 0.0.0.0 --port 3000`

Logo após já é possível acessar a documentação da api no seguinte endereço:

`http://127.0.0.1:3000/docs#/`

Em seguida, pode-se executar o script para envio de dados para o servidor, com o seguinte comando:

`python paciente_1.py`

Para o aplicativo, basta seguir o seguinte tutorial, nele está explicado como configurar o ambiente android, com emulador.

`https://react-native.rocketseat.dev/android/linux/`

Após a configuração do ambiente, é necessário instalar o Expo, para isto basta digitar no terminal:

`npm install --global expo-cli`

Quando acabar a instalação, basta navegar para a pasta `/app/` e executar o comando:

`expo start`

A seguinte janela irá se abrir no navegador e será possível abrir emuladores por ela, ou escanear o qrcode para abrir o aplicativo no próprio dispositivo pelo aplicativo `Expo Go`

<div align="center">
    <p float="left">
        <img src="img/expo.png" alt="descrição da imagem">
    <p>Figura 1. Expo Developer</p>
    </p>
</div>


<h1 id="api">API</h2>

A Api foi construída em python com o framework FASTAPI, ela possui GETs para obter os pacientes e PUTs para atualizar as informações, um script
vai fornecer os dados, emulando os aparelhos e dados vitais. 

Exemplo do modelo de paciente:

```python
class Paciente(BaseModel):
    nome: str = ''
    oxigenacao: float
    severidade_oxigenacao: float
    batimento_cardiaco: float
    severidade_batimento_cardiaco: float
    ultrassom: str = ''
    intervencao: str = ''
```

Exemplo de get:


```python
@app.get('/paciente/{paciente_id}')
def get_paciente_id(paciente_id: int):
    return db[paciente_id-1]
```

Exemplo de put:

```python
@app.put('/paciente/{paciente_id}/intervencao')
def update_intervencao(paciente_id: int, dados: Intervencao):
    stored_paciente_data = db[paciente_id-1]
    stored_paciente_model = Paciente(**stored_paciente_data)
    update_data = dados.dict(exclude_unset=True)
    updated_paciente = stored_paciente_model.copy(update=update_data)
    db[paciente_id-1] = jsonable_encoder(updated_paciente)
    return updated_paciente
```

Com a estrutura de post, gets, puts e deletes prontas, foi implementado os scripts que geram os dados para o aplicativo

```python
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
```

Para definir a severidade dos sinais, foi utilizada a seguinte função

```python
def define_severidade(dado: float):
    if(dado >= 115 or dado <= 5):
        return 1
    elif(dado >= 105 and dado < 115 or dado <= 15 and dado > 5):
        return 2
    elif(dado < 105 and dado > 15):
        return 3  
```

Foi adotado que os dados maiores que 115 ou menores que 5 como severos, entre 105 e 115 e entre 5 e 15 como moderados, os demais valores como normais.

Para a prioridade das requisições, foi utilizada uma fila de prioridade, na qual quanto menor o indice de severidade, maior a prioridade.

<h1 id="aplicativo">Aplicativo</h2>


<div align="center">
    <p float="left">
        <img width=250 src="img/tela_inicial.png" alt="descrição da imagem">
    <p>Figura 2. Tela inicial</p>
    </p>
</div>

O aplicativo foi desenvolvido utilizando React Native, TypeScript e Expo.

A implementação dele partiu da criaçao de duas rotas, uma para o cuidador e uma para o neurologista, botões simulam o login ao abrir o aplicativo.
A escolha da rota é feita com a alteração de estado, fazendo que as telas só sejam montadas ao selecionar o login.

```javascript
    <NavigationContainer>
        {user ? (isNeurologista ? (<NeurologistaRoute/> ) : (<CuidadorRoute/>)) : (
        <Stack.Navigator screenOptions={{
          header: ()=> null
        }}>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>)}
    </NavigationContainer>
```

<h2 id='neurologista'><b>Neurologista</b></h3>
