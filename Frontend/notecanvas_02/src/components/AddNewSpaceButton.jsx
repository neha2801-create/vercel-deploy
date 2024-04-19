import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddToPhotosRoundedIcon from "@mui/icons-material/AddToPhotosRounded";

const AddNewSpaceButton = ({ onClick }) => {
    return (
        <Box>
            <Button
                disableElevation
                onClick={onClick}
                variant="contained"
                sx={{
                    margin: "-15px",
                    zIndex: 100000,
                    height: "80px",
                    width: "80px",
                    borderRadius: "80px",

                    position: "fixed",
                    bottom: "50px",
                    left: "50px",
                    backgroundColor: "#FF530020",
                    elevation: 0,
                    "&:hover": {
                        backgroundColor: "#FF5300",
                    },
                }}
            >
                <AddToPhotosRoundedIcon />
            </Button>
        </Box>
    );
};

export default AddNewSpaceButton;
