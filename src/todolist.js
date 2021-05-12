import React, {useState} from "react";
import TodoItems  from './TodoItems';

function Todolist ()
{
    const [Items,setItems] = React.useState([{
         text:'this is sample input',
         key:Date.now()

    }]);
    const additem =e =>{
        e.preventDefault();
        
        // if(Items !==""){
        //     var newItem ={
        //         setItems
        //     };
            
        //     {setItems} => newItem;
        // }
       
    
       
    }
   const unChangeTask = e=>{
        setItems(e.target.value);
    };
  const  deleteItems= (key) =>{
        var filteredItems =setItems.filter(function(item){
            return(item.key !==key )
        });
        this.setState({
            items: filteredItems
        });
    }
    return(
            
        <div className="todoListMain">
        <div className="header">
        <form onSubmit={additem}>
        <input value ={setItems} onChange={unChangeTask} placeholder="enter task">
        </input>
        <button type="submit">add</button>
        </form>
        </div>
            <TodoItems entries = {Items} delete ={deleteItems} edit ={this.editItems} />
        </div>
        
    );
}









// editItems =(key) =>{
//     var editItems = this.state.items.handleEvent(function(item){
//         return(items.text ===text)
    
// });
//     this.setState({
//         items:editItems
//     });
// }




 
    

export default Todolist();