import { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, List, Button, Input, Menu } from 'antd';
import { CalendarOutlined, FolderOutlined } from '@ant-design/icons';

import { reqPasTypeList, reqPasArticleList } from '../../../../api/passagesAPI'
import './psgList.less'

/*
博客页的路由组件
*/
export default class PsgList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleList : [],
      typeList : [],
      selectedMenu: '',
    }
  }
  //组件加载后更新MenuList
  componentDidMount() {
    this.setPasTypeList()
  }
  setPasTypeList = async () => {
    const data = await reqPasTypeList()
    const typeList = data.data
    this.setState({typeList})
    this.changeSelectedMenu(typeList[0].name)
  }
  getPasArticleList = async (typeName) => {
    const data = await reqPasArticleList(typeName)
    const articleList = data.data
    this.setState({articleList})
  }
  //由menuList获得用于渲染的menu节点
  getMenuNodes = (menuList) => {
    return menuList.map(item => {
      return (
        <Menu.Item key={item.name}>
          {item.name}
        </Menu.Item>
      )
    })
  }
  changeSelectedMenu = (typeName) => {
    this.getPasArticleList(typeName)
    this.setState({selectedMenu:typeName})
  }
  onMenuSelect = (value) => {
    this.changeSelectedMenu(value.key)
  }
  render() {
    const { typeList, selectedMenu, articleList } = this.state
    const menuNodes = this.getMenuNodes(typeList)
    return (
      <Row justify='center'>
        <Col className="psgList-left" xs={0} sm={0} md={3} lg={3}>
          <Input className="pagList-left-search"/>
          <Menu className="pagList-left-menu" mode="inline"
          selectedKeys={[selectedMenu]} onSelect={this.onMenuSelect}>
            {menuNodes}
          </Menu>
        </Col>
        <Col className="psgList-main" xs={24} sm={24} md={14} lg={14}>
          <List size="small"
            header = {<Button type='link' className='pick-intelligence'>拾慧：对他人的批判不叫道德，对自己行为的反省才是。</Button>}
            itemLayout = "vertical"
            dataSource = {articleList}
            renderItem = {item => (
              <List.Item>
                <div className="psgList-main-title">
                  <Link to={{ pathname : 'passages/detail/'+item.ID}}>
                    {item.title}
                  </Link>
                </div>
                <div className='psgList-main-icon'>
                  <span><CalendarOutlined/>&nbsp;{item.time}</span>
                  <span><FolderOutlined/>&nbsp;{item.type}</span>
                </div>
                <div className="psgList-main-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  }
}