/*
进行local数据存储管理的工具模块
*/
const USER_KEY = 'user_key'

//保存用户信息
function saveUser(userdata){
    localStorage.setItem(USER_KEY, JSON.stringify(userdata))
}
//获取用户信息
function getUser(){
    return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
}
//去除用户信息
function removeUser(){
    localStorage.removeItem(USER_KEY)
}
const exportObject = {saveUser, getUser, removeUser}
export default exportObject