import React, {Component} from 'react'

import FavInput from './favInput'

/*
左侧导航的组件
 */
export default class FavMenu extends Component{
    state={
        onEdit:false
    }

    editFavType = (typeName)=>{
        this.props.editFavType(this.props.title,typeName)
        this.setState({onEdit:false})
    }

    onDoubleClick = ()=>{
        this.setState({onEdit:true})
    }

    render(){
        const {onEdit} = this.state
        const {title} = this.props
        return(
            <div>
                <div style={{display:onEdit ? 'none' : 'block'}} onDoubleClick={this.onDoubleClick}>
                    {title}
                </div>
                <div style={{display:onEdit ? 'block' : 'none'}}>
                    <FavInput editFavType={this.editFavType}/>
                </div>
            </div>
        )
    }
}