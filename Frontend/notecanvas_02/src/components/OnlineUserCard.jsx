import React from "react";
import {
    Stack,
    Typography,
    Avatar,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    MenuItem,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

// import { AddToCanvasIconLight } from "../assets/addToCanvasIconLight.svg";

const OnlineUserCard = ({ id, username, onClickOption1, onClickOption2 }) => {
    return (
        <Stack
            id={id}
            sx={{
                bgcolor: "#141414",
                color: "white",
                borderRadius: "10px",
            }}
            padding={2}
            alignItems={"center"}
            spacing={1}
            direction={"row"}
        >
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
    );
};

export default OnlineUserCard;