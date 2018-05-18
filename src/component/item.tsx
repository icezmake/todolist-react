import * as React from 'react';
import ReactDom from 'react-dom';

export default class Item extends React.Component<any,any>{

    changeState(){
        //console.log(this.props.index);
        this.props.cv(this.props.index);
    }
    
    render(){
        //console.log(this.props.index);
        if(this.props.user.stat == "todo"){
            return (
                <li>
                    <button onClick = {this.changeState.bind(this)}>完成{this.props.index}</button>
                    <span>标题: {this.props.user.title}</span>
                    &nbsp;<span>状态: {this.props.user.stat}</span>
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