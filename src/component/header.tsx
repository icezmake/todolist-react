import * as React from 'react';
import ReactDom from 'react-dom';

export default class Header extends React.Component<any, any>{

    addTodo(){
        this.props.addTodo(this.tobeadd.value)
    }

    tobeadd;

    render() {
        return (
            <div>
                TodoList
                <span>
                    <input placeholder="添加todo" ref={e => this.tobeadd=e}/>
                    <button onClick={this.addTodo.bind(this)}>添加</button>
                </span>
            </div>
        )
    }
}