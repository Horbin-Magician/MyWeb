import React, {Component} from 'react'
import {Card, Avatar, Rate, message, Modal} from 'antd';
import {EditOutlined, DeleteOutlined, FrownOutlined} from '@ant-design/icons';

import {reqUpdateItem, reqDelItem} from '../../../../../api/favouritesAPI'
import {checkLogin} from '../../../../../utils/userUtils'
import './favCard.less'

/*
左侧导航的组件
 */
const {Meta} = Card 
const {confirm} = Modal
export default class FavouritesCard extends Component{
    //编辑点击事件
    onEdit = ()=>{
        const {url, title, description, type, rank, iconUrl} = this.props
        this.props.onEdit(url, title, description, type, rank, iconUrl)
    }
    //删除点击事件
    onDel = ()=>{
        confirm({
            title: '是否确定删除?',
            onOk:() => {
                reqDelItem(this.props.url).then(data=>{
                    if(data.status === '0'){
                        message.success('删除成功！')
                        this.props.update()
                    }
                })
            },
        });
    }
    //更新Rank事件
    onRankChange = (value)=>{
        const {url} = this.props
        reqUpdateItem(url, undefined, undefined,value)
    }

    render(){
        const {url, title, iconUrl, description, rank} = this.props
        return(
            <Card style={{maxWidth:'550px', minWidth:'200px'}}
            headStyle={{minHeight:"36px"}} 
            actions={checkLogin() ? [
                <EditOutlined key="edit" onClick={this.onEdit}/>,
                <DeleteOutlined key="delete" onClick={this.onDel}/>,
            ] : []}
            title={<Rate disabled={!checkLogin()}  defaultValue={rank} onChange={this.onRankChange} 
                    style={{width:'100%', textAlign:"center"}}/>}
            hoverable={true}
            >
                <Meta
                avatar={
                    <Avatar size={32} shape="square" style={{marginTop:'10px'}}
                    src={iconUrl?iconUrl:url+"favicon.ico"} icon={<FrownOutlined />}/>
                }
                title={title}
                description={description}
                onClick={()=>{window.open(url)}}/>
            </Card>
        )
    }
}