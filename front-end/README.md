
# AGX Library (Front-end)

Biblioteca ficcional desenvolvida com React e Typescript com funções básicas, integrado a API do back-end presente no mesmo rep

## Funcionalidades

- Cadastro de usuários.
- Login e autenticação com JWT.
- Visualização dos livros disponíveis.
- Pesquisa de livros no catálogo.
- Empréstimo de livros.
- Devolução de livros.
- Histórico de empréstimos do usuário.
- Dashboard com informações dos livros.
- Área administrativa para cadastro e gerenciamento de livros.
- Controle de acesso às páginas de administrador.

## Tecnologias

- React
- TypeScript
- Vite
- CSS
- Axios
- React Router
- Formik / yup

## Como rodar

É necessário ter o Node.js instalado.

Clone o projeto:

```bash
git clone https://github.com/Joaovitorsantozz/AGX-Library-prototype.git
cd front-end
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

O vite inicia o servidor em

```text
http://localhost:5173
```

## Integração com o Back-end

O front-end utiliza a API da AGX Library para realizar as operações de cadastro, autenticação, consulta de livros e empréstimos.

O back-end é desenvolvido com Deno, Express e MongoDB.

É necessário que a API esteja em execução para que as funcionalidades que dependem do banco de dados funcionem corretamente.

Por padrão, os serviços da aplicação fazem requisições para:

```text
http://localhost:3000
```

Caso o endereço da API seja diferente, ajuste as URLs utilizadas nos arquivos da pasta `src/services`.

## Autenticação

O usuário pode criar uma conta pela tela de cadastro e realizar login pela tela de autenticação.

Após o login, o token JWT retornado pela API é utilizado nas requisições que precisam de autenticação.

As páginas protegidas verificam se o usuário está autenticado. As funcionalidades administrativas também possuem verificação de permissão.

A autorização das operações é validada pelo back-end, não apenas pelo front-end.

## Estrutura do projeto

```text
src/
├── assets/                 # Imagens e recursos visuais
├── components/             # Componentes reutilizáveis
│   ├── borrowedDashboard/  # Componentes do histórico de empréstimos
│   └── dashboard/          # Componentes do dashboard
├── context/                # Contexto de autenticação
├── data/                   # Dados utilizados pela aplicação
├── interfaces/             # Interfaces e tipagens TypeScript
├── pages/
│   ├── authUser/           # Telas de login e cadastro
│   └── dashboard/          # Páginas principais da aplicação
├── services/               # Comunicação com a API
└── validations/             # Validações e proteção de rotas
```

## Telas da aplicação

### Login e cadastro

Telas para autenticação e criação de novos usuários.

### Dashboard do usuário

Apresenta os livros disponíveis e permite realizar empréstimos.

### Livros emprestados

Exibe os empréstimos realizados pelo usuário e permite acompanhar os livros que estão sob sua responsabilidade.

### Dashboard administrativo

Área destinada aos administradores, com funcionalidades para visualizar e gerenciar os livros cadastrados.

## API

A documentação das rotas e dos retornos da API está disponível no Postman:

https://documenter.getpostman.com/view/59439885/2sBYHaNwst

Repositório do back-end:

https://github.com/Joaovitorsantozz/AGX---API-backend-sample
