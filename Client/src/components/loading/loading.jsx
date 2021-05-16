import React, {Component} from 'react'
import {Spin} from 'antd'
/*
加载中组件
用于在加载页面时显示
 */
export default class Loading extends Component{
    render(){
        return(
            <div style={{position: 'absolute',left: '50%',top: '50%',
            transform: 'translate(-50%, -50%)',}}>
                <Spin size='large'/>
            </div>
        )
    }
}