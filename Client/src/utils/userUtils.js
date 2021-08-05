import { message } from 'antd';

import { reqLogin } from '../api/baseAPI'
import memoryUtils from './memoryUtils'
import storageUtils from './storageUtils'
/**
 * 用户登录
 */
let updateFuns = [] //用户状态更新回调函数
//添加回调
export const addUpdateFun = (fun) =>{
  updateFuns.push(fun)
}
//更新时调用回调
const update = ()=>{
  updateFuns.forEach(e=>{
    e()
  })
}
/**
 * 
 * @param {*用户名} username 
 * @param {*密码} password 
 * @returns 结果promise
 */
export const userlogin = (username, password) => {
  return new Promise((resolve) => {
    reqLogin(username, password).then(data => {
      if (data && data.status === '0') {//登入成功
        message.success('登录成功，欢迎回来～')
        const authority = data.authority
        memoryUtils.userdata = { username, password, authority}
        storageUtils.saveUser({ username, password, authority })
        update()//更新
      } else {//账号或密码错误
        const user = storageUtils.getUser()
        if (user.username){
          storageUtils.removeUser()
          memoryUtils.userdata = null
          console.log('update')
          update()//更新
          message.error('用户信息已更新，请重新登录！')
        }
        else message.error('登录失败，账号或密码错误！')
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
  update()//更新
  message.success('注销成功')
}
/**
 * 检查storage,并初始化用户信息
 */
export const initUser = () => {
  const user = storageUtils.getUser()
  if (user.username){
    memoryUtils.userdata = user
    return userlogin(user.username, user.password)
  }
  return null
}
/**
 * 检查是否的登录
 * @returns true or false
 */
export const checkLogin = () => {
  if (memoryUtils.userdata && memoryUtils.userdata.username) {
    return true
  }
  return false
}