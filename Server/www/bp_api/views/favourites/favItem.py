from flask import views
from flask import request
import json

from tools.dbControllers.FavouritesDbController import FavouritesDbController


class FavItemView(views.View):
  methods = ['POST']
  decorators = []

  def dispatch_request(self):
    return_dict = {'status':'1'}
    type = request.json.get('type')

    db = FavouritesDbController()
    if(type == 'get'):
        favType = request.json.get('favType')
        datas = db.getItemDataFromType(favType)
        return_datas = []
        for data in datas:
          return_data = {}
          return_data['url'] = data[0]
          return_data['type'] = data[1]
          return_data['title'] = data[2]
          return_data['rank'] = data[3]
          return_data['description'] = data[4]
          return_datas.append(return_data)
        return_dict['status'] = '0'
        return_dict['data'] = return_datas
    if(type == 'update'):
        url = request.json.get('url')
        favType = request.json.get('favType')
        title = request.json.get('title')
        rank = request.json.get('rank')
        description = request.json.get('description')
        oldUrl = request.json.get('oldUrl')
        if(oldUrl):
            db.updateItem(url, favType, title, rank, description, oldUrl)
        else:
            db.updateItem(url, favType, title, rank, description)
        return_dict['status'] = '0'
    if(type == 'del'):
        url = request.json.get('url')
        db.delItem(url)
        return_dict['status'] = '0'
    return json.dumps(return_dict)