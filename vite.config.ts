/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@": path.join(__dirname, "./src"),
    },
  },
  server: {
    host: "localhost",
    hmr: true,
  },
  plugins: [
    vue(),
    vueJsx({}),
    // 添加UnoCSS插件
    Unocss(),
  ],
  // 添加库模式配置
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        assetFileNames: `assets/[name].css`,
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: "terser", // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
}));
