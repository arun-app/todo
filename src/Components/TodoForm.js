import React, { useState } from 'react';

function TodoForm (props) {
    const [Items,setItems] = useState('');

    const unchangedTask = e => {
        setItems(e.target.value)
    }

    const additems = e => {
        e.preventDefault();
        props.onSubmit({
            id:Date.now(),
            text: Items
        });
        setItems('');
    };

    return(
        <div className="todos">
            <form  onSubmit={additems}>
                <input className ="todos-item" 
                type="text" 
                placeholder="this is item" 
                name ="text" 
                value={Items}
                onChange={unchangedTask}/>
                <button>Add</button>
            </form>
        </div>
    )
}


export default TodoForm;