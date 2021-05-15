import React, {Component} from 'react'
import { Row,Col,Button,Tooltip,Modal,Form,Input,Rate,message,Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons'

import FavouritesCard from '../favCard/favCard'
import {reqUpdateItem, reqFavTypeList} from '../../../../../api'

/*
左侧导航的组件
 */
const { Option } = Select;

export default class CardContent extends Component{
    state = {
        showStatus:0,
    }
    formRef = React.createRef()
    oldUrl = ''

    getCardNodes = (itemList)=>{
        return itemList.map(item => {
            return(
                <Col key={item.url}>
                    <FavouritesCard url={item.url} title={item.title}
                    description={item.description} type={item.type} rank={item.rank}
                    update={this.props.update} onEdit={this.onEdit}/>
                </Col>
            )
        })
    }

    updateItem = ()=>{
        this.formRef.current.validateFields().then(values => {
            const {url, title, description, type, rank} = values
            reqUpdateItem(url, type, title, rank, description, this.oldUrl).then(data=>{
                if(data.status==='0'){
                    this.props.update()
                    this.afterAdd()
                    message.success('添加成功！')
                }
            })
        }).catch(info => message.error('请正确填写信息！'));
    }

    onEdit = (url, title, description, type, rank)=>{
        this.oldUrl = url
        reqFavTypeList().then(data=>{
            let typeOptions = data.data.map(item => {
                return <Option key={item.title} value={item.title}>{item.title}</Option>
            })
            this.formRef.current.setFieldsValue({url, title, description, type, rank})
            this.setState({typeOptions:typeOptions, showStatus:1})
        })
    }

    afterAdd = ()=>{
        this.setState({showStatus:0})
        this.formRef.current.resetFields();
        this.oldUrl = ''
    }

    render(){
        const {itemList} = this.props
        const cardNodes = this.getCardNodes(itemList)
        return(
            <div>
                <Row gutter={[16, 24]}>
                    {cardNodes}
                    <Tooltip title="添加一个">
                        <Button icon={<PlusOutlined style={{fontSize:'50px', color:'#C0C0C0'}}/>} 
                        style={{height:'180px', width:'180px'}}
                        onClick={()=>{this.onEdit('', '', '', this.props.favType, 3)}}/>
                    </Tooltip>
                </Row>
                <Modal forceRender title='收藏项信息' visible={this.state.showStatus===1} 
                onOk={()=>{this.updateItem()}} onCancel={this.afterAdd}>
                    <Form ref={this.formRef}>
                        <Form.Item name="url"
                        rules={[{required: true,message: '请输入URL'},]}>
                            <Input placeholder="请输入URL" />
                        </Form.Item>
                        <Form.Item name="title"
                        rules={[{required: true,message: '请输入标题'},]}>
                            <Input placeholder="请输入标题" />
                        </Form.Item>
                        <Form.Item name="description"
                        rules={[{required: true,message: '请输入相关描述'},]}>
                            <Input placeholder="请输入相关描述" />
                        </Form.Item>
                        <Form.Item name="type">
                            <Select>{this.state.typeOptions}</Select>
                        </Form.Item>
                        <Form.Item name="rank">
                            <Rate style={{margin:'auto 0'}}/>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}