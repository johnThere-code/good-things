import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;  // 用来接收要包裹的子组件
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // 检查是否有 token
    const token = localStorage.getItem('token');
    
    if (!token) {
      // 如果没有 token，跳转到登录页
      navigate('/login');
    }
  }, [navigate]); // 依赖项为 navigate，确保仅在导航函数更新时重新执行

  return <>{children}</>;
};

export default PrivateRoute;
