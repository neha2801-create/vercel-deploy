import React from "react";
import UserAvatar from "../components/UserAvatar";
import BottomRightChatButton from "../components/chat_component/BottomRightChatButton";
import AddNewSpaceButton from "../components/AddNewSpaceButton";
import { Space } from "react-zoomable-ui";
import CanvasSpace from "../components/CanvasSpace";
import "./canvasActivePage.css";
import DropTarget from "../components/note_component/DropTarget";
import { Box, Typography } from "@mui/material";

const CanvasActivePage = () => {
    // canvas dimensions will be dynamic
    // will change as per the spaces added

    const [canvasDimensions, setCanvasDimensions] = React.useState({
        height: "100vh",
        width: "100vw",
    });

    // list of spaces
    const [spacesList, setSpacesList] = React.useState([]);
    const [lastSpaceId, setLastSpaceId] = React.useState(0);

    const handleAddNewSpace = () => {
        // limit the number of spaces to 6
        if (spacesList.length >= 6) {
            console.log("Cannot add more than 6 spaces!");
            return;
        }
        // logic to add new space
        // (first space)
        console.log("Add new space clicked!");
        setSpacesList([...spacesList, {}]);
        setLastSpaceId(lastSpaceId + 1);

        // update canvas dimensions
        // if spaces are more than 1 set width 200vw
        setCanvasDimensions({
            width: "200vw",
        });
    };

    return (
        <>
            <UserAvatar />
            <BottomRightChatButton />

            {/* <h1>hello</h1> */}
            <div
                style={{
                    // padding: "20px",
                    // height: canvasDimensions.height,
                    // width: canvasDimensions.width,
                    // maxWidth: "300vw",
                    // backgroundColor: "#a2a2a2",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {spacesList.length > 0 ? (
                    spacesList.map((space, index) => (
                        <DropTarget
                            key={space.id}
                            spaceNumber={index + 1}
                            addNewSpaceButton={handleAddNewSpace}
                        />
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
