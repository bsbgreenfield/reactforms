import React from "react";
import "./Box.css"

function Box({ bg_color, width, height, id, removeBox }) {
    const removeSelf = (e) => {
        removeBox(e.target.parentElement.id)
    }
    return (
        <div 
            data-testid = 'box'
            id = {id}
            className="Box"
            style={{ width: `${width}px`, height: `${height}px`, backgroundColor: bg_color }}>
            <div data-testid = "deleter" onClick={removeSelf} className="deleteButton">X</div>
        </div>
    )
}

export default Box