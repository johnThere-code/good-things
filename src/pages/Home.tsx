import React, { useState } from 'react';
import Menu from '../components/Menu';  // 导入退出登录按钮组件
import { Button, Toast, Card } from 'antd-mobile';
import { AntOutline, } from 'antd-mobile-icons'
import './DroneControl.scss';  // 引入 Less 样式文件
import axios from '../utils/axios'; // 导入封装的 axios 实例
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate(); // 获取导航函数
  const [loading, setLoading] = useState(false);
  const [account, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const items = [
    { id: 1, title: 'Munch Rotary Cheese Grater', description: 'Cheese Shredder with Handle & 5 Stainless Steel Blades - Manuel Rotating Cheese Grinder & - Potato & Vegetable Grater', url: 'https://amzn.to/4fxbZ2D', img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/5d771854-97a2-484c-b155-a55f0ab19bd6.__CR0,0,900,900_PT0_SX300_V1___.jpg' },
    { id: 2, title: 'Umbra Tipsy Bottle Opener', description: 'Sculptural Bar Accessory, Luxury Flying Bird Soda, Cider, and Beer Opener, Chrome', url: 'https://amzn.to/4ewIYD5', img: 'https://m.media-amazon.com/images/I/61qrzLWuqOL._AC_SX569_.jpg' },
    { id: 3, title: 'Soap Dispensing Palm Brush', description: 'Soap Dispensing Palm Brush for Pot Pan SinkCleaning,Tableware Kitchen Scrubber,with PET Replacement Balls One Set and Storage Tray', url: 'https://amzn.to/4fOYfjI', img: 'https://m.media-amazon.com/images/I/61z7XsmqmqL._AC_SX679_.jpg' },
  ]
  const handleDirection = async (direction: string) => {
    console.log(`操作方向: ${direction}`);
    setLoading(true);
    // 你可以在这里调用相应的接口或逻辑，控制无人机的动作
    try {
      // 替换为你的 API 地址
      const response = await axios.post('/api/sysUser/login', { account, password, type: 1 });
      if (response.data.code === 200) {
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
    <div>
      <h1 className='fr_c_c' >Good things to share</h1>

      <div className="container fc_s_s">
        {items.map((item) => (
          <a
            href={item.url}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Card >
              <div className='fr_c_c'>
                <div className='imgdiv' style={{ width: 70, height: 70, marginRight: 12, borderRadius: 4 }}>
                  <img
                  className='img'
                    src={item.img}
                    alt={item.title}
                    style={{ width: 70, height: 70,  borderRadius: 4 }}
                  />
                </div>

                <div>
                  <div style={{ fontWeight: 'bold' }}>{item.title}</div>
                  <div>{item.description}</div>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
