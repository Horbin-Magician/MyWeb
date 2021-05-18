import React, { Component } from 'react'
import { Layout } from 'antd'

import LeftNav from './components/leftNav/leftNav'
import CardContent from './components/cardContent/cardContent'
import { reqFavItemList } from '../../../api'
import './favourites.less'
/*
头部组件
 */
const { Content } = Layout;
export default class Favourites extends Component {
  state = {
    theme: 'light',
    itemList: [],
  }
  //同步并设置itemList和favType
  onFavTypeChange = async (favType) => {
    const data = await reqFavItemList(favType)
    const itemList = data.data
    this.setState({ itemList: itemList, favType: favType })
  }

  render() {
    const { favType } = this.state
    return (
      <Layout className="favourites">
        <LeftNav onFavTypeChange={this.onFavTypeChange} />
        <Layout>
          <Content className="favourites-content">
            <CardContent itemList={this.state.itemList}
              favType={this.state.favType}
              update={() => this.onFavTypeChange(favType)} />
          </Content>
        </Layout>
      </Layout>
    )
  }
}