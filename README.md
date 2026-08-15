# Tryunfo

Aplicação em React inspirada no jogo de cartas "Super Trunfo". Permite montar cartas personalizadas (nome, descrição, três atributos numéricos, imagem e raridade), ver uma pré-visualização em tempo real, salvá-las num baralho e depois filtrar as cartas salvas por nome, raridade ou por serem "Super Trunfo".

## 🎓 Sobre este projeto

Este foi um projeto **proposto durante o curso da [Trybe](https://www.betrybe.com/)**, com requisitos definidos a serem cumpridos (validação do formulário, regras de pontuação dos atributos, apenas uma carta "Super Trunfo" por baralho, filtros do baralho, etc.). O código-base inicial (configuração de lint/estilo e estrutura de pastas) foi fornecido pela Trybe; toda a implementação dos componentes React, estilização e lógica da aplicação foi desenvolvida por mim, individualmente, como parte da avaliação do módulo de front-end.

## 🧑‍💻 Tecnologias

- React 18 (Create React App)
- JavaScript (ES6+)
- CSS3
- ESLint + Stylelint (configuração da Trybe)

## 🚀 Como rodar localmente

> ⚠️ Este projeto usa `react-scripts` 5, que depende de uma versão específica do Node: **16 ou 18**. Com Node 19+ o build quebra por incompatibilidade com o OpenSSL do Node (`error:0308010C:digital envelope routines::unsupported`). Se você usa uma versão mais recente, recomendo usar o [nvm](https://github.com/coreybutler/nvm-windows) (Windows) ou [nvm](https://github.com/nvm-sh/nvm) (Mac/Linux) para alternar para o Node 18 antes de instalar as dependências.

1. Clone o repositório:
   ```bash
   git clone git@github.com:enzogennarii/tryunfo.git
   cd tryunfo
   ```
2. Garanta que está usando Node 16 ou 18:
   ```bash
   nvm install 18
   nvm use 18
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Rode em modo desenvolvimento:
   ```bash
   npm start
   ```
   A aplicação abre em `http://localhost:3000`.

5. Ou gere o build de produção:
   ```bash
   npm run build
   ```

## 📋 Funcionalidades

- Formulário para criar uma carta com nome, descrição, imagem, raridade e três atributos (0 a 90 cada, soma máxima de 210)
- Pré-visualização da carta em tempo real enquanto o formulário é preenchido
- Botão "Salvar" só é habilitado quando todos os campos são válidos
- Apenas uma carta pode ser marcada como "Super Trunfo" por baralho
- Baralho com todas as cartas salvas, cada uma com opção de exclusão
- Filtros do baralho por nome, raridade e por cartas "Super Trunfo"

## 📧 Contato

enzo.gennari02@gmail.com
