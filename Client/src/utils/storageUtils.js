/*
进行local数据存储管理的工具模块
*/
const USER_KEY = 'user_key'

function saveUser(userdata){
    localStorage.setItem(USER_KEY, JSON.stringify(userdata))
}
function getUser(){
    return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
}
function removeUser(){
    localStorage.removeItem(USER_KEY)
}
const exportObject = {saveUser, getUser, removeUser}
export default exportObject