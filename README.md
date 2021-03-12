# projeto_iv_dispositivos_moveis

Seleção para o Edital 03/2021 do Laboratório de Inovação Tecnológica em Saúde

Desenvolver uma aplicação que consiste em um aplicativo de monitoramento em tempo real dos dados vitais de pacientes em homecare​.Esses dados serão recebidos por um sistema servidor, que será compartilhado entre os módulos do cuidador e do neurologista.

# Índice
+ [Configurando o ambiente](#configuracao)


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

Para o aplicativo, basta seguir o seguinte tutorial, nele está explicado como configurar o ambiente android, com emulador.

`https://react-native.rocketseat.dev/android/linux/`

Após a configuração do ambiente, é necessário instalar o Expo, para isto basta digitar no terminal:

`npm install --global expo-cli`

Quando acabar a instalação, basta navegar para a pasta `/app/` e executar o comando:

`expo start`





## API

A Api foi construída com o framework FASTAPI, ela possui GETs para obter os pacientes e PUTs para atualizar as informações, um script em python
vai fornecer os dados, emulando os aparelhos e dados vitais. 

## Aplicatico

O aplicativo foi construído utilizando ReactNative + TypeScript + Expo