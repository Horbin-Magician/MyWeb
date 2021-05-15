import React from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

import App from './App';
import memoryUtils from './utils/memoryUtils'
import storageUtils from './utils/storageUtils'

//读取local中保存的user，保存到内存中
const user = storageUtils.getUser()
memoryUtils.userdata = user

ReactDOM.render(
  <ConfigProvider locale={zhCN}><App /></ConfigProvider>,
  document.getElementById('root')
);