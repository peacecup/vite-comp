# Link 链接

## 基础用法

基础的文字链接用法。

::: demo 使用`type`、`disabled`、`underline`、`href`、`icon`属性来定义 Link 的样式。

```vue
<template>
  <div>
    <VCLink href="https://element.eleme.io" target="_blank">default</VCLink>
    <VCLink type="primary">primary</VCLink>
    <VCLink type="success">success</VCLink>
    <VCLink type="warning">warning</VCLink>
    <VCLink type="danger">danger</VCLink>
    <VCLink type="info">info</VCLink>
  </div>
</template>
```
:::

## 禁用状态

文字链接不可用状态。

::: demo 设置 disabled 属性即可。

```vue
<template>
  <div>
    <VCLink disabled>default</VCLink>
    <VCLink type="primary" disabled>primary</VCLink>
    <VCLink type="success" disabled>success</VCLink>
    <VCLink type="warning" disabled>warning</VCLink>
    <VCLink type="danger" disabled>danger</VCLink>
    <VCLink type="info" disabled>info</VCLink>
  </div>
</template>
```
:::
## 下划线

文字链接下划线。

::: demo 设置 underline 属性即可。

```vue
<template>
  <div>
    <VCLink underline>default</VCLink>
    <VCLink type="warning" underline>primary</VCLink>
    <VCLink type="warning" underline>warning</VCLink>
    <VCLink type="danger" underline>danger</VCLink>
    <VCLink type="info" underline>info</VCLink>
  </div>
</template>
```
:::
## 图标

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

::: demo 设置 icon 属性即可。

```vue
<template>
  <div>
    <VCLink icon="edit">default</VCLink>
    <VCLink type="primary" icon="delete">primary</VCLink>
    <VCLink type="success" icon="message"></VCLink>
  </div>
</template>
```
:::

## API

### Attributes

| Name      | Description                         | Type                                                                            | Default |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------- | ------- |
| type      | type                                | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline | whether the component has underline | ^[boolean]                                                                      | true    |
| disabled  | whether the component is disabled   | ^[boolean]                                                                      | false   |
| href      | same as native hyperlink's `href`   | ^[string]                                                                       | —       |
| icon      | icon component                      | ^[string] / ^[Component]                                                        | —       |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
| icon    | customize icon component  |