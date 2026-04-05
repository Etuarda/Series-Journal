# Serie Journal - Projeto Fase 2

Nome: Eduarda Silva Santos
Disciplina: Desenvolvimento de Sistemas Frontend

Aplicacao React com CRUD de series, navegacao por rotas, consumo de API REST com Axios, busca dinamica e testes de componentes.

## 1) Requisitos atendidos (rubrica)

- Documentacao completa para execucao local (frontend + API) e testes.
- Uso de biblioteca de UI: Material UI.
- Rotas implementadas com React Router.
- Integracao com endpoints da API via Axios: GET, GET por id, POST, PUT, DELETE.
- Componentes obrigatorios implementados: SerieList, SerieForm e NavBar.
- Funcionalidades dinamicas implementadas: listagem, busca, criacao, edicao e exclusao.
- Testes automatizados com Vitest + Testing Library.

## 2) Tecnologias

- React 18
- Vite
- React Router DOM
- Axios
- Material UI (MUI)
- Lucide React (icones)
- Vitest + Testing Library

## 3) Estrutura de pastas

```text
src/
  components/
    NavBar/
      NavBar.jsx
      NavBar.test.jsx
    SerieForm/
      SerieForm.jsx
    SerieList/
      SerieList.jsx
      SerieList.test.jsx
  pages/
    HomePage.jsx
    AboutPage.jsx
    CreateSeriePage.jsx
    SerieListPage.jsx
  test/
    setup.js
  App.jsx
  main.jsx
```

## 4) Como executar o frontend

1. Instale dependencias:

```bash
npm install
```

2. Execute em modo desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador (URL padrao do Vite):

```text
http://localhost:5173
```

## 5) Como executar a API (serieJournal-api)

Repositorio de referencia informado no enunciado:
https://github.com/adsPucrsOnline/DesenvolvimentoFrontend/

1. Clone o repositorio da disciplina.
2. Acesse a pasta da API:

```bash
cd DesenvolvimentoFrontend/serieJournal-api
```

3. Instale e rode:

```bash
npm install
npm start
```

4. A API deve subir em:

```text
http://localhost:5000
```

## 6) Endpoints utilizados

- GET http://localhost:5000/series
- GET http://localhost:5000/series/:id
- POST http://localhost:5000/series
- PUT http://localhost:5000/series
- DELETE http://localhost:5000/series/:id

## 7) Como executar os testes

Executar em modo watch:

```bash
npm test
```

Executar uma vez (CI/local):

```bash
npm run test:run
```

## 8) Descricao dos componentes

### NavBar

- Barra de navegacao principal.
- Exibe links para Home, Sobre, Cadastrar e Lista de series.
- Possui comportamento responsivo com menu mobile (Drawer).

### SerieForm

- Formulario de criacao e edicao de series.
- Campos obrigatorios:
  - Titulo
  - Numero de Temporadas
  - Data de Lancamento da Temporada
  - Diretor
  - Produtora
  - Categoria
  - Data em que assistiu
- Envia dados para API (POST/PUT).

### SerieList

- Lista series cadastradas.
- Busca por titulo ou categoria.
- Permite editar e excluir cada item.
- Exibe aviso quando em modo offline (fallback local).

## 9) Paginas implementadas

- Home
- Sobre
- Cadastro de serie
- Lista de series
- Edicao de serie (rota por id)

## 10) Rotas da aplicacao

- / -> Home
- /about -> Sobre
- /create -> Cadastro
- /series -> Lista de series
- /edit/:id -> Edicao

## 11) Evidencias visuais (prints/GIF)

Adicionar os arquivos de evidencias na pasta abaixo e manter os nomes:

```text
docs/images/
  home.png
  about.png
  create.png
  list.png
  edit.png
```

## 12) Observacoes finais

- O projeto esta pronto para execucao em navegador.
- O envio deve ser feito em .zip sem a pasta node_modules.
- Nome sugerido do arquivo final: nome_aluno-projeto-fase-2.zip
