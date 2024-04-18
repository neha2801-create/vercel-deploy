import React from "react";
import {
    Stack,
    Container,
    Avatar,
    Typography,
    IconButton,
    Box,
    Button,
} from "@mui/material";
import UserAvatar from "../components/UserAvatar";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import RoundedButton from "../components/RoundedButton";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import SpaceItemCard from "../components/SpaceItemCard";
import OnlineUserCard from "../components/OnlineUserCard";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import NewLogo from "../assets/new_logo@3x.png";
import NewSpaceDialog from "../components/NewSpaceDialog";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

const Dashboard = () => {
    // logout function
    const handleLogout = () => {
        console.log("Logout clicked!");
    };

    // Lists of spaces and online users (rn static but will be fetched from backend) - useEffect
    const [spacesList, setSpacesList] = React.useState([
        // {
        //     id: 1,
        //     title: "Web Dev Project Brainstorming",
        //     timestamp: "4:42 PM 12/12/2021",
        // },
        // {
        //     id: 2,
        //     title: "Sequences and Series",
        //     timestamp: "4:42 PM 12/12/2021",
        // },
        // {
        //     id: 3,
        //     title: "Design Inspo",
        //     timestamp: "4:42 PM 12/12/2021",
        // },
        // {
        //     id: 4,
        //     title: "Overlapping Squares and Circles",
        //     timestamp: "4:42 PM 12/12/2021",
        // },
        // {
        //     id: 5,
        //     title: "Food Blog Ideas",
        //     timestamp: "4:42 PM 12/12/2021",
        // },
        // {
        //     id: 6,
        //     title: "Tentative Component List",
        //     timestamp: "4:42 PM 12/12/2021",
        // },
        // {
        //     id: 7,
        //     title: "Sleep Walking Ideas",
        //     timestamp: "4:42 PM 12/12/2021",
        // },
        // {
        //     id: 8,
        //     title: "Space 8",
        //     timestamp: "4:42 PM 12/12/2021",
        // },
    ]);

    const [onlineUsers, setOnlineUsers] = React.useState([
        {
            id: 1,
            name: "Michael Scott",
        },
        {
            id: 2,
            name: "Dwight Schrute",
        },
        {
            id: 3,
            name: "Jim Halpert",
        },
        {
            id: 4,
            name: "Pam Beesly",
        },
        {
            id: 5,
            name: "Ryan Howard",
        },
    ]);

    const [currentSortOrder, setCurrentSortOrder] = React.useState("time");

    // Spaces Functions to handle add, delete and click on
    const handleAddNewSpace = (canvasName) => {
        console.log("Add new space clicked!");
        // new space will be added to the spaces list
        // mui dialog will be used to get the title of the space

        // Create ID using uuid
        const newId = uuidv4();
        console.log(newId);

        const timestamp = new Date();

        const formattedTimestamp = format(timestamp, "h:mm:ss MM/dd/yyyy");

        // check if the canvas name is empty
        if (!canvasName) {
            canvasName = "Untitled Space";
        }

        const newSpace = {
            id: newId,
            title: canvasName,
            timestamp: formattedTimestamp,
        };

        // add to the spaces list
        setSpacesList((prevSpacesList) => [...prevSpacesList, newSpace]);
        // sort by timestamp
        // setSpacesList((prevSpacesList) =>
        //     prevSpacesList.sort((a, b) => b.timestamp - a.timestamp)
        // );

        // sort by current selected sort order
        if (currentSortOrder === "time") {
            handleSortByTime();
        } else {
            handleSortByName();
        }

        // handleSortByTime();
        // handleSortByName();

        // convert form data to json
        // const data = {
        //     canvasName: canvasName,
        // };

        console.log("New Space Added: ", newSpace);
    };

    const handleSpaceClick = (id) => {
        // onClick will be used to navigate to the space
        console.log(`Space ${id} clicked!`);
    };

    const handleSpaceDelete = (id) => {
        // onDelete will be used to delete the space using the id
        console.log(`Space ${id} deleted!`);
        setSpacesList((prevSpacesList) =>
            prevSpacesList.filter((space) => space.id !== id)
        );
    };

    // Online Users Functions to handle click on options
    const handleOption1 = () => {
        console.log("Option 1 clicked!");
    };

    const handleOption2 = () => {
        console.log("Option 2 clicked!");
    };

    const handleSortByTime = () => {
        console.log("sorting by time!");

        setCurrentSortOrder("time");

        // sort by timestamp
        setSpacesList((prevSpacesList) =>
            [...prevSpacesList].sort(
                (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
            )
        );
    };

    const handleSortByName = () => {
        console.log("sorting by name!");

        setCurrentSortOrder("name");

        // sort by title
        setSpacesList((prevSpacesList) =>
            [...prevSpacesList].sort((a, b) => a.title.localeCompare(b.title))
        );
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
                mt: 10,
                display: "flex",
                flexDirection: "column",
                // height: "100vh",
            }}
        >
            <Stack alignItems={"center"} spacing={0.5}>
                <Box bgcolor={"#696969"} px={1} pt={0.8} borderRadius={4}>
                    <img src={NewLogo} height={50} width={50} />
                </Box>
                <Typography fontFamily={"poppins"} color={"white"}>
                    NoteCanvas
                </Typography>
            </Stack>
            <Stack
                height={100}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Stack direction={"row"} alignItems={"center"}>
                    <Avatar
                        // onClick={handleClick}
                        sx={{
                            height: 80,
                            width: 80,
                            borderRadius: "50%",
                            color: "#ffffff50",
                            backgroundColor: "#2C2C2C",
                            border: "1px #3F3F3F solid",
                        }}
                    />
                    <Typography
                        ml={2}
                        variant="h4"
                        fontWeight={500}
                        fontFamily={"Poppins"}
                        color={"white"}
                    >
                        User Name
                    </Typography>
                </Stack>

                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <IconButton
                        onClick={() => console.log("Theme button clicked")}
                        sx={{ color: "white", backgroundColor: "#484848" }}
                    >
                        <DarkModeOutlinedIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => console.log("Theme button clicked")}
                        sx={{ color: "white", backgroundColor: "#484848" }}
                    >
                        <TuneOutlinedIcon />
                    </IconButton>
                    <RoundedButton
                        borderRadius="20px"
                        bgcolor="#484848"
                        onClick={handleLogout}
                    >
                        <Stack
                            direction="row"
                            alignItems={"center"}
                            spacing={1}
                        >
                            <Typography
                                fontFamily={"Poppins"}
                                color={"white"}
                                variant="body2"
                            >
                                Logout
                            </Typography>
                            <LogoutOutlinedIcon />
                        </Stack>
                    </RoundedButton>
                </Stack>
            </Stack>

            <Stack direction={"row"} spacing={2} mt={5}>
                <Stack
                    flexGrow={1}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    px={2}
                >
                    <Typography
                        fontFamily={"poppins"}
                        color={"#ffffff70"}
                        display={"flex"}
                        alignItems={"center"}
                    >
                        Your spaces
                        <Box
                            ml={1}
                            display={"inline-flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            fontSize={13}
                            borderRadius={20}
                            width={30}
                            height={30}
                            bgcolor={"#ffffff30"}
                        >
                            {spacesList.length}
                        </Box>
                    </Typography>

                    {/* Drop down button to select sort order by creation time or name */}
                    <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                        color={"#ffffff70"}
                    >
                        <Typography variant="body2">Sort by</Typography>
                        <Stack direction={"row"} border={1} borderRadius={10}>
                            <Button
                                disableRipple
                                variant={
                                    currentSortOrder === "time"
                                        ? "contained"
                                        : "text"
                                }
                                // color="primary"
                                onClick={handleSortByTime}
                                disableElevation
                                sx={{
                                    textTransform: "none",
                                    color: "#ffffff70",
                                    bgcolor:
                                        currentSortOrder === "time"
                                            ? "#FF530040"
                                            : "transparent",
                                    borderRadius: "20px",
                                    fontWeight: 500,
                                    fontFamily: "Poppins",
                                }}
                            >
                                Time
                            </Button>
                            <Button
                                disableElevation
                                disableRipple
                                variant={
                                    currentSortOrder === "name"
                                        ? "contained"
                                        : "text"
                                }
                                color="primary"
                                onClick={handleSortByName}
                                sx={{
                                    textTransform: "none",
                                    color: "#ffffff70",
                                    bgcolor:
                                        currentSortOrder === "name" &&
                                        "#FF530040",
                                    borderRadius: "20px",
                                    fontFamily: "Poppins",
                                }}
                            >
                                Name
                            </Button>
                        </Stack>
                    </Stack>

                    <NewSpaceDialog
                        handleNewSpaceCreation={handleAddNewSpace}
                    />
                </Stack>
                <Stack
                    // border={1}
                    mt={5}
                    // bgcolor={"yellowgreen"}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    width={300}
                >
                    <Typography
                        fontFamily={"poppins"}
                        color={"#ffffff70"}
                        display={"flex"}
                        alignItems={"center"}
                        pl={2}
                    >
                        Users online
                        <Box
                            ml={1}
                            display={"inline-flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            fontSize={13}
                            borderRadius={20}
                            width={30}
                            height={30}
                            bgcolor={"#ffffff30"}
                        >
                            {onlineUsers.length}
                        </Box>
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} spacing={2} mt={1}>
                <Stack
                    flexGrow={1}
                    spacing={0.5}
                    height={620}
                    overflow={"scroll"}
                    sx={{
                        "&::-webkit-scrollbar": {
                            width: "5px",
                        },
                        "&::-webkit-scrollbar-track": {
                            width: "6px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "#ffffff30",
                            borderRadius: "24px",
                        },
                    }}
                >
                    {spacesList.map((space) => (
                        <SpaceItemCard
                            key={space.id}
                            id={space.id}
                            title={space.title}
                            timestamp={space.timestamp}
                            onClick={() => handleSpaceClick(space.id)}
                            onDelete={() => handleSpaceDelete(space.id)}
                        />
                    ))}
                    <Typography
                        variant={"body2"}
                        fontStyle={"italic"}
                        color={"#ffffff30"}
                        p={2}
                        fontFamily={"poppins"}
                        textAlign={"center"}
                    >
                        • • • <br />
                        End of list
                    </Typography>
                </Stack>
                <Stack
                    spacing={0.5}
                    height={620}
                    overflow={"scroll"}
                    mt={5}
                    width={300}
                    sx={{
                        "&::-webkit-scrollbar": {
                            width: "5px",
                        },
                        "&::-webkit-scrollbar-track": {
                            width: "6px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "#ffffff30",
                            borderRadius: "24px",
                        },
                    }}
                >
                    {onlineUsers.map((user) => (
                        <OnlineUserCard
                            key={user.id}
                            id={user.id}
                            username={user.name}
                            onClickOption1={handleOption1}
                            onClickOption2={handleOption2}
                        />
                    ))}
                </Stack>
            </Stack>
        </Container>
    );
};

export default Dashboard;
