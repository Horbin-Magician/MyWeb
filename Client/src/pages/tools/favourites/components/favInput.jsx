import React, {Component} from 'react'
import { Input } from 'antd';

/*
左侧导航的组件
 */
export default class FavInput extends Component{
    input = React.createRef()

    componentDidUpdate(){
        this.input.current.focus()
    }

    onExit = ()=>{
        this.props.editFavType(this.input.current.state.value)
        this.input.current.setState({value:''})
    }

    render(){
        return(
            <Input ref={this.input} onBlur={this.onExit}
            onPressEnter={()=>{this.input.current.blur()}}>
            </Input>
        )
    }
}