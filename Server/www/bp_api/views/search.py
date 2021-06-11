from flask import views,request
import json

from tools.spiders import baiduSpider

class SearchView(views.View):
  methods = ['POST']
  decorators = []

  def dispatch_request(self):
    return_dict = {'status':'1'}
    type = request.json.get('type')

    if(type == 'web'):
      key = request.json.get('key')
      return_datas = []
      datas = baiduSpider.get_data(key)
      for data in datas['data']:
        return_data = {}
        return_data['title'] = data['title']
        return_data['href'] = data['href']
        return_data['contain'] = data['contain']
        return_datas.append(return_data)
      return_dict['status'] = '0'
      return_dict['data'] = return_datas
      return_dict['moreUrl'] = datas['moreUrl']
    return json.dumps(return_dict)
