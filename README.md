# ReactJS Boilerplate TypeScript

Boilerplate para projetos em ReactJS, utilizando TypeScript e NextJS.

Para iniciar um projeto:

> yarn create next-app -e https://github.com/cjambrosi/reactjs-boilerplate-ts

Na raiz do projeto, criar um diretório com o nome `.vscode`. Dentro dele, crie o arquivo `settings.json` e inclua o seguinte objeto:

```json
{
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "window.zoomLevel": 0,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.fixAll.stylelint": true
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}

```
