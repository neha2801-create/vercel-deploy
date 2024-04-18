import React, { useState } from "react";
import { useDrop } from "react-dnd";
import DraggableBox from "./DraggableBox";
import { Stack, Typography } from "@mui/material";

const DropTarget = ({ children, spaceNumber }) => {
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

    // Notes list
    const [noteCards, setNoteCards] = React.useState([]);

    // function to move note card
    const moveBox = (id, left, top) => {
        console.log("Moving box");
        setNoteCards((prevNoteCards) =>
            prevNoteCards.map((card) =>
                card.id === id ? { ...card, left, top } : card
            )
        );
    };

    // function to add new note card
    const addNoteCard = (e) => {
        e.preventDefault(); // Prevent default behavior
        console.log("Adding new note card");
        const newId = noteCards.length + 1;

        const left = e.clientX;
        const top = e.clientY;

        console.log("left:", left);
        console.log("top:", top);

        setNoteCards((prevNoteCards) => [
            ...prevNoteCards,
            { id: newId, left, top },
        ]);

        // set focus on new note card
        setFocusedNoteId(newId);
    };

    // function to delete note card
    const deleteNoteCard = (id) => {
        console.log("Deleting note card with id: ", id);
        setNoteCards((prevNoteCards) =>
            prevNoteCards.filter((card) => card.id !== id)
        );
    };

    // function to set focus on note card
    const [focusedNoteId, setFocusedNoteId] = useState(null);
    const handleFocus = (e, id) => {
        e.preventDefault(); // Prevent default behavior
        console.log("Setting focus on note with id: ", id);
        setFocusedNoteId(id);
    };

    return (
        <Stack
            padding={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
        >
            <div
                onDoubleClick={(e) => addNoteCard(e)}
                ref={drop}
                style={{
                    borderRadius: "10px",
                    height: "calc(100vh - 40px)",
                    width: "calc(99vw - 40px)",
                    backgroundColor: "#D9D9D9",
                }}
            >
                {noteCards.map((noteCard) => (
                    <DraggableBox
                        key={noteCard.id}
                        id={noteCard.id}
                        left={noteCard.left}
                        top={noteCard.top}
                        moveBox={moveBox}
                        zIndex={focusedNoteId === noteCard.id ? 1000 : 1}
                        onClick={(e) => handleFocus(e, noteCard.id)}
                        handleNoteDelete={() => deleteNoteCard(noteCard.id)}
                        handleAddNewNote={addNoteCard}
                    />
                ))}
                {children}
            </div>
            <Typography
                variant="caption"
                fontFamily={"poppins"}
                style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "0",
                    padding: "20px",
                    opacity: 0.5,
                }}
            >
                Space {spaceNumber}
            </Typography>
        </Stack>
    );
};

export default DropTarget;
