import SmartyUI from "./entry"
import { createApp } from "vue";

createApp({
    template:`
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
        <div style="margin-bottom:20px;">
            <VCLink href="https://element.eleme.io" target="_blank">default</VCLink>
            <VCLink type="primary">primary</VCLink>
            <VCLink type="success">success</VCLink>
            <VCLink type="warning">warning</VCLink>
            <VCLink type="danger">danger</VCLink>
            <VCLink type="info">info</VCLink>
        </div>
        <div style="margin-bottom:20px;">
            <VCLink disabled>default</VCLink>
            <VCLink type="primary" disabled>primary</VCLink>
            <VCLink type="success" disabled>success</VCLink>
            <VCLink type="warning" disabled>warning</VCLink>
            <VCLink type="danger" disabled>danger</VCLink>
            <VCLink type="info" disabled>info</VCLink>
        </div>
        <div style="margin-bottom:20px;">
            <VCLink icon="edit">default</VCLink>
            <VCLink type="primary" icon="delete">primary</VCLink>
            <VCLink type="success" icon="message"></VCLink>
        </div>
        `
    })
    .use(SmartyUI)
    .mount("#app");