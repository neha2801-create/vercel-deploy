import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LogoOrange from "../assets/logo_orange.svg";

const LoginPageCard = ({
    bgcolor = "#fff",
    borderRadius,
    border = 1,
    padding = 3.5,
    children,
}) => {
    return (
        <Stack
            overflow={"hidden"}
            justifyContent={"left"}
            // alignContent={"start"}
            sx={{ backdropFilter: "blur(10px)" }}
            bgcolor={bgcolor}
            border={border}
            direction={"column"}
            minWidth={10}
            padding={padding}
            borderRadius={borderRadius}
            gap={3}
            minHeight={350}
        >
            {children}
        </Stack>
    );
};

export default LoginPageCard;
