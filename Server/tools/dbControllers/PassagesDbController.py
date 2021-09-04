from os import name
import sqlite3


class PassagesDbController():
  # 初始化
  def __init__(self):
    try:
      self.conn = sqlite3.connect('datas/Passages.db')
    except:
      self.conn = sqlite3.connect('Server/datas/Passages.db')
    self.c = self.conn.cursor()
  # 关闭数据库
  def __del__(self):
    self.conn.close()
  # 初始化数据库
  def initDb(self):
    self.c.execute('''CREATE TABLE ARTICLE_TYPE
    (ID         INTEGER PRIMARY KEY AUTOINCREMENT,
    TYPE_NAME   TEXT                NOT NULL,
    RANK        INT                 NOT NULL);''')
    self.c.execute('''CREATE TABLE ARTICLE
    (ID           INTEGER PRIMARY KEY AUTOINCREMENT,
    TYPE          INT                NOT NULL,
    TITLE         TEXT                NOT NULL,
    INTRODUCE     TEXT                NOT NULL,
    CONTENT       TEXT                NOT NULL,
    IF_MENU       INTEGER             DEFAULT 0,
    TIME          TEXT                NOT NULL);''')
  # 更新类别
  def updateType(self, ID=None, name=None, rank=None):
    query, data = '', []
    if(ID == None):
      query = '''INSERT INTO ARTICLE_TYPE (TYPE_NAME,RANK) VALUES (?,?)'''
      data = [name, rank]
      self.c.execute(query, data)
    if(ID != None):
      if(name):
        query = '''UPDATE ARTICLE_TYPE SET TYPE_NAME=(?) WHERE ID=(?)'''
        data = [name, ID]
        self.c.execute(query, data)
      if(rank):
        query = '''UPDATE ARTICLE_TYPE SET RANK=(?) WHERE ID=(?)'''
        data = [rank, ID]
        self.c.execute(query, data)
    self.conn.commit()
  # 删除类别
  def delType(self, ID):
    delData = self.getType(ID)
    types = self.getType()
    # 删除type
    query = 'DELETE FROM ARTICLE_TYPE WHERE ID=(?)'
    data = [ID]
    self.c.execute(query, data)
    # 删除所属type的Article
    query = 'DELETE FROM ARTICLE WHERE TYPE=(?)'
    data = [delData[0][1]]
    self.c.execute(query, data)
    self.conn.commit()
    # 更新之后type的排序
    for type in types:
      if(type[2] > delData[0][2]):
        self.updateType(type[0], rank=type[2]-1)
  # 获取type数据，若title为空，返回所有
  def getType(self, ID=None):
    cursor = None
    if(ID == None):
      query = 'SELECT * FROM ARTICLE_TYPE ORDER BY RANK ASC'
      cursor = self.c.execute(query)
    else:
      query = 'SELECT * FROM ARTICLE_TYPE WHERE ID=(?)'
      data = [ID]
      cursor = self.c.execute(query, data)
    datas = []
    for cow in cursor:
      datas.append(cow)
    return datas
  # 获取Article数据
  def getArticleDetail(self, ID=None):
    if(ID == None):
      query = 'SELECT * FROM ARTICLE ORDER BY TIME DESC'
      cursor = self.c.execute(query)
    else:
      query = 'SELECT * FROM ARTICLE WHERE ID=(?) ORDER BY TIME DESC'
      data = [ID]
      cursor = self.c.execute(query, data)
    datas = []
    for cow in cursor:
      datas.append(cow)
    return datas
  # 根据类别获取Article数据
  def getArticleList(self, type=None):
    if(type == None):
      query = 'SELECT ID, TYPE, TITLE, INTRODUCE, TIME FROM ARTICLE ORDER BY TIME DESC'
      cursor = self.c.execute(query)
    else:
      query = 'SELECT ID, TYPE, TITLE, INTRODUCE, TIME FROM ARTICLE WHERE TYPE=(?) ORDER BY TIME DESC'
      data = [type]
      cursor = self.c.execute(query, data)
    datas = []
    for cow in cursor:
      datas.append(cow)
    return datas
  # 更新Article
  def updateArticle(self, ID=0, articleType=None, title=None, introduce=None, content=None, ifMenu=None, time=None):
    query, data = '', []
    if(ID != 0):# 若ID不为空，修改数据
      if(type):
        query = '''UPDATE ARTICLE SET TYPE=(?) WHERE ID=(?)'''
        data = [articleType, ID]
        self.c.execute(query, data)
      if(title):
        query = '''UPDATE ARTICLE SET TITLE=(?) WHERE ID=(?)'''
        data = [title, ID]
        self.c.execute(query, data)
      if(introduce):
        query = '''UPDATE ARTICLE SET INTRODUCE=(?) WHERE ID=(?)'''
        data = [introduce, ID]
        self.c.execute(query, data)
      if(content):
        query = '''UPDATE ARTICLE SET CONTENT=(?) WHERE ID=(?)'''
        data = [content, ID]
        self.c.execute(query, data)
      if(ifMenu):
        query = '''UPDATE ARTICLE SET IF_MENU=(?) WHERE ID=(?)'''
        data = [ifMenu, ID]
        self.c.execute(query, data)
      if(time):
        query = '''UPDATE ARTICLE SET TIME=(?) WHERE ID=(?)'''
        data = [time, ID]
        self.c.execute(query, data)
    else:# 若ID为空,插入数据
      query = '''INSERT INTO ARTICLE (TYPE,TITLE,INTRODUCE,CONTENT,IF_MENU,TIME) VALUES (?,?,?,?,?,?)'''
      data = [articleType, title, introduce, content, ifMenu, time]
      self.c.execute(query, data)
    self.conn.commit()
  # 删除Article
  def delArticle(self, ID):
    query = 'DELETE FROM ARTICLE WHERE ID=(?)'
    data = [ID]
    self.c.execute(query, data)
    self.conn.commit()

# test code
if __name__ == '__main__':
  db = PassagesDbController()
  db.initDb()