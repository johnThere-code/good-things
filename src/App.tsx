import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';  // 登录页组件
import HomePage from './pages/Home';  // 首页组件
// import PrivateRoute from './components/PrivateRoute';  // 需要认证的路由
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />}  />
      </Routes>
    </Router>
  );
};

export default App;
