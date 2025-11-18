#  Série Journal – CRUD de Séries 

**Nome:** *Eduarda Silva Santos*

Este é o projeto da **Fase 1 – Desenvolvimento de Sistemas Frontend**, contendo um CRUD simples de séries utilizando **React + Vite**.
O objetivo desta fase é demonstrar **componentização, dinamicidade, formulário com validação e organização de estado**, seguindo boas práticas e estrutura limpa.

---

##  Como executar este projeto

Abra o terminal dentro da pasta do projeto e execute:

```bash
npm install
npm run dev
```

Após isso, abra o navegador no endereço exibido pelo Vite (geralmente):

```
http://localhost:5173
```

---

## Resultado esperado no navegador

https://youtu.be/V632_vn_I4o


---

##  Introdução

Este projeto foi desenvolvido para demonstrar:

* Uso de **componentes React**
* Manipulação de **estado local (useState)**
* Navegação simples entre páginas sem React Router
* CRUD **estático** (criar, listar, editar e remover séries)
* Validação de formulário
* Estrutura modular, limpa e organizada

---

---

##  Componentes

###  NavBar

* Exibe os links para navegação entre as páginas.
* Usa callbacks enviados pelo componente pai.

---

###  SerieForm


* `onAddSerie`: cria uma nova série
* `onUpdateSerie`: atualiza série existente
* `editingSerie`: dados da série em edição
* `onFinishEdit`: volta à lista após salvar

**Funções principais:**

* Renderiza os campos obrigatórios:

  * Título
  * Número de Temporadas
  * Data de Lançamento
  * Diretor
  * Produtora
  * Categoria
  * Data em que Assistiu
* Possui validação e feedback visual

---

###  SerieList


* `series` – lista atual de séries
* `onEditSerie`
* `onDeleteSerie`
* `onCreateNewSerie`

**Funções principais:**

* Lista todas as séries cadastradas
* Botões **Editar** e **Excluir** para cada série
* Barra de busca por título ou categoria
* Botão **Cadastrar nova série**, igual ao exemplo das telas

---

### HomePage

Página inicial simples, contendo mensagem de boas-vindas.

---

###  AboutPage

Página explicativa sobre o projeto.

---

###  CreateSeriePage

Encapsula o `SerieForm` e identifica se está no modo “criar” ou “editar”.

---

## Conclusão

Este projeto demonstra:

* Componentização correta
* Controle claro de estado
* CRUD estático funcional
* Boas práticas e código limpo
* Navegação intuitiva
* Estrutura de pastas organizada 
