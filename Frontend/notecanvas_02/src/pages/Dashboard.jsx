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
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SpaceItemCard from "../components/SpaceItemCard";
import OnlineUserCard from "../components/OnlineUserCard";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const Dashboard = () => {
    const [spacesList, setSpacesList] = React.useState([
        {
            id: 1,
            title: "Web Dev Project Brainstorming",
            timestamp: "4:42 PM 12/12/2021",
        },
        {
            id: 2,
            title: "Sequences and Series",
            timestamp: "4:42 PM 12/12/2021",
        },
        {
            id: 3,
            title: "Design Inspo",
            timestamp: "4:42 PM 12/12/2021",
        },
        {
            id: 4,
            title: "Overlapping Squares and Circles",
            timestamp: "4:42 PM 12/12/2021",
        },
        {
            id: 5,
            title: "Food Blog Ideas",
            timestamp: "4:42 PM 12/12/2021",
        },
        {
            id: 6,
            title: "Tentative Component List",
            timestamp: "4:42 PM 12/12/2021",
        },
        {
            id: 7,
            title: "Sleep Walking Ideas",
            timestamp: "4:42 PM 12/12/2021",
        },
        {
            id: 8,
            title: "Space 8",
            timestamp: "4:42 PM 12/12/2021",
        },
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

    const handleAddNewSpace = () => {
        console.log("Add new space clicked!");
        // new space will be added to the spaces list
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

    return (
        <div
            style={{
                backgroundColor: "transparent",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    mt: 10,
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    // backgroundColor: "blue",
                }}
            >
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
                        <RoundedButton borderRadius="20px" bgcolor="#484848">
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
                        // border={1}
                        // mt={5}
                        // bgcolor={"yellowgreen"}
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
                        <RoundedButton
                            onClick={handleAddNewSpace}
                            mt="0"
                            borderRadius="30px"
                            bgcolor="#DD5757"
                        >
                            Add new space
                            <AddOutlinedIcon />
                        </RoundedButton>
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
                            • • •
                        </Typography>
                    </Stack>
                    <Stack
                        spacing={0.5}
                        height={620}
                        overflow={"scroll"}
                        // border={1}
                        mt={5}
                        // bgcolor={"yellowgreen"}
                        width={300}
                    >
                        {onlineUsers.map((user) => (
                            <OnlineUserCard
                                key={user.id}
                                id={user.id}
                                username={user.name}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
};

export default Dashboard;
