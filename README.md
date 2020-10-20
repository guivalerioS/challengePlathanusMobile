<h1 align="center">
    <img alt="Plathanus" title="#Plathanus" src="https://plathanus.com.br/img/website/logo.png" />
</h1>

<h4 align="center">
	🚀 Desafio React Native plathanus(Mobile)
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/guivalerioS/challengePlathanusMobile?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/guivalerioS/challengePlathanusMobile">

</p>

## 💻 Sobre o projeto

Este projeto é um aplicativo mobile de cadastro/recuperação/autenticação de usuários, com validações PIN através do envio de SMS.

Um usuário se cadastrará com:
- Telefone
- Nome
- Email
- Senha
- Confirmação de senha

Com as devidas validações feitas pelo backend.

Um usuário vai recuperar a senha com:

- Telefone
- Email
- Senha
- Confirmação de senha

Com as devidas validações feitas pelo backend.

Aonde o email fornecido da conta seja do número de telefone informado e vice versa. Todavia o ideal seria também o envio de um email para confirmação.

## 🛠 Tecnologias

Principais ferramentas utilizadas na construção do Mobile:

- Axios
- Redux
- Styled Components
- React Navigation



## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- Yarn

Agora para iniciarmos o projeto, siga os seguintes passos:

```bash
# Clone este repositório
$ git clone https://github.com/guivalerioS/challengePlathanusMobile.git

# Entre na pasta do projeto e instale as dependências
$ yarn

# Caso você esteja rodando o backend localmente entre na pasta \src\services do projeto e abra o arquivo api.js
$ baseURL deve ser o IP do seu computador, exemplo : baseURL: 'http://192.168.0.107:3333/',

# e para executar no seu celular android:
$ yarn react-native run-android

```

Feito com ❤️ por Guilherme Valerio 👋🏽 [Entre em contato!](https://www.linkedin.com/in/guilherme-valerio-399718143/)
