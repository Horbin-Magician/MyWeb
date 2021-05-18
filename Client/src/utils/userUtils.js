import { message } from 'antd';

import { reqLogin } from '../api'
import memoryUtils from './memoryUtils'
import storageUtils from './storageUtils'
/**
 * 用户登录
 */
export const userlogin = (username, password) => {
  return new Promise((resolve) => {
    reqLogin(username, password).then(data => {
      if (data && data.status === '0') {//登入成功
        message.success('登录成功，欢迎回来～')
        memoryUtils.userdata = { username, password }
        storageUtils.saveUser({ username, password })
      } else {//账号或密码错误
        message.error('登录失败，账号或密码错误！')
      }
      resolve(data)
    })
  })
}
/**
 * 注销登录
 */
export const userlogout = () => {
  storageUtils.removeUser()
  memoryUtils.userdata = null
  //TODO 服务器注销
  message.success('注销成功')
}
/**
 * 检查storage,并初始化用户信息
 */
export const initUser = () => {
  const user = storageUtils.getUser()
  if (user.username) memoryUtils.userdata = user
  //TODO 建立session
}
/**
 * 检查是否的登录
 * @returns true or false
 */
export const checkLogin = () => {
  if (memoryUtils.userdata && memoryUtils.userdata.username) {
    //TODO 服务器检查
    return true
  }
  return false
}