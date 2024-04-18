import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddToPhotosRoundedIcon from "@mui/icons-material/AddToPhotosRounded";

const AddNewSpaceButton = ({ onClick }) => {
    return (
        <Button
            disableElevation
            onClick={onClick}
            variant="contained"
            sx={{
                margin: "-15px",
                zIndex: 100000,
                height: "80px",
                width: "80px",
                color: "#000000",
                borderRadius: "24px",
                position: "fixed",
                bottom: "50px",
                left: "50px",
                backgroundColor: "#FF5300",
                opacity: 0.7,
                elevation: 0,
                "&:hover": {
                    opacity: 1,
                    color: "#000000",
                    backgroundColor: "#FF5300",
                },
            }}
        >
            <AddToPhotosRoundedIcon />
        </Button>
    );
};

export default AddNewSpaceButton;
