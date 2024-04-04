import React, { useState } from "react";
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Drawer,
    ListItem,
    MenuItem,
    MenuList,
    Stack,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import UserMenu from "./UserMenu";

// todo: break this component into sub-components. compartmentalize!!!

const UserAvatar = () => {
    const [showuUserMenu, setShowUserMenu] = useState(false);

    const handleLogOut = () => {
        // todo: Logout logic goes here
        console.log("Handle krle be");
    };

    return (
        <Stack
            direction={"row-reverse"}
            alignItems={"center"}
            gap={2}
            style={{
                border: "1px red dashed",
                zIndex: 1,
                position: "fixed",
                top: "50px",
                right: "50px",
            }}
        >
            <Avatar
                onMouseDown={() => setShowUserMenu(true)}
                sx={{
                    height: 80,
                    width: 80,
                    borderRadius: "50%",
                    color: "#ffffff50",
                    backgroundColor: "#2C2C2C",
                }}
            />

            {showuUserMenu ? <UserMenu /> : <></>}

            <AvatarGroup
                max={3}
                sx={{
                    "& .MuiAvatar-root": {
                        height: 50,
                        width: 50,
                        borderRadius: "50%",
                        color: "#ffffff50",
                        backgroundColor: "#2C2C2C",
                        border: "none",
                    },
                }}
            >
                <Avatar />
                <Avatar />
                <Avatar />
            </AvatarGroup>
        </Stack>
    );
};

export default UserAvatar;
