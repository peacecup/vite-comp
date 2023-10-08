# 🔨 Smarty-UI是什么?

一个Mini版的组件库，基于Vite栈。为需要学习前端工程化的同学搭建的组件库搭建教学模型。
## Features

- ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prittier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions


## Install
使用 npm 或 yarn 安装
```bash
npm i smarty-ui
yarn add smarty-ui
```

## Quick Start

```js
    import Vue from 'vue'
    import SmartyUI from 'smarty-ui'

    const App = {
        template: `<VCButton/>`,
    };

    createApp(App)
        .use(SmartyUI)
        .mount("#app");

```

## Browser Support

Modern browsers and Internet Explorer 10+.

## Version
 - 稳定版：1.0.0