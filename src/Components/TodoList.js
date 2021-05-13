import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
    const[todos,setTodos] = useState([]);
    
    const addTodo = todo => 
    {
        if(!todo.text === test(todo.text)){
            return;
        }

    
    const newTodo =[todo,...todos];
        setTodos(newTodo);
        console.log(...todos);
};

}
    
    
return(
        <div>
            <TodoForm onSubmit ={addTodo}/>
        </div>
    )
 

export default TodoList;