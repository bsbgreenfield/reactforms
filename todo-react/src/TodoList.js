import React, {useState} from "react"
import Todo from "./Todo"
import TodoForm from "./TodoForm"
import {v4 as uuid} from "uuid"

function TodoList(){
    const [todos, setTodos] = useState([])

    const createTodo = (newTodo) =>{
        setTodos([...todos, newTodo])
    }
    const deleteTodo = (gonerTodo) => {
        console.log(gonerTodo)
        let newList = [...todos]
        newList.splice(gonerTodo, 1)
        setTodos(newList)
    }
    return(
        <>
            <TodoForm createTodo={createTodo}/>
            <ul>
                {todos.map((todo, idx) => <Todo task={todo} id = {idx} deleteTodo={deleteTodo} key = {uuid()}/>)}
            </ul>
        </>
       
    )
}

export default TodoList