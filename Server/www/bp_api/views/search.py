from flask import views,request
import json

from tools.spiders import baiduSpider

class SearchView(views.View):
  methods = ['POST']
  decorators = []

  def dispatch_request(self):
    return_dict = {'status' : 1}
    type = request.json.get('type')

    if(type == 'web'):
      key = request.json.get('key')
      datas = baiduSpider.get_data(key)
      return json.dumps(datas)


    #   if(datas['status'] == 0):
    #     return_dict['data'] = datas['data']
    #     return_dict['moreUrl'] = datas['moreUrl']
    #     return_dict['status'] = 0
    #   else:
    #     return_dict['errorMessage'] = datas['errorMessage']
    #     return_dict['status'] = 1

    # return json.dumps(return_dict)
