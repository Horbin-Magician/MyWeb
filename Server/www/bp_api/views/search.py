from flask import views,request
import json

from tools.spiders import baiduSpider, btsowSpider

class SearchView(views.View):
  methods = ['POST']
  decorators = []

  def dispatch_request(self):
    type = request.json.get('type')
    key = request.json.get('key')
    if(type == 'web'):
      datas = baiduSpider.get_data(key)
    elif(type == 'file'):
      datas = btsowSpider.get_data(key)
    return json.dumps(datas)
