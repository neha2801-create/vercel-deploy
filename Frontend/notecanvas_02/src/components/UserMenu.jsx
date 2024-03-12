import { ListItem, Stack } from "@mui/material";

import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const UserMenu = () => {
    return (
        <Stack
            sx={{
                position: "fixed",
                top: 150,
                backdropFilter: "blur(10px)",
            }}
            bgcolor={"#1f1f1f20"}
            paddingY={3}
            borderRadius={6}
        >
            <ListItem
                sx={{
                    transition: "100ms",
                    width: 300,
                    color: "#000",
                    borderRadius: 6,
                    ":hover": {
                        backgroundColor: "#3C3C3C10",
                    },
                    cursor: "pointer",
                }}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    width={"100%"}
                    height={40}
                    alignItems={"center"}
                >
                    Preference
                </Stack>
            </ListItem>
            <ListItem
                sx={{
                    transition: "100ms",
                    width: 300,
                    color: "#000",
                    borderRadius: 6,
                    ":hover": {
                        backgroundColor: "#3C3C3C10",
                    },
                    cursor: "pointer",
                }}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    width={"100%"}
                    height={40}
                    alignItems={"center"}
                >
                    Theme
                </Stack>
            </ListItem>
            <ListItem
                sx={{
                    transition: "100ms",
                    width: 300,
                    color: "#000",
                    borderRadius: 6,
                    ":hover": {
                        backgroundColor: "#3C3C3C10",
                    },
                    cursor: "pointer",
                }}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    width={"100%"}
                    height={40}
                    alignItems={"center"}
                >
                    About
                </Stack>
            </ListItem>
            <ListItem
                sx={{
                    alignItems: "center",
                    transition: "100ms",
                    width: 300,
                    color: "#000",
                    borderRadius: 6,
                    ":hover": {
                        backgroundColor: "#3C3C3C10",
                        color: "#FF0C00",
                    },
                    cursor: "pointer",
                }}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    gap={2}
                    width={"100%"}
                    height={40}
                    alignItems={"center"}
                >
                    Log out <LogoutIcon />
                </Stack>
            </ListItem>
        </Stack>
    );
};

export default UserMenu;
