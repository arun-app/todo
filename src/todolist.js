import React, {Component} from "react";
import TodoItems  from './TodoItems';

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state ={
            items:[],
            item : ""
        };

        
    }

additem =(e)=>{
    e.preventDefault();
    
    if(this.state.item !==""){
        var newItem ={
            text :this.state.item,
            key : Date.now()
        };
        this.setState(  {
            
            
                items: [...this.state.items,newItem]
            
        });
    }
   

   
}
unChangeTask =(e)=>{
    this.setState({item:e.target.value});
}

deleteItems= (key) =>{
    var filteredItems =this.state.items.filter(function(item){
        return(item.key !==key )
    });
    this.setState({
        items: filteredItems
    });
}


    render(){
        return(
            
            <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.additem}>
            <input value ={this.state.item} onChange={this.unChangeTask} placeholder="enter task">
            </input>
            <button type="submit">add</button>
            </form>
            </div>
                <TodoItems entries = {this.state.items} delete ={this.deleteItems} />
            </div>
            
        );
    }
}
export default TodoList;