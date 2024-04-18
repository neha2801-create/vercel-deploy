import React, { useState } from "react";
import { Stack, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const SpaceItemCard = ({
    id,
    title = "Untitled Space",
    timestamp = "--",
    onDelete,
    onClick,
}) => {
    const [deleteIconVisibility, setDeleteIconVisibility] = useState(false);

    const handleMouseEnter = () => {
        setDeleteIconVisibility(true);
    };

    const handleMouseLeave = () => {
        setDeleteIconVisibility(false);
    };

    return (
        <Stack
            id={id}
            bgcolor={"#141414"}
            p={2}
            color={"white"}
            // border={"1px #ffffff20 solid"}
            borderRadius={"10px"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            onClick={onClick}
            sx={{
                "&:hover": {
                    // border: "1px #ffffff50 solid",
                    cursor: "pointer",
                    bgcolor: "#090909",
                },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Typography fontFamily={"poppins"}>{title}</Typography>

            <Stack direction={"row"}>
                <Typography
                    variant="body2"
                    color={"#ffffff50"}
                    width={180}
                    textAlign={"right"}
                >
                    Created on <br />
                    {timestamp}
                </Typography>

                {/* Show when stack is hovered  */}
                <IconButton
                    sx={{
                        ml: 2,
                        width: 40,
                        height: 40,
                        color: "grey",
                        display: deleteIconVisibility ? "block" : "none",
                        // higlight sliglty red on hover
                        "&:hover": {
                            bgcolor: "#FF5300",
                            color: "black",
                        },
                    }}
                    onClick={onDelete}
                >
                    <DeleteOutlineIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default SpaceItemCard;
