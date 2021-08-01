from datetime import time
import requests
from bs4 import BeautifulSoup


headers = {
  "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
  "Referer": "https://www.baidu.com",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  "Host" : "www.baidu.com",
  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
}

def get_data(keyword):
  rooturl = 'https://www.baidu.com/s?ie=utf-8&wd='
  url = rooturl + keyword
  return crawl_html(url)

def crawl_html(url):
  html = None
  ifGetHtml = False

  while(ifGetHtml == False):
    try:
      html = requests.get(url, headers=headers, timeout=5)
      if(html.status_code != 200):
        return {'status':1, 'errorMessage':'出现异常！'}
    except requests.exceptions.RequestException as e:
      return {'status':1, 'errorMessage':'出现异常！'}
    
    soup = BeautifulSoup(html.text, 'lxml')

    timeout = soup.select('.timeout')
    if(len(timeout) == 0):
      print(html.text)
      ifGetHtml = True

  moreUrl = ''
  datas = []

  page = soup.select('#page')
  if(len(page) > 0):
    if(len(page[0].text) > 5):
      moreUrl = url + '&pn=10'
  
  results = soup.select('div.result')
  for result in results:
    data = parse_result(result)
    if(data):
      datas.append(data)
  return {'status':0, 'data':datas, 'moreUrl':moreUrl}


def parse_result(result):
  data = {}
  try:
    data['title'] = result.select("h3")[0].text
    href = result.select('h3 a')[0]['href']
    data['href'] = 'https' + href[4:]
    data['contain'] = result.select('div.c-abstract')[0].text
    return data
  except:
    pass

if __name__ == '__main__':
  print(get_data('python'))
