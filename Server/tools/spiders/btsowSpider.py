import requests
from bs4 import BeautifulSoup


headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
  "Referer": "https://btsow.shop/",
}

def get_data(keyword):
  rooturl = 'https://btsow.shop/search/'
  url = rooturl + keyword
  return crawl_html(url)

def crawl_html(url):
  html = None
  try:
    html = requests.get(url, headers=headers, timeout=5)
    if(html.status_code != 200):
      return {'status':1, 'errorMessage':'出现异常！'}
  except requests.exceptions.RequestException as e:
    return {'status':1, 'errorMessage':'出现异常！'}
  
  soup = BeautifulSoup(html.text, 'lxml')
  moreUrl = ''
  datas = []

  page = soup.select('.pagination')
  print(page)
  if(len(page) > 0):
    moreUrl = url + '/page/2'
  
  results = soup.select('div.data-list div.row')[1:]

  for result in results:
    data = parse_result(result)
    if(data):
      datas.append(data)
  return {'status':0, 'data':datas, 'moreUrl':moreUrl}


def parse_result(result):
  data = {}
  try:
    data['title'] = result.select('div.file')[0].text
    data['href'] = result.select('a')[0]['href'][len('https://btsow.cam/magnet/detail/hash/'):]
    data['contain'] = '大小：' + result.select('div.size')[0].text + ' 日期：' + result.select('div.date')[0].text
    return data
  except:
    # TODO
    pass

if __name__ == '__main__':
  print(get_data('python'))
