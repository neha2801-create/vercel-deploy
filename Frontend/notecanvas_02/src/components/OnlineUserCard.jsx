import React from "react";
import { Stack, Typography, Avatar, IconButton } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const OnlineUserCard = ({ id, username }) => {
    return (
        <Stack
            bgcolor={"#141414"}
            p={2}
            color={"white"}
            border={"1px #ffffff20 solid"}
            borderRadius={"10px"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Avatar
                    sx={{
                        color: "#ffffff50",
                        backgroundColor: "#2C2C2C",
                        fontSize: 15,
                    }}
                >
                    {username[0]}
                </Avatar>
                <Typography fontFamily={"poppins"}>{username}</Typography>
            </Stack>
            <IconButton
                onClick={() => console.log("Online user more options clicked")}
                sx={{ color: "grey" }}
            >
                <ExpandMoreOutlinedIcon />
            </IconButton>
        </Stack>
    );
};

export default OnlineUserCard;
