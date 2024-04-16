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

const OnlineUserCard = ({ id, username, onClickOption1, onClickOption2 }) => {
    return (
        <Accordion
            id={id}
            sx={{
                bgcolor: "#141414",
                color: "white",
                borderRadius: "10px",
                padding: "0",
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreOutlinedIcon sx={{ color: "white" }} />}
                // aria-controls="panel1a-content"
                // id="panel1a-header"
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
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0, color: "#ffffff90" }}>
                <MenuItem onClick={onClickOption1}>Option1</MenuItem>
                <MenuItem onClick={onClickOption2}>Option2</MenuItem>
            </AccordionDetails>
        </Accordion>

        // <Stack
        //     bgcolor={"#141414"}
        //     p={2}
        //     color={"white"}
        //     border={"1px #ffffff20 solid"}
        //     borderRadius={"10px"}
        //     direction={"row"}
        //     alignItems={"center"}
        //     justifyContent={"space-between"}
        // >
        //     <Stack direction={"row"} alignItems={"center"} spacing={1}>
        //         <Avatar
        //             sx={{
        //                 color: "#ffffff50",
        //                 backgroundColor: "#2C2C2C",
        //                 fontSize: 15,
        //             }}
        //         >
        //             {username[0]}
        //         </Avatar>
        //         <Typography fontFamily={"poppins"}>{username}</Typography>
        //     </Stack>
        //     <IconButton
        //         onClick={() => console.log("Online user more options clicked")}
        //         sx={{ color: "grey" }}
        //     >
        //         <ExpandMoreOutlinedIcon />
        //     </IconButton>
        // </Stack>
    );
};

export default OnlineUserCard;
