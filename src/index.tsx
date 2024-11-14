// React 18+
import ReactDOM from 'react-dom/client';  // 使用 react-dom/client
import App from './App';
import React from 'react';
import './styles/global.scss';  // 引入全局样式
const root = ReactDOM.createRoot(document.getElementById('root')!);  // 创建 root 实例
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
