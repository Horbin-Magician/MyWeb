from flask import views, request, session
import json
from tools.dbControllers.PassagesDbController import PassagesDbController


class PasArticleView(views.View):
  methods = ['POST']
  decorators = []

  def dispatch_request(self):
    return_dict = {'status': '1'}
    type = request.json.get('type')
    db = PassagesDbController()
    if(type == 'getList'):                  # 获取文章列表
      typeName = request.json.get('typeName')
      datas = db.getArticleList(typeName)
      return_datas = []
      for data in datas:
        return_data = {}
        return_data['ID'] = data[0]
        return_data['type'] = data[1]
        return_data['title'] = data[2]
        return_data['introduce'] = data[3]
        return_data['time'] = data[4]
        return_datas.append(return_data)
      return_dict['status'] = '0'
      return_dict['data'] = return_datas
    elif(type == 'getDetail'):                # 获取文章详情
      ID = request.json.get('ID')
      datas = db.getArticleDetail(ID)
      print(datas)
      return_datas = []
      for data in datas:
        return_data = {}
        return_data['ID'] = data[0]
        return_data['type'] = data[1]
        return_data['title'] = data[2]
        return_data['introduce'] = data[3]
        return_data['content'] = data[4]
        return_data['if_menu'] = data[5]
        return_data['time'] = data[6]
        return_datas.append(return_data)
      return_dict['status'] = '0'
      return_dict['data'] = return_datas
    # if(session.get('user_info')):# 权限判断
    #     if(type == 'update'):         # 更新
    #         url = request.json.get('url')
    #         favType = request.json.get('favType')
    #         title = request.json.get('title')
    #         rank = request.json.get('rank')
    #         iconUrl = request.json.get('iconUrl')
    #         description = request.json.get('description')
    #         oldUrl = request.json.get('oldUrl')
    #         if(oldUrl):
    #             db.updateItem(url, favType, title, rank,
    #                           iconUrl, description, oldUrl)
    #         else:
    #             db.updateItem(url, favType, title, rank,
    #                           iconUrl, description)
    #         return_dict['status'] = '0'
    #     if(type == 'del'):            # 删除
    #         url = request.json.get('url')
    #         db.delItem(url)
    #         return_dict['status'] = '0'
    return json.dumps(return_dict)