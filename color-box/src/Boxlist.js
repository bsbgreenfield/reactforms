import React, { useState } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm"
import { v4 as uuid } from "uuid"

function BoxList() {
    const [boxes, setBoxes] = useState([])

    const updateBoxes = (newBox) => {
        setBoxes((boxes) => {
            let newBoxList = [...boxes, newBox]
            console.log(newBoxList)
            return newBoxList
        })
    }
    const removeBox = boxId => {
        const gonerIdx = boxes.findIndex(box => box.id == boxId)
        if (gonerIdx != -1){
            boxes.splice(gonerIdx, 1)
            let newBoxList =[...boxes]
            setBoxes(newBoxList)
        }
    }
    return (
        <>
            <BoxForm updateBoxes={updateBoxes} allBoxes={boxes} />
            {boxes.map((box, idx)=> {
                return (
                    <Box
                        width={box.width}
                        height={box.height}
                        bg_color={box.color}
                        key={uuid()}
                        id = {box.id}
                        removeBox={removeBox}
                    />)
            }
            )}
        </>
    )

}

export default BoxList