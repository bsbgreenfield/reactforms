import React from "react";

function Todo({task, deleteTodo, id}){
    const removeSelf = (e) => {
        deleteTodo(e.target.parentElement.id)
    }
    return(
        <li id = {id}>
            {task}
            <button onClick={removeSelf}>X</button>
        </li>
    )
}

export default Todo