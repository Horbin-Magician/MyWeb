from flask import views,request
import json

from tools.spiders import btsowSpider

class SearchView(views.View):
  methods = ['POST']
  decorators = []

  def dispatch_request(self):
    type = request.json.get('type')
    key = request.json.get('key')
    if(type == 'file'):
      datas = btsowSpider.get_data(key)
    return json.dumps(datas)
