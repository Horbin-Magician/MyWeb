import React, {Component} from 'react'
import { Layout } from 'antd'

import LeftNav from './components/leftNav/leftNav'
import CardContent from './components/cardContent/cardContent'
import {reqFavItemList} from '../../../api'
import './favourites.less'
/*
头部组件
 */
const { Content } = Layout;


export default class Favourites extends Component{
    state = {
        theme:'light',
        itemList: [],
    }

    onFavTypeChange = async(favType)=>{
        const data = await reqFavItemList(favType)
        const itemList = data.data
        this.setState({itemList:itemList, favType:favType})
    }

    update = async()=>{
        const data = await reqFavItemList(this.state.favType)
        const itemList = data.data
        this.setState({itemList:itemList})
    }

    render(){
        return(
            <Layout className="favourites">
                <LeftNav onFavTypeChange={this.onFavTypeChange}/>
                <Layout>
                    <Content className="favourites-content">
                        <CardContent itemList={this.state.itemList}
                        favType={this.state.favType} update={this.update}/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}