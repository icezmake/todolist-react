import * as React from 'react';
import ReactDom from 'react-dom';

export default class Item extends React.Component<any,any>{

    changeState(){
        //console.log(this.props.index);
        this.props.cv(this.props.index);
    }

    deleteItem(){
        this.props.di(this.props.index);
    }
    
    render(){
        //console.log(this.props.index);
        if(this.props.user.stat == "todo"){
            return (
                <li>
                    <span>标题: {this.props.user.title}</span>
                    &nbsp;<span>状态: {this.props.user.stat}</span>
                    <button onClick = {this.changeState.bind(this)}>完成</button>
                    <button onClick = {this.deleteItem.bind(this)}>删除</button>

                </li>
            )
        }else{
            return (
                <li>
                    <span>标题: {this.props.user.title}</span>
                    &nbsp;<span>状态: {this.props.user.stat}</span>
                </li>
            )
        }
        
    }
}