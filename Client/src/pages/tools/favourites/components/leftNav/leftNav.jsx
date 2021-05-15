import React, {Component} from 'react'
import {Layout, Menu, Button, message } from 'antd'
import {
    PlusCircleOutlined,
    DeleteOutlined,
  } from '@ant-design/icons';

import {reqFavTypeList, reqDelType, reqUpdateType, reqMoveType} from '../../../../../api'
import FavInput from '../favInput/favInput'
import FavMenu from '../favMenu/favMenu'
/*
左侧导航的组件
 */
const { Sider } = Layout;

export default class LeftNav extends Component{
    constructor(props){
        super(props)
        this.state={
            theme:'light',
            menuList:[],
            onAddStatus: false,
            selectedMenu:'',
            dragingMenu:{},
            targetMenu:{},
        }
    }

    componentDidMount(){
        this.updateMenuList()
    }

    setSelectedMenu = (title)=>{
        this.setState({selectedMenu:title})
        this.props.onFavTypeChange(title)
    }

    updateMenuList = ()=>{
        reqFavTypeList().then(data=>{
            this.setState({menuList:data.data})
            if(!this.state.selectedMenu && data.data[0]){
                this.setSelectedMenu(data.data[0].title)
            }
        })
    }

    getRankFromTitle = (title)=>{
        const item = this.state.menuList.find(item=>item.title===title)
        return item.rank
    }

    onDragStart = (ev)=>{
        const dragingMenu = ev.target.childNodes[0].childNodes[0].innerHTML
        this.setState({dragingMenu:dragingMenu})
    }

    onDropOver = (ev)=>{
        ev.preventDefault()
        const {dragingMenu} = this.state
        if(dragingMenu){
            const targetMenu = ev.target.innerHTML
            if(dragingMenu !== targetMenu){
                this.setState({targetMenu:targetMenu})
            }
        }
    }

    onDrop = (ev)=>{
        const {targetMenu, dragingMenu} = this.state
        reqMoveType(dragingMenu, targetMenu).then(data=>{
            if(data.status === '0')this.updateMenuList()
        })
        this.setState({targetMenu:{}, dragingMenu:{}})//初始化
    }

    getMenuNodes = (menuList)=>{
        const {targetMenu, dragingMenu} = this.state
        return menuList.map(item => {
            let targetStyle = {}
            if(targetMenu===item.title){
                const targetRank = this.getRankFromTitle(targetMenu)
                const dragingRank = this.getRankFromTitle(dragingMenu)
                if(dragingRank>targetRank)targetStyle = {borderTop:"2px dashed #1890ff"}
                else targetStyle = {borderBottom:"2px dashed #1890ff"}
            }
            return(
                <Menu.Item key={item.title} style={targetStyle} draggable={true} 
                onDragStart={this.onDragStart} onDragOver={this.onDropOver}
                onDrop={this.onDrop}
                >
                    <FavMenu title={item.title} editFavType={this.editFavType}/>
                </Menu.Item>
            )
        })
    }

    onAdd = ()=>{
        this.setState({onAddStatus:true})
    }

    onDel = ()=>{
        reqDelType(this.state.selectedMenu).then(data=>{
            if(data.status === '0'){
                message.success('删除成功！')
                this.updateMenuList()
                this.setSelectedMenu(this.state.menuList[0].title)
            }
        })
    }

    onSelect = (value)=>this.setSelectedMenu(value.key)

    editFavType = (oldName, newName)=>{
        const result = this.state.menuList.find(item=>item.title===newName)
        if(result){
            message.error('已有相同类别，请更换一个！')
            return
        }
        reqUpdateType(newName,undefined,oldName).then(data=>{
            if(data.status === '0'){
                message.success('修改成功！')
                this.updateMenuList()
                if(oldName === this.state.selectedMenu)this.setState({selectedMenu:newName})
            }
        })
    }

    addFavType = (typeName)=>{
        let {menuList} = this.state
        const result = menuList.find(item=>item.title===typeName)
        if(result){
            message.error('已有相同类别，请更换一个！')
        }else if(typeName){
            const rank = menuList.length
            reqUpdateType(typeName, rank).then(data=>{
                if(data.status === '0'){
                    message.success('添加成功！')
                    menuList.push({rank:rank, title:typeName})
                    this.setState({menuList:menuList})
                }
            })
        }
        this.setState({onAddStatus:false})
    }

    render(){
        const {menuList, onAddStatus, selectedMenu} = this.state
        const menuNodes = this.getMenuNodes(menuList)
        return(
            <Sider width='150' className="favourites-sider" theme={this.state.theme}>
                <Menu className="favourites-sider-menu" mode="inline"
                selectedKeys={[selectedMenu]}
                onSelect={this.onSelect}>
                    {menuNodes}
                    <Menu.Item  key='new-menu' disabled style={{display:onAddStatus ? 'block' : 'none'}}>
                        <FavInput editFavType={this.addFavType}/>
                    </Menu.Item>
                </Menu>
                <div>
                    <Button type='link' style={{width:"50%"}} onClick={this.onAdd}>
                        <PlusCircleOutlined style={{ fontSize: '20px'}}/>
                    </Button>
                    <Button type='link' style={{width:"50%"}} onClick={this.onDel}>
                        <DeleteOutlined style={{ fontSize: '20px'}}/>
                    </Button>
                </div>
            </Sider>
        )
    }
}