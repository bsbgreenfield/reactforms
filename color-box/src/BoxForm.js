import React, { useState } from "react";
import {v4 as uuid} from "uuid"

function BoxForm({updateBoxes, allBoxes}) {
    const INITIAL_STATE = {
        width: "",
        height: "",
        color: "#000000",
        id: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => (
            { ...formData, [name]: value }
        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.width != "" && formData.height != ""){
            formData.id = uuid()
            updateBoxes(formData)
            setFormData(INITIAL_STATE)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                type="range"
                name="width"
                id="width"
                onChange={handleChange}
                value={formData["width"]}
                >
              
            </input>
            <label htmlFor="height">Height</label>
            <input
                type="range"
                name="height"
                id="height"
                onChange={handleChange}
                value={formData["height"]}>

            </input>
            <label htmlFor="color">Color</label>
            <input
                type="color"
                name="color"
                id="color"
                onChange={handleChange}
                value={formData["color"]}
            ></input>
            <button type="submit">Create Box!</button>
        </form>
    )
}

export default BoxForm