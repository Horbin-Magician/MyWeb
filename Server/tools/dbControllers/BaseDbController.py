import sqlite3


class BaseDbController():
  def __init__(self):
    self.conn = sqlite3.connect('datas/base.db')
    self.c = self.conn.cursor()

  def __del__(self):
    self.conn.close()

  def initDb(self):
    self.c.execute('''CREATE TABLE USER
    (USERNAME   TEXT  PRIMARY KEY   NOT NULL,
    PASSWORD   TEXT                 NOT NULL,
    AUTHORITY  TEXT);''')
    self.c.execute('''CREATE TABLE AUTHORITY
    (NAME      TEXT   PRIMARY KEY   NOT NULL,
    MENUS      TEXT);''')
  
  def updateUser(self, username, password='', authority=''):
    query,data = '',[]
    datas = self.getUserData(username)
    if(len(datas) == 0):
      query = '''INSERT INTO USER (USERNAME,PASSWORD,AUTHORITY) VALUES (?,?,?)'''
      data = [username, password, authority]
      self.c.execute(query, data)
    else:
      if(password != ''):
        query = '''UPDATE USER SET PASSWORD=(?) WHERE USERNAME=(?)'''
        data = [password, username]
        self.c.execute(query, data)
      if(authority != ''):
        query = '''UPDATE USER SET AUTHORITY=(?) WHERE USERNAME=(?)'''
        data = [authority, username]
        self.c.execute(query, data)
    self.conn.commit()

  def delUser(self, username):
    query = 'DELETE FROM USER WHERE USERNAME=(?)'
    data = [username]
    self.c.execute(query, data)
    self.conn.commit()
  
  def updateAuthority(self, name, menus=''):
    query,data = '',[]
    datas = self.getAuthorityData(name)
    if(len(datas) == 0):
      query = '''INSERT INTO AUTHORITY (NAME,MENUS) VALUES (?,?)'''
      data = [name, menus]
    else:
      query = '''UPDATE AUTHORITY SET MENUS=(?) WHERE NAME=(?)'''
      data = [menus, name]
    self.c.execute(query, data)
    self.conn.commit()
  
  def delAuthority(self, name):
    query = 'DELETE FROM AUTHORITY WHERE NAME=(?)'
    data = [name]
    self.c.execute(query, data)
    self.conn.commit()
  
  def setAuthority(self, name, menus):
    query = '''UPDATE COMPANY SET MENUS=(?) where NAME=(?)'''
    data = [menus, name]
    self.c.execute(query, data)
    self.conn.commit()

  def getData(self, tableName):
    query = 'SELECT * FROM ' + tableName
    cursor = self.c.execute(query)
    datas = []
    for cow in cursor:
      datas.append(cow)
    return datas
  
  def getUserData(self, userName=None):
    if(userName == None):
      return self.getData('USER')
    query = 'SELECT * FROM USER WHERE USERNAME=(?)'
    data = [userName]
    cursor = self.c.execute(query, data)
    datas = []
    for cow in cursor:
      datas.append(cow)
    return datas
  
  def getAuthorityData(self, name=None):
    if(name == None):
      return self.getData('AUTHORITY')
    query = 'SELECT * FROM AUTHORITY WHERE NAME=(?)'
    data = [name]
    cursor = self.c.execute(query, data)
    datas = []
    for cow in cursor:
      datas.append(cow)
    return datas


# test code
if __name__ == '__main__':
  bDb = BaseDbController()