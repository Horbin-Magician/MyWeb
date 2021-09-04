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
    if(session.get('user_info')):# 权限判断
      if(type == 'update'):         # 更新
        ID = request.json.get('ID')
        articleType = request.json.get('articleType')
        title = request.json.get('title')
        introduce = request.json.get('introduce')
        content = request.json.get('content')
        ifMenu = request.json.get('ifMenu')
        time = request.json.get('time')
        db.updateArticle(ID, articleType, title, introduce, content, ifMenu, time)
        return_dict['status'] = '0'
      if(type == 'del'):            # 删除
        ID = request.json.get('ID')
        db.delArticle(ID)
        return_dict['status'] = '0'
    return json.dumps(return_dict)
