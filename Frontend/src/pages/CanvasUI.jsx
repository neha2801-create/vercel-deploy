import React, {useState, useEffect} from 'react';

function CanvasUI() {

    // setting Textbox variable
    const [textareas, setTextareas] =useState([]);

    const handleMouse = (ev) => {
        
        
        const newTextarea = { x :ev.clientX, y :ev.clientY};
        const mouseX = ev.clientX;
        const mouseY = ev.clientY;
        const margin = 0.1;

        const isNearOrOnExistingArea = textareas.some(textarea => {
            const distanceX = Math.abs(textarea.x - mouseX);
            const distanceY = Math.abs(textarea.y - mouseY);
            const isOnArea = distanceX <= textarea.width / 2 && distanceY <= textarea.height / 2;
            const isNearArea = distanceX <= (textarea.width / 2) + margin * window.innerWidth &&
                                distanceY <= (textarea.height / 2) + margin * window.innerHeight;
            return isOnArea || isNearArea;
        });

        
        if (!isNearOrOnExistingArea) {
            // If not near or on existing area, add new textarea
            const newTextarea = { x: mouseX, y: mouseY, width: 200, height: 100 };
            setTextareas(prevTextareas => [...prevTextareas, newTextarea]);
        }


        // check if click is near already present textarea
        //const isNearExisitingArea  = textareas.some(textarea => ) 




        // Add the new textarea to the array
        //setTextareas(prevTextareas => [...prevTextareas, newTextarea]);
}

return (

    <div  style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100vw', // 100% of viewport width
        height: '100vh', // 100% of viewport height
        backgroundColor: 'lightgray',
    }}

    onClick = {handleMouse} 
    >

        {textareas.map((eachItem, id) =>(
            <input
                 key ={id}
                 style = {{
                    position: 'absolute',
                    left : eachItem.x,
                    top :eachItem.y,
                    width: 200, 
                    height: 100, 
                 }}
            />
            
        ))} 
    </div>



)




}

export default CanvasUI;