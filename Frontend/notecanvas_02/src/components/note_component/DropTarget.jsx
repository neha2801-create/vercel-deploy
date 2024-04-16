import React, { useState } from "react";
import { useDrop } from "react-dnd";
import DraggableBox from "./DraggableBox";
import { Box, Stack } from "@mui/material";
import { Space } from "react-zoomable-ui";

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
        console.log("Adding new note card");
        const newId = noteCards.length + 1;

        const left = e.clientX;
        const top = e.clientY;

        console.log("left:", left);
        console.log("top:", top);

        // // need to add padding when adding new note card
        // const left = Math.floor(Math.random() * (window.innerWidth - 300));
        // const top = Math.floor(Math.random() * (window.innerHeight - 300));
        setNoteCards((prevNoteCards) => [
            ...prevNoteCards,
            { id: newId, left, top },
        ]);
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
    const handleFocus = (id) => {
        console.log("Setting focus on note with id: ", id);
        setFocusedNoteId(id);
    };

    return (
        // <Space>
        <Stack
            // height={"940px"}
            // width={"940px"}
            padding={"20px"}
            border={"1px dashed red"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
        >
            <div
                onDoubleClick={(e) => addNoteCard(e)}
                ref={drop}
                style={{
                    borderRadius: "10px",
                    // position: "fixed",
                    // margin: "20px",
                    // aspectRatio: "16/9",
                    height: "calc(100vh - 40px)",
                    width: "calc(99vw - 40px)",
                    // backgroundColor: "transparent",
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
                        onClick={() => handleFocus(noteCard.id)}
                        handleNoteDelete={() => deleteNoteCard(noteCard.id)}
                        handleAddNewNote={addNoteCard}
                    />
                ))}
                {children}
            </div>
        </Stack>
        // </Space>
    );
};

export default DropTarget;
