from flask import views
from flask import request
import json

from tools.dbControllers.BaseDbController import BaseDbController


class AuthorityView(views.View):
  methods = ['POST']
  decorators = []

  def dispatch_request(self):
    return_dict = {'status':'1'}
    #TODO 权限审核
    type = request.json.get('type')
    db = BaseDbController()
    try:
      if(type == 'update'):
        name = request.json.get('name')
        menus = request.json.get('menus')
        db.updateAuthority(name, menus)
        return_dict['status'] = '0'
      elif(type == 'get'):
        datas = db.getData('AUTHORITY')
        return_datas = []
        for data in datas:
          return_data = {}
          return_data['name'] = data[0]
          return_data['menus'] = data[1]
          return_datas.append(return_data)
        return_dict['status'] = '0'
        return_dict['data'] = return_datas
      elif(type == 'del'):
        name = request.json.get('name')
        db.delAuthority(name)
        return_dict['status'] = '0'
    except:
      #TODO 异常处理
      pass

    return json.dumps(return_dict)
