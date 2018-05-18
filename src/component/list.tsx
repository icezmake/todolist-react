import * as React from 'react';
import ReactDom from 'react-dom';
import Item from './item';

export default class List extends React.Component<any, any>{

    state = {
        todoList: [],
        doneList: []
    }

    componentDidMount() {
        this.setState(
            {
                todoList: this.props.Todo,
                doneList: this.props.Done
            }
        )
    }

    changeValue(index) {
        this.props.dtd(index);
    }

    deleteItem(index){
        this.props.delet(index);
    }

    render() {
        let todolist = this.state.todoList;
        let donelist = this.state.doneList;

        return (
            <div>
                <h2>待办事项</h2>
                <ul>
                    {todolist.map((x, i) => <Item key={i} cv={this.changeValue.bind(this)} di={this.deleteItem.bind(this)}user={x} index={i} />)}
                </ul>
                <h2>完成事项</h2>
                <ul>
                    {donelist.map((x, i) => <Item key={i} user={x} index={i} />)}
                </ul>
            </div>
        )
    }
}