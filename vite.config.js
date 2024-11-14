import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // 打包输出目录
    sourcemap: true, // 是否生成源码映射文件，方便调试
  }
});
