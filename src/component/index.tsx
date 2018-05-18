import * as React from 'react';
import ReactDom from 'react-dom';
import List from './list';
import Header from './header';

export default class App extends React.Component<any, any>{

    state = {
        todo:[
            {title:"1",stat:"todo"},
            {title:"2",stat:"todo"},
            {title:"3",stat:"todo"}
        ],
        done:[
            {title:"1",stat:"done"},
        ]
        
    }

    addTodo(addValue){
        var tmp = {title:addValue,stat:"todo"};
        var cp = this.state.todo;
        cp.push(tmp);
        this.setState({
            Todo:cp
        })

    }

    doneJob(index){
        var tindex = {title:this.state.todo[index].title ,stat:"done"};
        this.state.todo.splice(index,1);
        var cp = this.state.todo;
        var dp = this.state.done;
        dp.push(tindex);
        // console.log(cp);
        // console.log(dp);
        this.setState({
            todo:cp,
            done:dp
        })
    }

    deleteJob(index){
        this.state.todo.splice(index,1);
        var cp = this.state.todo;
        var dp = this.state.done;
        this.setState({
            todo:cp,
            done:dp
        })
    }

    render() {
        return (
            <div>
                <Header addTodo={this.addTodo.bind(this)} />
                <List Todo={this.state.todo}  Done={this.state.done}  delet={this.deleteJob.bind(this)} dtd = {this.doneJob.bind(this)}/>
            </div>
        );
    }
}

