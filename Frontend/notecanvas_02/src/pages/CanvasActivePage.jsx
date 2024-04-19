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
    const [onlineUsers, setOnlineUsers] = React.useState([
        // {
        //     id: 1,
        //     name: "Michael Scott",
        // },
        // {
        //     id: 2,
        //     name: "Dwight Schrute",
        // },
        // {
        //     id: 3,
        //     name: "Jim Halpert",
        // },
        // {
        //     id: 4,
        //     name: "Pam Beesly",
        // },
        // {
        //     id: 5,
        //     name: "Ryan Howard",
        // },
    ]);

    const lastSpaceRef = React.useRef(null);
    const [spacesList, setSpacesList] = React.useState([]);
    const [lastSpaceId, setLastSpaceId] = React.useState(0);

    const handleAddNewSpace = () => {
        console.log("Add new space clicked!");
        setSpacesList([...spacesList, {}]);
        setLastSpaceId(lastSpaceId + 1);
    };

    React.useEffect(() => {
        // handleAddNewSpace();
    }, []);

    useEffect(() => {
        lastSpaceRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [spacesList]);

    const handleCollaboratorsClick = () => {
        console.log("Collaborators clicked!");
    };

    return (
        <>
            <UserAvatar
                onlineUsersList={onlineUsers}
                addedUsersClick={handleCollaboratorsClick}
                shareButtonClick={handleCollaboratorsClick}
            />
            <BottomRightUsersButton />

            <div
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    scrollBehavior: "smooth",
                }}
            >
                <DropTarget
                // key={space.id}
                // spaceNumber={index + 1}
                // addNewSpaceButton={handleAddNewSpace}
                // ref={index === spacesList.length - 1 ? lastSpaceRef : null}
                >
                    {/* <Typography
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
                        Space
                    </Typography> */}
                </DropTarget>

                {/* <AddNewSpaceButton onClick={handleAddNewSpace} /> */}
            </div>
        </>
    );
};

export default CanvasActivePage;
