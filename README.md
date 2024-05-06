<!--
 * @Author: Royal
 * @LastEditTime: 2022-04-26 15:08:12
 * @Description:
 * @FilePath: /myindex/README.md
-->

<p align="center"><a href="https://vtron.site" target="_blank" rel="noopener noreferrer"><img width="200" src="./rdmassert/vtron-logo-nobg.png" alt="vtron logo"></a></p>

<div align="center">

vtron, 基于Vue3的 Win10 UI 框架

</div>

<div align="center">

<a href="http://v3w10.vtron.site" target="_blank">文档</a>|<a href="http://v3w10.vtron.site" target="_blank">官网</a>|<a href="http://vtron.site" target="_blank">样例</a>

</div>

<span style="color:#999;text-align:center">推荐 Vue 3 + Typescript + Vite + Using `<script setup>`
</span>

[English](./README_EN.md) | 中文

本框架可以让你的页面像win10视窗系统一样，运行一个网页上的win10系统。

#### 我们的优势：

文件系统：可以上传文件预览显示编辑。长时间保存。

终端系统：终端控制文件。

js执行：保存的js文件可以执行。

软件商店：下载的软件可以长时间保存。

开发时插件机制，控制system的状态。

#### 项目相关讨论可以在qq群：712921211或Discussions中

qq群：712921211

![GitHub issues](https://img.shields.io/github/issues/royalknight56/vtron)
![GitHub pull requests](https://img.shields.io/github/issues-pr/royalknight56/vtron)
![GitHub](https://img.shields.io/github/license/royalknight56/vtron)
![GitHub package.json version](https://img.shields.io/github/package-json/v/royalknight56/vtron)
![GitHub last commit](https://img.shields.io/github/last-commit/royalknight56/vtron)
![GitHub Repo stars](https://img.shields.io/github/stars/royalknight56/vtron?style=social)
![GitHub forks](https://img.shields.io/github/forks/royalknight56/vtron?style=social)

## 开发流程

### 使用Github模版

1. 创建项目
   https://github.com/royalknight56/vtron-template

从这个模版仓库创建新的项目。

2. clone项目

git clone 已经创建好的项目

3. 修改apps目录下的文件，或者新建app

### 使用npm，从创建好的vue项目开始

1. 安装vtron

> npm install vtron

2. 在vue中use插件

```js
import vtron from 'vtron';
```

引入样式文件"vtron/distlib/style.css"

```js
import 'vtron/distlib/style.css';
```

usage

```js
import { createApp } from 'vue';
import App from './App.vue';
import vtron from 'vtron';
import 'vtron/distlib/style.css';

createApp(App).use(vtron).mount('#app');
```

3. 在页面中引入Screen组件

首先，我们需要创建一个system对象，这个对象管理着系统的所有状态信息。

```vue
// App.vue
<Screen></Screen>
<script setup>
import { System } from 'vtron';
let system = new System();
</script>
```

此步骤之后，run dev已经可以看到win10启动了

4. 控制屏幕🖥大小

在组件外围包裹一个outer

```vue
<div class="outer">
    <Screen></Screen>
  </div>
```

定义outer样式

```html
<style scoped>
  .outer {
    width: 100vw;
    height: 100vh;
  }
</style>
```

这样就是占据全部页面显示

4. 在apps文件夹下新建vue文件，主要在此文件夹中编写窗口内容（非必须）

```vue
<template>
  <div class="app">
    <h1>HelloWorld</h1>
  </div>
</template>
```

5. 在system中注册app

在system的构造函数传入配置项，

其中 desktop是桌面的配置项，可以配置多个app

如果新加了app，而桌面没有显示，请点击 开始->电源->恢复

进行系统的刷新

```vue
<Screen></Screen>
<script setup>
import { System, BrowserWindow } from 'vtron';
import { App } from './apps/App.vue';
import someicon from './assets/someicon.png';
import HelloWorld from './apps/HelloWorld.vue';
let system = new System({
  desktop: [
    {
      name: 'HelloWorld',
      icon: someicon,
      window: {
        content: HelloWorld,
        icon: someicon,
      },
    },
  ],
});
</script>
```

## 调试流程

### 项目结构

项目是monorepo项目，

包含多个子项目，存在于packages下，每个文件夹是一个子项目。

vtron: 核心项目，包含核心逻辑，vtronjs包。

vtron-demo: demo项目，也是线上win.vtron.site的项目。

vtron-e2e: e2e测试监控项目。

vtron-home: 主页介绍，指线上vtron.site。

vtron-md: 文档项目，指线上v3w10.vtron.site。

vtron-plus: plus插件，包含了部分占用体积的附加功能。

vtron-store: 应用商店，线上应用商店打开时的内嵌网页，可以与vtron框架交互，提供应用安装功能。

### 启动项目

首先安装所有依赖，建议使用pnpm。

```bash
pnpm i
```

安装依赖之后，启动对应子项目，

对于vtron 项目，运行：

```bash
pnpm vtron dev
```

对于plus项目，运行：

```bash
pnpm plus dev
```

对于demo项目，运行：

```bash
pnpm demo dev
```

对于md项目，运行：

```bash
pnpm md dev
```

对于shop项目，运行：

```bash
pnpm shop dev
```

对于e2e项目，运行：

```bash
pnpm e2e dev
```

# 感谢Star

欢迎PR，意见，想法，感谢各位大佬的支持

![](https://komarev.com/ghpvc/?username=royalknight56&color=blue)

# 需要的帮助

我们需要帮助：

目前需要帮助的方向：

文档建设

更加完善的功能：向更加完善的webOS迈进

## 欢迎加入技术交流群

<div>
<img src="./rdmassert/qqgroup.jpg" alt="QQ" width="300" style="display: inline-block"/>
</div>

## Thanks
