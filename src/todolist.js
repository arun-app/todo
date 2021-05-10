import React, {Component} from "react";

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state ={
            items:[]
        };

        this.additem = this.additem.bind(this);
    }

additem(e){
    if(this._inputElement !==""){
        var newItem ={
            text :this._inputElement.value,
            key : Date.now()
        };
        this.setState((prevState) => {
            return{
                items: prevState.items.concat(newItem)
            };
        });
    }
    this._inputElement.value ="";
    console.log(this.state.items);

    e.preventDefault();
}


    render(){
        return(
            
            <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.additem}>
            <input ref={(a) => this._inputElement =a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
            </form>
            </div>
            </div>
            
        );
    }
}
export default TodoList;