import React, { Component } from 'react'
import { Card, Button, Table, message } from 'antd'

import { reqPasArticleList, reqDelArticleItem } from '../../../../api/passagesAPI'


/*
文章管理-文章条目
 */
export default class psgListMng extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleList: [], //文章条目
      item : {},
    }
  }

  componentDidMount() {
    this.updatePasList()
  }

  updatePasList = () => reqPasArticleList().then(data => this.setState({ articleList: data.data }))

  updatePasItem = (ID, name, rank) => {
    // reqUpdatePasItem(ID, name, rank).then(data => {
    //   if (data.status === '0') {
    //     message.success('更新文章类别成功！')
    //     this.updateArticleListList()
    //   }
    //   else message.error('更新文章类别失败！')
    // })
    // this.setState({ ArticleList: {}, showStatus: 0 })
  }

  delPasItem = () => {
    reqDelArticleItem(this.state.item.ID).then(data => {
      if (data.status === '0') {
        message.success('删除成功！')
        this.updatePasList()
      }
      else message.error('删除失败！')
    })
    this.setState({ item: {} })
  }

  onRow = (item) => {
    return {
      onClick: event => this.setState({ item })
    }
  }

  columns = [{ title: 'ID', dataIndex: 'ID' }, { title: '类别', dataIndex: 'type' }, { title: '标题', dataIndex: 'title' }, { title: '时间', dataIndex: 'time' },]

  render() {
    const { articleList, item } = this.state
    const title = (
      <span style={{ lineHeight: "48px" }}>
        <Button type='primary' onClick={this.delPasItem} disabled={!item.ID}>
          删除
        </Button> &nbsp;
        <Button type='primary' onClick={this.updatePasItem} disabled={!item.ID}>
          编辑
        </Button>
      </span>
    )
    return (
      <Card title={title}>
        <Table bordered
          rowKey='ID'
          dataSource={articleList}
          columns={this.columns}
          rowSelection={{ type: 'radio', selectedRowKeys: [item.ID] }}
          onRow={this.onRow}
        />
      </Card>
    )
  }
}