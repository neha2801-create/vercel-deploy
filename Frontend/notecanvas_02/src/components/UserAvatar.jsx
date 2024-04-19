import React from "react";
import { Avatar, AvatarGroup, Box, Menu, MenuItem, Stack } from "@mui/material";
import TuneRounded from "@mui/icons-material/TuneRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useTheme } from "@mui/material";
import RoundedButton from "./RoundedButton";
import PeopleIcon from "@mui/icons-material/People";

// todo: break this component into sub-components. compartmentalize!!!

const UserAvatar = ({ onlineUsersList, shareButtonClick, addedUsersClick }) => {
    const theme = useTheme();

    const onlineUsers = onlineUsersList;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePreferences = () => {
        // todo: preferences logic goes here
        console.log("Preferences");
    };

    const handleAbout = () => {
        // todo: about logic goes here
        console.log("About");
    };

    const handleLogOut = () => {
        // todo: Logout logic goes here
        console.log("Logout");
    };

    return (
        <Stack
            direction={"row-reverse"}
            alignItems={"center"}
            gap={1}
            p={1}
            sx={{
                zIndex: 100000,
                position: "fixed",
                top: "50px",
                borderRadius: "50px",
                right: "50px",
                transition: "all 0.2s",
            }}
        >
            <Avatar
                onClick={handleClick}
                sx={{
                    height: 80,
                    width: 80,
                    borderRadius: "50%",
                    color: "#ffffff50",
                    backgroundColor: "#2C2C2C",
                    border: "1px #3F3F3F solid",
                }}
            />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: "10px 10px 10px 10px",
                            backdropFilter: "blur(10px)",
                            backgroundColor: "#ffffff20",
                            color: "#ffffff",
                        },
                    },
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                sx={{
                    position: "fixed",
                    top: 10,
                    right: 50,
                }}
                bgcolor={"#1f1f1f"}
                // paddingY={3}
            >
                <MenuItem onClick={handlePreferences}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        width={"150px"}
                        alignItems={"center"}
                    >
                        <TuneRounded /> Preferences
                    </Stack>
                </MenuItem>
                <MenuItem onClick={handleAbout}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        width={"150px"}
                        alignItems={"center"}
                    >
                        <InfoOutlinedIcon /> About
                    </Stack>
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        width={"150px"}
                        alignItems={"center"}
                    >
                        <LogoutRoundedIcon /> Logout
                    </Stack>
                </MenuItem>
            </Menu>

            {onlineUsers.length > 0 ? (
                <AvatarGroup
                    onClick={addedUsersClick}
                    max={4}
                    sx={{
                        "& .MuiAvatar-root": {
                            height: 50,
                            width: 50,
                            borderRadius: "50%",
                            color: "#ffffff50",
                            backgroundColor: "#2C2C2C",
                            border: "1px #3F3F3F solid",
                        },
                    }}
                >
                    {onlineUsers.map((user) => (
                        <Avatar key={user.id} />
                    ))}
                </AvatarGroup>
            ) : (
                <Box mr={2}>
                    <RoundedButton
                        mt={0}
                        borderRadius="30px"
                        variant="text"
                        onClick={shareButtonClick}
                    >
                        Share
                        <Box width={10}></Box>
                        <PeopleIcon />
                    </RoundedButton>
                </Box>
            )}
        </Stack>
    );
};

export default UserAvatar;
