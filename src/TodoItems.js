import React, {Component} from "react";

class TodoItems extends Component{
delete=(items) =>{
    this.props.delete(items);
} 
edititems =(items) =>{
    this.props.edit(items);
}   

    
    render(){
        
        var listItems =this.props.entries.map((item) =>{
            return<li key ={item.key}>{item.text} <button onClick ={() => this.delete(item.key)} >del</button><button onClick ={() => this.edititems(item.key)}
             >edit</button></li> 
            
        });
        return(
           <ul className="theList">
                {listItems}
            </ul>        
        );
        
    }
};

export default TodoItems;