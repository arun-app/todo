import React, {Component} from "react";

class TodoItems extends Component{
   
    delete=(key) =>{
        this.props.delete(key);
    }
   
    
    render(){
        
        var listItems =this.props.entries.map((item) =>{
            return<li onClick = {() => this.delete(item.key)} key={item.key}>{item.text}</li>            
        });
        return(
           <ul className="theList">
                {listItems}
            </ul>
            
             
            
        );
    }
};

export default TodoItems;