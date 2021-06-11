/*
包含应用中所有api
 */
import ajax from './ajax'
import md5 from 'md5'


//登入
export const reqLogin = (username, password) => {
    password = md5(password)
    return ajax('/api/login', {username, password}, 'POST')
}
//获取用户列表
export const reqUserList = () => ajax('/api/user', {'type':'get'}, 'POST')
//更新用户
export const reqUpdateUser = (username, password, authority) => {
    password = md5(password)
    return ajax('/api/user', {'type':'update', username, password, authority}, 'POST')
}
//删除用户
export const reqDelUser = (username) => {
    ajax('/api/user', {'type':'del', username}, 'POST')
}
//获取角色列表
export const reqAuthorityList = () => ajax('/api/authority', {'type':'get'}, 'POST')
//更新角色
export const reqUpdateAuthority = (name, menus='') => {
    ajax('/api/authority', {'type':'update', name, menus}, 'POST')
}
//删除角色
export const reqDelAuthority = (name) => {
    ajax('/api/authority', {'type':'del', name}, 'POST')
}

//获取收藏类
export const reqFavTypeList = () => {
    return ajax('/api/favourites/favtype', {'type':'get'}, 'POST')
}
//删除收藏类
export const reqDelType = (title) => {
    return ajax('/api/favourites/favtype', {'type':'del', title}, 'POST')
}
//更新收藏类
export const reqUpdateType = (title, rank, oldTitle=undefined) => {
    return ajax('/api/favourites/favtype', {'type':'update', title, rank, oldTitle}, 'POST')
}
//移动收藏类
export const reqMoveType = (fType, tType) => {
    return ajax('/api/favourites/favtype', {'type':'move', fType, tType}, 'POST')
}
//获取收藏项
export const reqFavItemList = (favType=undefined) => ajax('/api/favourites/favitem', {'type':'get', favType}, 'POST')
//删除收藏项
export const reqDelItem = (url) => ajax('/api/favourites/favitem', {'type':'del', url}, 'POST')
//更新收藏项
export const reqUpdateItem = (url, favType, title, rank, description, oldUrl=undefined) => {
    return ajax('/api/favourites/favitem', {'type':'update', url, favType, title, rank, description, oldUrl}, 'POST')
}
//搜索功能
export const reqSearch = (type, key) => {
  return ajax('/api/search', {type, key}, 'POST')
}