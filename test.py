import requests
  

html = requests.get('http://www.baidu.com/s?ie=utf-8&wd=python')
print(html.text)