import React from "react";
import { Avatar, AvatarGroup, Menu, MenuItem, Stack } from "@mui/material";
import TuneRounded from "@mui/icons-material/TuneRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";

// todo: break this component into sub-components. compartmentalize!!!

const UserAvatar = () => {
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
    const navigate = useNavigate();
    const handleLogOut = async () => {
        // todo: Logout logic goes here
        console.log("Logout");
        try {
            const response = await fetch('http://127.0.0.1:8000/accounts/logout/', {
                method: 'POST',
                credentials: 'include', // Include cookies in the request. Needed for sessions.
                headers: {
                    'Content-Type': 'application/json',
                    // Include CSRF token header if necessary for your backend
                },
            });

            if (response.ok) {
                // Logout successful
                console.log("Logged out successfully.");
                navigate("/");
                // Optionally redirect the user or update the UI state
                // window.location.href = '/login';
            } else {
                // Handle server-side validation error messages, etc.
                console.log("Logout failed:", response.status);
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <Stack
            direction={"row-reverse"}
            alignItems={"center"}
            gap={2}
            style={{
                // border: "1px red dashed",
                zIndex: 100000,
                position: "fixed",
                top: "50px",
                right: "50px",
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
            <AvatarGroup
                max={3}
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
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </AvatarGroup>
        </Stack>
    );
};

export default UserAvatar;
