import React from "react";
import { useDrop } from "react-dnd";

const DropTarget = ({ children }) => {
    const [{ isOver }, drop] = useDrop({
        accept: "box",
        drop: (item, monitor) => {
            const offset = monitor.getSourceClientOffset();
            const left = offset ? offset.x : 20;
            const top = offset ? offset.y : 20;
            console.log("left: ", left);
            console.log("top: ", top);
            return { left, top };
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    // const bg = isOver ? "#0000aa30" : "transparent";

    return (
        <div
            ref={drop}
            style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
            }}
        >
            {children}
        </div>
    );
};

export default DropTarget;
