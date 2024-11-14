import React, { useState } from 'react';
import { Button, Input, Toast, Form } from 'antd-mobile';
import axios from '../utils/axios'; // 导入封装的 axios 实例
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
const LoginPage: React.FC = () => {
  const [account, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // 获取导航函数
  const handleLogin = async () => {
    // 前端验证
    if (!account || !password) {
      Toast.show('用户名和密码不能为空');
      return;
    }

    setLoading(true);
    const encryptedPassword = CryptoJS.MD5(password).toString(); // 转换为 Base64 编码的字符串

    try {
      // 替换为你的 API 地址
      const response = await axios.post('/api/sysUser/login', { account, password:encryptedPassword,type:1      });
      if (response.data.code===200) {
        const token = response.data.data.token;  // 假设返回的 token 存在于 response.data.token 中
        localStorage.setItem('token', token);  // 存储到 localStorage
        Toast.show('登录成功');
        // 跳转到首页
        navigate('/');
        // 重定向到其他页面或执行其他操作
      } else {
        Toast.show('用户名或密码错误');
      }
    } catch (error) {
      Toast.show('登录请求失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>登录</h2>

      <Form layout="horizontal" onFinish={handleLogin}>
        <Form.Item label="用户名" name="account">
          <Input
            value={account}
            onChange={(e) => setUsername(e)}
            placeholder="请输入用户名"
          />
        </Form.Item>

        <Form.Item label="密码" name="password">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e)}
            placeholder="请输入密码"
          />
        </Form.Item>

        <Form.Item>
          <Button
            color="primary"
            block
            onClick={handleLogin}
            loading={loading}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
