import React, { Component } from 'react'
import { Layout, Menu, Button, message, Modal } from 'antd'
import {
  PlusCircleOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import { reqFavTypeList, reqDelType, reqUpdateType, reqMoveType } from '../../../../../api'
import { checkLogin, addUpdateFun } from '../../../../../utils/userUtils'
import FavInput from '../favInput'
import FavMenu from '../favMenu'
/*
左侧导航的组件
 */
const { Sider } = Layout;
const { confirm } = Modal

export default class LeftNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light',
      menuList: [],
      onAddStatus: false,
      selectedMenu: '',
      dragingMenu: {},
      targetMenu: {},
    }
    addUpdateFun(() => this.forceUpdate())
  }
  //组件加载后更新MenuList
  componentDidMount() {
    this.updateMenuList()
  }
  //设置被选中菜单
  setSelectedMenu = (title) => {
    this.setState({ selectedMenu: title })
    this.props.onFavTypeChange(title)
  }
  //更新菜单列表
  updateMenuList = () => {
    reqFavTypeList().then(data => {
      const sMenu = this.state.selectedMenu
      const listData = data.data
      this.setState({ menuList: listData })
      //更新后，若selectedMenu不在menuList中，重置selectedMenu
      if ((!sMenu || !listData.find(item => item.title === sMenu)) && listData[0]) {
        this.setSelectedMenu(listData[0].title)
      }
    })
  }
  //根据Title获得Rank
  getRankFromTitle = (title) => {
    const item = this.state.menuList.find(item => item.title === title)
    return item.rank
  }
  //开始拖动事件
  onDragStart = (ev) => {
    //获取并设置dragingMenu于state
    const dragingMenu = ev.target.childNodes[0].childNodes[0].innerHTML
    this.setState({ dragingMenu: dragingMenu })
  }
  //拖动中，悬浮事件
  onDropOver = (ev) => {
    ev.preventDefault()
    //获取并设置targetMenu于state
    const { dragingMenu } = this.state
    const targetMenu = ev.target.innerHTML
    if (dragingMenu !== targetMenu) this.setState({ targetMenu: targetMenu })
  }
  //拖动结束事件
  onDrop = (ev) => {
    //进行移动排序操作
    const { targetMenu, dragingMenu } = this.state
    reqMoveType(dragingMenu, targetMenu).then(data => {
      if (data.status === '0') this.updateMenuList()
    })
    this.setState({ targetMenu: {}, dragingMenu: {} })//初始化相关state
  }
  //由menuList获得用于渲染的menu节点
  getMenuNodes = (menuList) => {
    const { targetMenu, dragingMenu } = this.state
    return menuList.map(item => {
      let targetStyle = {}
      //由rank判断并设置targetStyle
      if (targetMenu === item.title) {
        const targetRank = this.getRankFromTitle(targetMenu)
        const dragingRank = this.getRankFromTitle(dragingMenu)
        if (dragingRank > targetRank) targetStyle = { borderTop: "2px dashed #1890ff" }
        else targetStyle = { borderBottom: "2px dashed #1890ff" }
      }
      return (
        <Menu.Item key={item.title} style={targetStyle} draggable={true}
          onDragStart={this.onDragStart} onDragOver={this.onDropOver}
          onDrop={this.onDrop}
        >
          <FavMenu title={item.title} editFavType={this.editFavType} />
        </Menu.Item>
      )
    })
  }
  //添加点击事件
  onAdd = () => this.setState({ onAddStatus: true })
  //删除点击事件
  onDel = () => {
    confirm({
      title: '是否确定删除?',
      onOk: () => {
        reqDelType(this.state.selectedMenu).then(data => {
          if (data.status === '0') {
            message.success('删除成功！')
            this.updateMenuList()
          }
        })
      },
    });
  }
  //menu选择事件，设置selectedMenu
  onSelect = (value) => this.setSelectedMenu(value.key)
  //编辑菜单项Title
  editFavType = (oldTitle, newTitle) => {
    //判断是否与已有名称相同
    if (this.state.menuList.find(item => item.title === newTitle)) {
      message.error('已有相同类别，请更换一个！')
      return
    } else if (newTitle) {
      reqUpdateType(newTitle, undefined, oldTitle).then(data => {
        if (data.status === '0') {
          message.success('修改成功！')
          this.updateMenuList()
          if (oldTitle === this.state.selectedMenu) this.setState({ selectedMenu: newTitle })
        }
      })
    }
  }
  //添加菜单项
  addFavType = (typeName) => {
    let { menuList } = this.state
    if (menuList.find(item => item.title === typeName)) {
      message.error('已有相同类别，请更换一个！')
    } else if (typeName) {
      const rank = menuList.length
      reqUpdateType(typeName, rank).then(data => {
        if (data.status === '0') {
          message.success('添加成功！')
          menuList.push({ rank: rank, title: typeName })
          this.setState({ menuList: menuList })
        }
      })
    }
    this.setState({ onAddStatus: false })
  }

  render() {
    const { menuList, onAddStatus, selectedMenu } = this.state
    const menuNodes = this.getMenuNodes(menuList)
    return (
      <Sider breakpoint="sm" collapsedWidth="100px"
       className="favourites-sider" theme={this.state.theme}>
        <Menu className="favourites-sider-menu" mode="inline"
          selectedKeys={[selectedMenu]}
          onSelect={this.onSelect}>
          {menuNodes}
          <Menu.Item key='new-menu' disabled style={{ display: onAddStatus ? 'block' : 'none' }}>
            <FavInput editFavType={this.addFavType} />
          </Menu.Item>
        </Menu>
        <div style={checkLogin() ? { display: 'block' } : { display: 'none' }}>
          <Button type='link' style={{ width: "50%" }} onClick={this.onAdd}>
            <PlusCircleOutlined style={{ fontSize: '20px' }} />
          </Button>
          <Button type='link' style={{ width: "50%" }} onClick={this.onDel}>
            <DeleteOutlined style={{ fontSize: '20px' }} />
          </Button>
        </div>
      </Sider>
    )
  }
}