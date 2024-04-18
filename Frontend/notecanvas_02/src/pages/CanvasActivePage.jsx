import React, { useEffect, useState, useRef } from "react";
import UserAvatar from "../components/UserAvatar";
import BottomRightUsersButton from "../components/chat_component/BottomRightUsersButton";
import AddNewSpaceButton from "../components/AddNewSpaceButton";
import { Space } from "react-zoomable-ui";
import CanvasSpace from "../components/CanvasSpace";
import "./canvasActivePage.css";
import DropTarget from "../components/note_component/DropTarget";
import { Box, Typography } from "@mui/material";

const CanvasActivePage = () => {
    const lastSpaceRef = React.useRef(null);
    const [spacesList, setSpacesList] = React.useState([]);
    const [lastSpaceId, setLastSpaceId] = React.useState(0);

    const handleAddNewSpace = () => {
        console.log("Add new space clicked!");
        setSpacesList([...spacesList, {}]);
        setLastSpaceId(lastSpaceId + 1);
    };

    React.useEffect(() => {
        handleAddNewSpace();
    }, []);

    useEffect(() => {
        lastSpaceRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [spacesList]);

    return (
        <>
            <UserAvatar />
            <BottomRightUsersButton />

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    scrollBehavior: "smooth",
                }}
            >
                {spacesList.length > 0 ? (
                    spacesList.map((space, index) => (
                        <DropTarget
                            key={space.id}
                            spaceNumber={index + 1}
                            addNewSpaceButton={handleAddNewSpace}
                            ref={
                                index === spacesList.length - 1
                                    ? lastSpaceRef
                                    : null
                            }
                        >
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
                                Space {index + 1}
                            </Typography>
                        </DropTarget>
                    ))
                ) : (
                    <Box
                        position={"absolute"}
                        top={"40%"}
                        left={"50%"}
                        sx={{
                            transform: "translate(-50%, -50%)",
                        }}
                        padding={"20px"}
                    >
                        <Typography
                            variant="h1"
                            fontFamily={"poppins"}
                            style={{
                                color: "white",
                                opacity: 0.5,
                            }}
                        >
                            Create some spaces to get started!
                        </Typography>
                    </Box>
                )}

                <AddNewSpaceButton onClick={handleAddNewSpace} />
            </div>
        </>
    );
};

export default CanvasActivePage;
