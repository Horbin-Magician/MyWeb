/*
包含应用中所有与文章相关的api
 */
import ajax from './ajax'


//获取文章类
export const reqPasTypeList = () => {
  return ajax('/api/passages/pastype', {'type':'get'}, 'POST')
}
// //删除收藏类
// export const reqDelType = (title) => {
//   return ajax('/api/favourites/favtype', {'type':'del', title}, 'POST')
// }
// //更新收藏类
// export const reqUpdateType = (title, rank, oldTitle=undefined) => {
//   return ajax('/api/favourites/favtype', {'type':'update', title, rank, oldTitle}, 'POST')
// }
// //移动收藏类
// export const reqMoveType = (fType, tType) => {
//   return ajax('/api/favourites/favtype', {'type':'move', fType, tType}, 'POST')
// }
//按类获取文章列表
export const reqPasArticleList = (typeName=undefined) => ajax('/api/passages/pasarticle', {'type':'getList', typeName}, 'POST')
//获取文章详情
export const reqPasArticleDetail = (ID=undefined) => ajax('/api/passages/pasarticle', {'type':'getDetail', ID}, 'POST')
// //删除收藏项
// export const reqDelItem = (url) => ajax('/api/favourites/favitem', {'type':'del', url}, 'POST')
// //更新收藏项
// export const reqUpdateItem = (url, favType, title, rank, iconUrl, description, oldUrl=undefined) => {
//   return ajax('/api/favourites/favitem', {'type':'update', url, favType, title, rank, iconUrl, description, oldUrl}, 'POST')
// }