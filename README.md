<h1 align="center"> 
	React Boas Praticas Passo a Passo
</h1>
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-vitrine-dev">Vitrine Dev</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>

&nbsp;

![Space App](https://github.com/LivioAlvarenga/react-step-by-step/blob/master/public/react-banner.png?raw=true#vitrinedev)

&nbsp;
<a id="-sobre-o-projeto"></a>

## 💻 Sobre o projeto

🚀 Repositório com boas praticas em React. Usado como treinamento na tecnologia e como forma de adicionar as boas praticas do ecossistema React.

Este projeto foi criado com Vite, Tailwindcss, Eslint e Prettier.

```bash
# Criando projeto com Vite e React e Javascript
npm create vite@latest my-project -- --template react

# Instalando arquitetura Tailwindcss
npm install -D tailwindcss postcss autoprefixer prettier prettier-plugin-tailwindcss

# Criando tailwind.config.cjs
npx tailwindcss init -p

# Editando npx tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

# Adicionando configuração Tailwindcss em index.css
@tailwind base;
@tailwind components;
@tailwind utilities

# Cria arquivo .prettierrc.json na raiz do projeto

# Inicia projeto
npm run dev
```

&nbsp;

<p align="center">
  <a href="#license"><img src="https://img.shields.io/github/license/LivioAlvarenga/react-step-by-step?color=ff0000"></a>
  <a href="https://github.com/LivioAlvarenga/react-step-by-step/issues"><img src="https://img.shields.io/github/issues/LivioAlvarenga/react-step-by-step" alt="issue site alurabooks" /></a>
  <a href="https://github.com/LivioAlvarenga/react-step-by-step"><img src="https://img.shields.io/github/languages/count/LivioAlvarenga/react-step-by-step" alt="total amount of programming languages used in the project" /></a>
  <a href="https://github.com/LivioAlvarenga/react-step-by-step"><img src="https://img.shields.io/github/languages/top/LivioAlvarenga/react-step-by-step" alt="most used language in the projects" /></a>
  <a href="https://github.com/LivioAlvarenga/react-step-by-step"><img src="https://img.shields.io/github/repo-size/LivioAlvarenga/react-step-by-step" alt="repository size" /></a>
<p>

---

&nbsp;
<a id="-vitrine-dev"></a>

## 📺 Vitrine Dev

| :placard: Vitrine.Dev |                                                                       |
| --------------------- | --------------------------------------------------------------------- |
| :sparkles: Nome       | **React Boas Praticas Passo a Passo**                                 |
| :label: Tecnologias   | nodejs, javascript, html5, css3, reactjs, vite, prettier, tailwindcss |

---

&nbsp;
<a id="-tecnologias"></a>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto

&nbsp;

<p align="center">
  <a href= "https://html5.org/"><img alt="html 5 badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E34F26&logo=HTML5&label=Markup Language&message=HTML5&color=E34F26"></a>
  <a href= "https://developer.mozilla.org/pt-BR/docs/Web/CSS"><img alt="CSS 3 badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1572B6&logo=CSS3&label=Style&message=CSS3&color=1572B6"></a>
  <a href= "https://tailwindcss.com/"><img alt="Tailwind CSS badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=06b6d4&logo=Tailwind CSS&label=Style&message=Tailwind CSS&color=06b6d4"></a>
  <a href= "https://www.javascript.com/"><img alt="JavaScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7DF1E&logo=JavaScript&label=Language&message=JavaScript&color=F7DF1E"></a>
  <a href= "https://nodejs.org/en/"><img alt="Node.js badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=339933&logo=Node.js&label=Runtime Environment&message=Node.js&color=3139933"></a>
  <a href= "https://reactjs.org/"><img alt="React badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=61dafb&logo=React&label=Framework&message=React&color=61dafb"></a>
  <a href= "https://vitejs.dev/"><img alt="site Vite" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=646cff&logo=Vite&label=Tooling&message=Vite&color=646cff"></a>
  <a href= "https://code.visualstudio.com/download"><img alt="vscode download" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=007ACC&logo=Visual Studio Code&label=IDE&message=Visual Studio Code&color=007ACC"></a>
  <a href= "https://github.com/prettier/prettier"><img alt="code formatter prettier" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7B93E&logo=Prettier&label=Code Formatter&message=Prettier&color=F7B93E"></a>
</p>

---

&nbsp;
<a id="-funcionalidades"></a>

## ⚙️ Funcionalidades

...

---

&nbsp;

#### 🧭 Rodando a aplicação web (Modo desenvolvimento)

```bash
# Clone este repositório
$ git clone https://github.com/livioalvarenga/react-step-by-step.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd react-step-by-step
# Instale as dependências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# A aplicação será aberta na porta:5173 - acesse http://localhost:5173
```

---

&nbsp;
<a id="-autor"></a>

## 🦸 Autor

Olá, eu sou Livio Alvarenga, Engenheiro de Produção | Dev Back-end e Front-end. Sou aficcionado por tecnologia, programação, processos e planejamento. Uni todas essas paixões em uma só profissão. Dúvidas, sugestões e críticas são super bem vindas. Seguem meus contatos.

- [www.livioalvarenga.com](https://livioalvarenga.com)
- contato@livioalvarenga.com

&nbsp;

<p align="center">
  <a href= "https://www.livioalvarenga.com/"><img alt="portifólio livio alvarenga" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/3109a24e71f07dbad193ae0ddbc43b69b39c7adf/files/badgePortifolioLivio.svg"></a>
  <a href= "https://www.linkedin.com/in/livio-alvarenga-planejamento-mrp-engenheiro-produ%C3%A7%C3%A3o-materiais-vba-powerbi/"><img alt="perfil linkedin livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=0A66C2&logo=LinkedIn&label=LinkedIn&message=Livio Alvarenga&color=0A66C2"></a>
  <a href= "https://twitter.com/AlvarengaLivio"><img alt="perfil twitter livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1DA1F2&logo=Twitter&label=Twitter&message=@AlvarengaLivio&color=1DA1F2"></a>
  <a href= "https://www.instagram.com/livio_alvarenga/"><img alt="perfil instagram livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E4405F&logo=Instagram&label=Instagram&message=@livio_alvarenga&color=E4405F"></a>
  <a href= "https://www.facebook.com/profile.php?id=100083957091312"><img alt="perfil facebook livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1877F2&logo=Facebook&label=Facebook&message=Livio Alvarenga&color=1877F2"></a>
  <a href= "https://www.youtube.com/channel/UCrZgsh8IWyyNrRZ7cjrPbcg"><img alt="perfil youtube livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=FF0000&logo=YouTube&label=Youtube&message=Livio Alvarenga&color=FF0000"></a>
</p>
<p align="center">
 <a href= "https://cursos.alura.com.br/vitrinedev/livioalvarenga"><img alt="perfil vitrinedev livio alvarenga" align="center" height="30" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/e0f5b5a82976af114d957c20f0c78b4d304a68a0/files/vitrinedev.svg"></a>
</p>

---

&nbsp;
<a id="-licença"></a>

## 📝 Licença

Este projeto é [MIT licensed](./LICENSE).

##### _#CompartilheConhecimento_
