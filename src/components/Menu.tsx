import React from 'react';
import { Popover, Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

const LogoutPopover: React.FC = () => {
  const navigate = useNavigate();

  // 退出登录的处理函数
  const handleLogout = () => {
    localStorage.removeItem('token');  // 清除 token
    navigate('/login');  // 跳转到登录页
  };

  // 气泡菜单的内容
  const content = (
    <div>
      <Button block onClick={handleLogout}>退出登录</Button>
    </div>
  );

  return (
    <Popover content={content} trigger="click">
      <Button  style={{ position: 'absolute', top: '20px', right: '20px' }}>
        设置
      </Button>
    </Popover>
  );
};

export default LogoutPopover;
