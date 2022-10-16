# Callix Challenge

### Descrição

Esse projeto foi criado para uma etapa do processo de contratação da Callix, consiste em um backend que consome da API publica da SpaceX criada pela comunidade e uma SPA que exibe esses dados.

### Links dos projetos publicados

- Website: https://callix-challenge.netlify.app/
- API: https://callix-challenge-2.herokuapp.com/

## Diretórios

#### `/backend` (API)

Esse projeto consiste em uma API Rest construída com Node.JS e Express usando dos conceitos da arquitetura hexagonal para separar as camadas da aplicação. Também provê na rota `/docs` a documentação das rotas utilizando swagger e documentada seguindo as especificações da OpenAPI.

#### `/frontend` (Single Page Application)

Esse projeto consistem em uma SPA criada utilizando React para exibir os dados provenientes do backend. Além disso conta com um teste A/B criado com google optimize para testar a interação dos usuários com o botão de mudar o tema de cores da aplicação e também foi configurado também um script da HotJar para realização o tracking das ações dos usuários na página.

## Como rodar as aplicações

Para facilitar essa etapa e o deploy, as aplicação estão rodando em containers docker, e na raiz do projeto a um arquivo chamado `docker-compose.yaml` que será usado para executar a aplicação com docker.

### Requisitos

- Docker
- Docker Compose

### Passo a passo

Primeiramente clone do projeto git e navegue até a raiz do projeto onde se encontra o arquivo `docker-compose.yaml` esse arquivo é responsável por realizar o "build" das imagens dos containers e subir as aplicações.

Na raiz do projeto utilize o comando:

```bash
docker-compose up -d --build
```

Esse comando iniciara o processo de build das aplicações e disponibilizará as aplicações das seguintes portas:

- backend: http://localhost:3000
- frontend: http://localhost

_OBS: por questões de segurança oi script da hotjar só funciona com HTTPS_
