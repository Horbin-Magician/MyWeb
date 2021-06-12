import requests
from bs4 import BeautifulSoup


headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'max-age=0',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
}
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
  html = None
  try:
    html = requests.get(url, headers=headers, timeout=5)
    if(html.status_code != 200):
      print('访问错误：' + str(html.status_code))
  except requests.exceptions.RequestException as e:
    print('baiduSpider:'+'访问url出现异常!')
  
  fo = open('debug.log', 'w')
  fo.write(html.text)

  soup = BeautifulSoup(html.text, 'lxml')
  page = soup.select('#page')
  if(len(page) > 0):
    if(len(page[0].text) > 5):
      moreUrl = url + '&pn=10'
  results = soup.select('div.result')
  for result in results:
    parse_result(result)

def parse_result(result):
  data = {}
  try:
    data['title'] = result.select("h3")[0].text
    href = result.select('h3 a')[0]['href']
    data['href'] = 'https' + href[4:]
    data['contain'] = result.select('div.c-abstract')[0].text
    datas.append(data)
  except:
    # TODO
    pass

if __name__ == '__main__':
  print(get_data('python'))
