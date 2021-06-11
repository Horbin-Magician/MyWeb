import requests
from bs4 import BeautifulSoup
import threading


user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36 Edg/88.0.705.56'
datas = []
moreUrl = ''

def get_data(keyword):
  # 初始化全局变量
  global datas
  global moreUrl
  datas = []

  rooturl = 'http://www.baidu.com/s?ie=utf-8&wd='
  url = rooturl + keyword
  crawl_html(url)
  return {'data':datas, 'moreUrl':moreUrl}

def crawl_html(url):
  global moreUrl
  moreUrl = ''
  headers = {'User-Agent': user_agent}
  html = None
  try:
    html = requests.get(url, headers=headers)
    if(html.status_code != 200):
      print('访问错误：' + str(html.status_code))
  except requests.exceptions.RequestException as e:
    print('baiduSpider:'+'访问url出现异常!')
  soup = BeautifulSoup(html.text, 'lxml')

  page = soup.select('#page')
  if(len(page) > 0):
    if(len(page[0].text) > 5):
      moreUrl = url + '&pn=10'

  results = soup.select('div.result')
  count = 0
  for result in results:
    thread = Parser_thread(result) # 创建爬虫线程
    count = count + 1
    thread.start() # 启动线程
    thread.join()

class Parser_thread(threading.Thread):
    def __init__(self,content):
        threading.Thread.__init__(self)
        self.content = content

    def run(self):
      try:
        data = {}
        data['title'] = self.content.select("h3")[0].text
        href = self.content.select('h3 a')[0]['href']
        href = 'https' + href[4:]
        data['href'] = requests.get(href, allow_redirects=False).headers['location']
        data['contain'] = self.content.select('div.c-abstract')[0].text
        datas.append(data)
      except:
        pass #TODO 错误处理

if __name__ == '__main__':
  print(get_data('python'))
