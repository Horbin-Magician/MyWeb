from flask import views,request,session
import json
from tools.dbControllers.PassagesDbController import PassagesDbController

class PasTypeView(views.View):
  methods = ['POST']
  decorators = []
  def dispatch_request(self):
    return_dict = {'status':'1'}
    type = request.json.get('type')
    db = PassagesDbController()
    if(type == 'get'):                      # 获取type数据
      datas = db.getType()
      return_datas = []
      for data in datas:
        return_data = {}
        return_data['ID'] = data[0]
        return_data['name'] = data[1]
        return_data['rank'] = data[2]
        return_datas.append(return_data)
      return_dict['status'] = '0'
      return_dict['data'] = return_datas
    # if(session.get('user_info')):       # 权限判断
    #     if(type == 'update'):               # 更新type数据
    #         title = request.json.get('title')
    #         rank = request.json.get('rank')
    #         oldTitle = request.json.get('oldTitle')
    #         if(oldTitle):
    #             db.updateType(title, rank, oldTitle)
    #         else:
    #             db.updateType(title, rank)
    #         return_dict['status'] = '0'
    #     if(type == 'del'):                  # 删除type数据
    #         title = request.json.get('title')
    #         db.delType(title)
    #         return_dict['status'] = '0'
    #     if(type == 'move'):                 # 移动type
    #         fType = request.json.get('fType')
    #         tType = request.json.get('tType')
    #         db.moveTypeData(fType, tType)
    #         return_dict['status'] = '0'
    return json.dumps(return_dict)