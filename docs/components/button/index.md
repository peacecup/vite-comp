# Button 按钮

常用操作按钮
<VCButton color="blue">主要按钮</VCButton>
<VCButton color="green">绿色按钮</VCButton>
<VCButton color="gray">灰色按钮</VCButton>
<VCButton color="yellow">黄色按钮</VCButton>
<VCButton color="red">红色按钮</VCButton>

## 基础用法

基础的操作按钮用法

::: demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
  <div style="margin-bottom:20px;">
    <VCButton color="blue">主要按钮</VCButton>
    <VCButton color="green">绿色按钮</VCButton>
    <VCButton color="gray">灰色按钮</VCButton>
    <VCButton color="yellow">黄色按钮</VCButton>
    <VCButton color="red">红色按钮</VCButton>
  </div>
  <div style="margin-bottom:20px;">
    <VCButton color="blue" plain>朴素按钮</VCButton>
    <VCButton color="green" plain>绿色按钮</VCButton>
    <VCButton color="gray" plain>灰色按钮</VCButton>
    <VCButton color="yellow" plain>黄色按钮</VCButton>
    <VCButton color="red" plain>红色按钮</VCButton>
  </div>
  <div style="margin-bottom:20px;">
    <VCButton size="small" plain>小按钮</VCButton>
    <VCButton size="medium" plain>中按钮</VCButton>
    <VCButton size="large" plain>大按钮</VCButton>
  </div>
  <div style="margin-bottom:20px;">
    <VCButton color="blue" round plain icon="search">搜索按钮</VCButton>
    <VCButton color="green" round plain icon="edit">编辑按钮</VCButton>
    <VCButton color="gray" round plain icon="check">成功按钮</VCButton>
    <VCButton color="yellow" round plain icon="message">提示按钮</VCButton>
    <VCButton color="red" round plain icon="delete">删除按钮</VCButton>
  </div>
  <div style="margin-bottom:20px;">
    <VCButton color="blue" round plain icon="search"></VCButton>
    <VCButton color="green" round plain icon="edit"></VCButton>
    <VCButton color="gray" round plain icon="check"></VCButton>
    <VCButton color="yellow" round plain icon="message"></VCButton>
    <VCButton color="red" round plain icon="delete"></VCButton>
  </div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

::: demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
  <div class="flex flex-row">
    <VCButton icon="edit" plain></VCButton>
    <VCButton icon="delete" plain></VCButton>
    <VCButton icon="share" plain></VCButton>
    <VCButton round plain icon="search">搜索</VCButton>
  </div>
</template>
```
:::

## Button API

### Button Attributes

| Name                               | Description                                                             | Type                                                                            | Default |
| ---------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------- |
| size                               | button size                                                             | ^[enum]`'large'\| 'default'\| 'small'`                                          | —       |
| type                               | button type                                                             | ^[enum]`'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'\| 'text'(delete)` | —       |
| plain                              | determine whether it's a plain button                                   | ^[boolean]                                                                      | false   |
| text | determine whether it's a text button                                    | ^[boolean]                                                                      | false   |
| bg   | determine whether the text button background color is always on         | ^[boolean]                                                                      | false   |
| link | determine whether it's a link button                                    | ^[boolean]                                                                      | false   |
| round                              | determine whether it's a round button                                   | ^[boolean]                                                                      | false   |
| circle                             | determine whether it's a circle button                                  | ^[boolean]                                                                      | false   |
| loading                            | determine whether it's loading                                          | ^[boolean]                                                                      | false   |
| loading-icon                       | customize loading icon component                                        | ^[string] / ^[Component]                                                        | Loading |
| disabled                           | disable the button                                                      | ^[boolean]                                                                      | false   |
| icon                               | icon component                                                          | ^[string] / ^[Component]                                                        | —       |
| autofocus                          | same as native button's `autofocus`                                     | ^[boolean]                                                                      | false   |
| native-type                        | same as native button's `type`                                          | ^[enum]`'button'\| 'submit'\| 'reset'`                                          | button  |
| auto-insert-space                  | automatically insert a space between two chinese characters             | ^[boolean]                                                                      | —       |
| color                              | custom button color, automatically calculate `hover` and `active` color | ^[string]                                                                       | —       |
| dark                               | dark mode, which automatically converts `color` to dark mode colors     | ^[boolean]                                                                      | false   |

### Button Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |
