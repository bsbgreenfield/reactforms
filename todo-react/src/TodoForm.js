import React, { useState } from "react";

function TodoForm({createTodo}) {
    const [formData, setFormData] = useState("")
    const handleChange = (e) => {
        const {value} = e.target
        setFormData(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createTodo(formData)
        setFormData("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input data-testid = "formIn" type="text" onChange={handleChange} value = {formData}></input>
            <button data-testid= 'formBtn'>Create Todo Item</button>
        </form>
    )
}

export default TodoForm