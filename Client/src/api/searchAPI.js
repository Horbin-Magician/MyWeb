/*
包含应用中所有与搜索相关的api
 */
import ajax from './ajax'


//搜索功能
export const reqSearch = (type, key) => {
  return ajax('/api/search', {type, key}, 'POST')
}