import sqlite3


class FavouritesDbController():
    def __init__(self):
        self.conn = sqlite3.connect('datas/favourites.db')
        self.c = self.conn.cursor()

    def __del__(self):
        self.conn.close()

    def initDb(self):
        self.c.execute('''CREATE TABLE TYPE
       (TITLE   TEXT  PRIMARY KEY   NOT NULL,
       RANK     INT                 NOT NULL);''')
        self.c.execute('''CREATE TABLE ITEM
       (URL      TEXT   PRIMARY KEY   NOT NULL,
        TYPE     TEXT                NOT NULL,
        TITLE    TEXT                NOT NULL,
        RANK     INT                 NOT NULL,
        DESCRIPTION TEXT);''')
    
    def updateType(self, title, rank, oldTitle=None):
        query,data = '',[]
        if(oldTitle):
            if(rank):
                query = '''UPDATE TYPE SET RANK=(?) WHERE TITLE=(?)'''
                data = [rank, oldTitle]
                self.c.execute(query, data)
            if(title):
                query = '''UPDATE TYPE SET TITLE=(?) WHERE TITLE=(?)'''
                data = [title, oldTitle]
                self.c.execute(query, data)
        else:
            datas = self.getTypeData(title)
            if(len(datas) == 0):
                query = '''INSERT INTO TYPE (TITLE,RANK) VALUES (?,?)'''
                data = [title, rank]
                self.c.execute(query, data)
            else:
                query = '''UPDATE TYPE SET RANK=(?) WHERE TITLE=(?)'''
                data = [rank, title]
                self.c.execute(query, data)
        self.conn.commit()

    def delType(self, title):
        delData = self.getTypeData(title)
        types = self.getTypeData()
        query = 'DELETE FROM TYPE WHERE TITLE=(?)'
        data = [title]
        self.c.execute(query, data)
        self.conn.commit()
        for type in types:
            if(type[1]>delData[0][1]):
                self.updateType(type[0], type[1]-1)
    
    def getTypeData(self, title=None):
        if(title == None):
            query = 'SELECT * FROM TYPE ORDER BY RANK ASC'
            cursor = self.c.execute(query)
            datas = []
            for cow in cursor:
                datas.append(cow)
            return datas
        query = 'SELECT * FROM TYPE WHERE TITLE=(?)'
        data = [title]
        cursor = self.c.execute(query, data)
        datas = []
        for cow in cursor:
            datas.append(cow)
        return datas

    def moveTypeData(self, mvFrom, mvTo):
        datas = self.getTypeData()
        fRank,tRank = 0,0
        for data in datas:
            if(data[0] == mvFrom):
                fRank = data[1]
            if(data[0] == mvTo):
                tRank = data[1]
        self.updateType(mvFrom, tRank)
        for data in datas:
            if(fRank>tRank):
                if(data[1]<fRank and data[1]>=tRank):
                    self.updateType(data[0], data[1]+1)
            else:
                if(data[1]>fRank and data[1]<=tRank):
                    self.updateType(data[0], data[1]-1)

    def getItemData(self, url=None):
        if(url == None):
            query = 'SELECT * FROM ITEM ORDER BY RANK ASC'
            cursor = self.c.execute(query)
            datas = []
            for cow in cursor:
                datas.append(cow)
            return datas
        query = 'SELECT * FROM ITEM WHERE URL=(?)'
        data = [url]
        cursor = self.c.execute(query, data)
        datas = []
        for cow in cursor:
            datas.append(cow)
        return datas
    
    def getItemDataFromType(self, type):
        query = 'SELECT * FROM ITEM WHERE TYPE=(?) ORDER BY RANK DESC'
        data = [type]
        cursor = self.c.execute(query, data)
        datas = []
        for cow in cursor:
            datas.append(cow)
        return datas

    def updateItem(self, url, type=None, title=None, rank=None, description=None, oldUrl=None):
        query,data = '',[]
        if(oldUrl):
            if(type):
                query = '''UPDATE ITEM SET TYPE=(?) WHERE URL=(?)'''
                data = [type, oldUrl]
                self.c.execute(query, data)
            if(title):
                query = '''UPDATE ITEM SET TITLE=(?) WHERE URL=(?)'''
                data = [title, oldUrl]
                self.c.execute(query, data)
            if(rank):
                query = '''UPDATE ITEM SET RANK=(?) WHERE URL=(?)'''
                data = [rank, oldUrl]
                self.c.execute(query, data)
            if(description):
                query = '''UPDATE ITEM SET DESCRIPTION=(?) WHERE URL=(?)'''
                data = [description, oldUrl]
                self.c.execute(query, data)
            if(url):
                query = '''UPDATE ITEM SET URL=(?) WHERE URL=(?)'''
                data = [url, oldUrl]
                self.c.execute(query, data)
        else:
            datas = self.getItemData(url)
            if(len(datas) == 0):
                query = '''INSERT INTO ITEM (URL,TYPE,TITLE,RANK,DESCRIPTION) VALUES (?,?,?,?,?)'''
                data = [url, type, title, rank, description]
                self.c.execute(query, data)
            else:
                if(type):
                    query = '''UPDATE ITEM SET TYPE=(?) WHERE URL=(?)'''
                    data = [type, url]
                    self.c.execute(query, data)
                if(title):
                    query = '''UPDATE ITEM SET TITLE=(?) WHERE URL=(?)'''
                    data = [title, url]
                    self.c.execute(query, data)
                if(rank):
                    query = '''UPDATE ITEM SET RANK=(?) WHERE URL=(?)'''
                    data = [rank, url]
                    self.c.execute(query, data)
                if(description):
                    query = '''UPDATE ITEM SET DESCRIPTION=(?) WHERE URL=(?)'''
                    data = [description, url]
                    self.c.execute(query, data)
        self.conn.commit()

    def delItem(self, url):
        query = 'DELETE FROM ITEM WHERE URL=(?)'
        data = [url]
        self.c.execute(query, data)
        self.conn.commit()

# test code
if __name__ == '__main__':
    fDb = FavouritesDbController()
    fDb.updateItem('https://www.baidu.com/', '常用', '123', 2, '123')
    fDb.updateItem('https://www.bilibili.com/', '常用', '123', 3, 'bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。')