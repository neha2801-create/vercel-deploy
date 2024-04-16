import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const AddNewSpaceButtonLarge = ({ onClick }) => {
    return (
        <Box
            sx={{
                aspectRatio: "16/9",
            }}
            height={"99vh"}
            width={"99vw"}
            border="1px red dashed"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Button
                disableElevation
                onClick={() => {
                    console.log("Add new space lg button clicked!");
                }}
                variant="contained"
                sx={{
                    borderRadius: "10px",
                    backgroundColor: "#FF530020",
                    elevation: 0,
                    aspectRatio: "16/9",
                    height: "95vh",
                    "&:hover": {
                        backgroundColor: "#FF530040",
                    },
                }}
            >
                <Stack flexDirection={"row"} gap={1}>
                    <AddOutlinedIcon />
                    <Typography
                        fontFamily={"Poppins"}
                        textTransform={"capitalize"}
                    >
                        Add New Space
                    </Typography>
                </Stack>
            </Button>
        </Box>
    );
};

export default AddNewSpaceButtonLarge;
