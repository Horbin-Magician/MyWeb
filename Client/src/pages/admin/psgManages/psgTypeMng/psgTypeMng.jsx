import React, { Component } from 'react'
import { Card, Button, Table, message } from 'antd'

import { reqPasTypeList } from '../../../../api/passagesAPI'


/*
文章管理-文章类别
 */
export default class psgTypeMng extends Component {
  state = {
    type: {}, //选中的type
    showStatus: 0, //显示状态，0不显示modal,1显示添加modal，2显示设置modal
  }

  componentDidMount() {
    this.updateUsers()
  }

  updateUsers = () => reqPasTypeList().then(data => this.setState({ typeList: data.data }))

  // updateUser = (username, password, authority) =>{
  //     if(username){
  //         reqUpdateUser(username, password, authority).then(data =>{
  //             if(data.status === '0'){
  //                 message.success('更新用户成功！')
  //                 this.updateUsers()
  //             }
  //             else message.error('更新用户失败！')
  //         })
  //         this.setState({user:{}})
  //     }
  //     this.setState({showStatus:0})
  // }

  // delUser = () => {
  //     reqDelUser(this.state.user.username).then(data =>{
  //         if(data.status === '0'){
  //             message.success('删除用户成功！')
  //             this.updateUsers()
  //         }
  //         else message.error('删除用户失败！')
  //     })
  //     this.setState({user:{}})
  // }

  onRow = (type) => {
      return{
          onClick: event =>this.setState({type})
      }
  }

  columns = [{ title: 'ID', dataIndex: 'ID' },{ title: '次序', dataIndex: 'rank' },{ title: '名称', dataIndex: 'name' },]

  render() {
    const { typeList, type, showStatus } = this.state
    const title = (
      <span style={{ lineHeight: "48px" }}>
        <Button type='primary' onClick={() => { this.setState({ showStatus: 1 }) }}>
          创建类别
        </Button> &nbsp;
        <Button type='primary' onClick={this.delUser} disabled={!type.ID}>
          删除类别
        </Button> &nbsp;
        <Button type='primary' onClick={() => { this.setState({ showStatus: 2 }) }} disabled={!type.ID}>
          编辑类别
        </Button>
      </span>
    )
    return (
      <Card title={title}>
        <Table bordered
          rowKey='ID'
          dataSource={typeList}
          columns={this.columns}
          rowSelection={{ type: 'radio', selectedRowKeys: [type.ID] }}
          onRow={this.onRow}
        />
        {/* <AddForm showStatus={showStatus} addUser={(username, password, authority) => { this.updateUser(username, password, authority) }} />*/}
      </Card>
    )
  }
}