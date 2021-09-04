/*
包含应用中所有与文章相关的api
 */
import ajax from './ajax'


//获取文章类
export const reqPasTypeList = () => {
  return ajax('/api/passages/pastype', {'type':'get'}, 'POST')
}
//删除文章类
export const reqDelPasType = (ID) => {
  return ajax('/api/passages/pastype', {'type':'del', ID}, 'POST')
}
//更新文章类
export const reqUpdatePasType = (ID, name, rank) => {
  return ajax('/api/passages/pastype', {'type':'update', ID, name, rank}, 'POST')
}
//按类获取文章列表
export const reqPasArticleList = (typeName=undefined) => ajax('/api/passages/pasarticle', {'type':'getList', typeName}, 'POST')
//获取文章详情
export const reqPasArticleDetail = (ID=undefined) => ajax('/api/passages/pasarticle', {'type':'getDetail', ID}, 'POST')
//删除文章
export const reqDelArticleItem = (ID) => ajax('/api/passages/pasarticle', {'type':'del', ID}, 'POST')
//更新文章
export const reqUpdatePasItem = (ID, articleType, title, introduce, content, ifMenu, time) => {
  return ajax('/api/passages/pasarticle', {'type':'update', ID, articleType, title, introduce, content, ifMenu, time}, 'POST')
}