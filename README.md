# OMD - Plano de Ação (Frontend)

Este projeto é uma aplicação web para gerenciamento de Planos de Ação, desenvolvida como parte de um desafio técnico frontend para a empresa OMD.

A aplicação permite:

- Criar, editar e remover Planos de Ação
- Cadastrar, editar e excluir Ações dentro de cada plano
- Visualizar de forma clara o status e prazo de cada ação
- Interface responsiva, moderna e intuitiva

## Tecnologias e Ferramentas

- React + Vite – Frontend
- TypeScript – Tipagem estática
- Tailwind CSS – Estilização
- React Icons – Ícones
- API REST – Comunicação com o backend

## Como rodar o projeto localmente

Clone o repositório

```bash
git clone https://github.com/IvanCSantos/omd-planoacao-frontend.git
```

Acesse a pasta do projeto

```bash
cd omd-planoacao-frontend
```

Instale as dependências

```bash
npm install

ou

yarn install
```

Configure as variáveis de ambiente (arquivo .env na raiz do projeto)
Substitua a URL pela do seu backend.

```bash
VITE_API_URL=http://localhost:8080
```

Rode o projeto

```bash
npm run dev

ou

yarn dev
```

Acesse no navegador

```bash
http://localhost:5173
```

## Caso deseje, também pode utilizar o docker-compose.yml adicionado neste projeto

- Clone ambos os repositórios
- Mova o docker-compose.yml e o nginx.conf dentro do diretório deploy para a raiz do projeto
- Execute o docker compose

```bash
git clone git@github.com:IvanCSantos/omd-planoacao-frontend.git frontend
git clone git@github.com:IvanCSantos/omd-planoacao-backend.git backend
mv frontend/deploy/* .
docker compose up -d --build
```
