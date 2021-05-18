import React from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

import App from './App';
import { initUser } from './utils/userUtils'


initUser()//初始化User信息

ReactDOM.render(
  <ConfigProvider locale={zhCN}><App /></ConfigProvider>,
  document.getElementById('root')
);