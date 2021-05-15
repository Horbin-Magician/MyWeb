from flask import views
from flask import request
import json

from tools.dbControllers.BaseDbController import BaseDbController


class UserView(views.View):
  methods = ['POST']
  decorators = []

  def dispatch_request(self):
    return_dict = {'status':'1'}
    #TODO 权限审核
    type = request.json.get('type')
    db = BaseDbController()
    try:
      if(type == 'update'):
        username = request.json.get('username')
        password = request.json.get('password')
        authority = request.json.get('authority')
        db.updateUser(username, password, authority)
        return_dict['status'] = '0'
      elif(type == 'get'):
        datas = db.getData('USER')
        return_datas = []
        for data in datas:
          return_data = {}
          return_data['username'] = data[0]
          return_data['password'] = data[1]
          return_data['authority'] = data[2]
          return_datas.append(return_data)
        return_dict['status'] = '0'
        return_dict['data'] = return_datas
      elif(type == 'del'):
        username = request.json.get('username')
        db.delUser(username)
        return_dict['status'] = '0'
    except:
      #TODO 异常处理
      pass

    return json.dumps(return_dict)
