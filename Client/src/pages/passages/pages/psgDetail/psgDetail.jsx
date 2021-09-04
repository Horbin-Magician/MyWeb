import { Component } from 'react'
import { Row, Col, Affix } from 'antd'
import { CalendarOutlined, FolderOutlined } from '@ant-design/icons'

import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import { reqPasTypeList, reqPasArticleDetail } from '../../../../api/passagesAPI'
import './psgDetail.less'

/*
博客页的路由组件
*/
export default class PsgDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article : [],
      typeList : null,
    }
  }
  //组件加载后更新Article
  componentDidMount() {
    this.setPasTypeList()
    this.setArticle()
  }
  setPasTypeList = async () => {
    const data = await reqPasTypeList()
    const typeList = data.data
    this.setState({typeList})
  }
  setArticle = async () => {
    const data = await reqPasArticleDetail(this.props.match.params.id)
    const article = data.data[0]
    if(this.state.typeList)article.type =  this.state.typeList.find(item=>item.ID === article.type).name
    article.content =  article.content.replaceAll('\\n', '\n')//TODO 需要删除
    this.setState({article})
  }
  render() {
    const { article } = this.state
    return (
      <Row justify='center'>
        <Col className="psgDetail-left" xs={0} sm={0} md={article.ifMenu ? 3:0} lg={article.ifMenu ? 3:0}>
          <Affix offsetTop={50}>
            <MarkNav className='psgDetail-left-menu' ordered={false}
              source={article.content}/>
          </Affix>
        </Col>
        <Col className="psgDetail-main" xs={24} sm={24} md={14} lg={14}>
          <div className='psgDetail-main-title'>{article.title}</div>
          <div className='psgDetail-main-icon'>
            <span><CalendarOutlined/>{article.time}</span>
            <span><FolderOutlined/>{article.type}</span>
          </div>
          <div className='psgDetail-main-content'>
            <ReactMarkdown children={article.content}/>
          </div>
        </Col>
      </Row>
    );
  }
}