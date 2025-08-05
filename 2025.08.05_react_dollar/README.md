# 📘 Guia de Criação do Projeto React + Vite

Repositório inicial: [https://github.com/3insteinDev/projeo-loja](https://github.com/3insteinDev/projeto-loja)

Documentação React: [https://react.dev/learn](https://react.dev/learn)

---

## ✅ 1. Criação de um novo repositório (GitHub)


```Git Hub
Com a sua conta no GitHub logada crie um novo repositório
nomeUsuario/projeto-loja

#Após o repositório criado clicque na opção Code/ clone e copie o endereço HTTPS
Exemplo: https://github.com/nomeUsuario/projeto-loja.git


# Acesse uma pasta no seu computador, onde deseja clonar
cd caminho/para/sua/pasta

# Digite o comando de clonar, inserindo o link copiado
git clone https://github.com/nomeUsuario/projeto-loja.git

# Acesse a pasta raiz do projeto clonado
cd projeto-loja

# Crie o projeto com Vite e template React dentro desta pasta
npm create vite@latest . -- --template react

# Instale as dependências
npm install

# Rode o projeto localmente
npm run dev
```

## Instale a versão correta:

```
npm install react-router-dom@latest
```


## ✅ 2. Limpar Projeto


### Apague
```
src/assets/react.svg
src/App.css
src/index.css
```

(Obs. Commit initial)


## ✅ 3. Conteúdo dos arquivos


### Editar src/main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```