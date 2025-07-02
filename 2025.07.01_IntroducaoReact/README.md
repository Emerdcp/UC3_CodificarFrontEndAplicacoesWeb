# Introdução a React

### **1. O que é e pra que serve Frameworks Front-End?**

**O que é:**
Frameworks front-end são conjuntos de ferramentas, estruturas e convenções que facilitam o desenvolvimento da interface de aplicações web.

**Para que serve:**
Eles ajudam os desenvolvedores a escrever menos código repetitivo, organizar melhor o projeto e seguir boas práticas. Exemplos: **Angular**, **Vue.js**, **Svelte**.

- "Frameworks front-end são estruturas que facilitam o desenvolvimento de interfaces. "
- "Eles ajudam a organizar o código e aplicar boas práticas. Exemplos: Angular, Vue.js.

---

### **2. O que é e pra que serve Bibliotecas Front-End?**

**O que é:**
Bibliotecas front-end são coleções de funções ou componentes reutilizáveis que podem ser usadas dentro do seu código.

**Para que serve:**
Elas resolvem problemas específicos, como manipular o DOM, fazer requisições HTTP ou criar interfaces. Exemplo: **React**, **jQuery**, **Chart.js**.

- "Bibliotecas front-end são coleções de funções reutilizáveis para tarefas específicas. "
- "Elas são usadas dentro do seu código para resolver problemas. Exemplos: React, jQuery.

---

### **3. Diferenças entre Frameworks x Bibliotecas Front-End**

| Característica | **Framework**                                                         | **Biblioteca**                              |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------- |
| Controle       | O framework **controla o fluxo** da aplicação (Inversão de controle). | A biblioteca **é chamada** pelo seu código. |
| Abrangência    | Mais completo, define estrutura e padrões.                            | Focado em funcionalidades específicas.      |
| Exemplo        | Angular, Vue.js                                                       | React, 
jQuery                               |

- "Frameworks controlam o fluxo da aplicação e são mais completos. Já bibliotecas são chamadas pelo seu código "
- "e resolvem tarefas específicas. Ex: Angular (framework), React (biblioteca).
---

### **4. Principais vantagens e desvantagens do React**

**Vantagens:**

* Reutilização de componentes.
* Grande comunidade e ecossistema.
* Performance com o uso do **Virtual DOM**.
* Fácil integração com outras bibliotecas.

**Desvantagens:**

* Curva de aprendizado para conceitos como JSX e hooks.
* Atualizações frequentes que podem quebrar compatibilidade.
* Apenas a **camada de visualização**: precisa de outras bibliotecas para roteamento e estado.

- "Vantagens: Reutilização de componentes, grande comunidade, performance com Virtual DOM. "
- "Desvantagens: Curva de aprendizado, precisa de bibliotecas extras, atualizações frequentes.
    
---

### **5. O que é o DOM?**

**DOM (Document Object Model):**
É a representação estruturada do conteúdo HTML e XML de uma página. Permite que linguagens como JavaScript acessem, modifiquem e atualizem os elementos da página em tempo real.

- "DOM (Document Object Model) é a representação estruturada da página HTML. Permite que JavaScript "
- "interaja e modifique a página dinamicamente.
---

### **6. O que é SPA?**

**SPA (Single Page Application):**
É uma aplicação web que **carrega uma única página HTML** e atualiza dinamicamente o conteúdo usando JavaScript, sem recarregar toda a página. Isso resulta em uma experiência mais rápida e fluida.

- "SPA (Single Page Application) é uma aplicação que carrega uma única página HTML e atualiza o conteúdo "
- "dinamicamente com JavaScript, sem recarregar a página inteira.

---

### **7. O que é e pra que serve NPM?**

**NPM (Node Package Manager):**
É o gerenciador de pacotes do Node.js.
**Serve para:** instalar, atualizar, e gerenciar bibliotecas e dependências de um projeto JavaScript.

- "NPM (Node Package Manager) é o gerenciador de pacotes do Node.js. Serve para instalar e gerenciar bibliotecas "
- "JavaScript em projetos.

---

### **8. O que é e pra que serve NPX?**

**NPX (Node Package Execute):**
É uma ferramenta para **executar pacotes diretamente do NPM**, sem precisar instalá-los globalmente.

**Serve para:**
Rodar comandos temporários, como `npx create-react-app`, que cria um projeto React sem precisar instalar o pacote globalmente.

- "NPX é uma ferramenta que executa pacotes diretamente do NPM sem precisar instalá-los globalmente. "
- "Útil para comandos temporários como 'npx create-react-app'.

---

### **9. O que é e pra que serve Vite?**

**Vite:**
É uma ferramenta moderna de build e desenvolvimento front-end, criada para ser **mais rápida** que alternativas tradicionais como Webpack.

**Serve para:**

* Criar projetos modernos com configuração mínima.
* Servir e compilar aplicações com desempenho superior.
* Suporta frameworks como React, Vue, Svelte, etc.

- "Vite é uma ferramenta de build e desenvolvimento front-end rápida e moderna. Serve para iniciar projetos "
- "com configuração mínima e alto desempenho.

---

### **10. O que é create react app?**

**Create React App (CRA):**
É uma ferramenta oficial do React que cria um projeto pré-configurado com tudo que você precisa para começar (Webpack, Babel, etc).

**Serve para:**
Criar rapidamente uma estrutura padrão de aplicação React sem precisar configurar tudo do zero.
    
- "Create React App (CRA) é uma ferramenta que cria um projeto React com configuração padrão pronta para uso, "
- "incluindo Webpack, Babel e outros.