import { Button } from "@mui/material";
import React, { useState } from "react";

const RoundedButton = ({
    // padding = "10px 20px",
    bgcolor = "#2C2C2C",
    color = "#fff",
    mt = "20px",
    fontSize = "14px",
    variant = "default",
    fontWeight = 500,
    children,
    disabled = false,
    onClick,
}) => {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            disableRipple={variant == "text" ? true : false}
            sx={{
                ":disabled": {
                    color: "#ffffff30",
                },
                padding: "10px 20px",
                mt: mt,
                maxWidth: "fit-content",
                bgcolor: bgcolor,
                borderRadius: "11px",
                textDecoration: "none",
                textTransform: "capitalize",
                fontFamily: "poppins",
                color: color,
                fontWeight: fontWeight,
                fontSize: fontSize,
            }}
        >
            {children}
        </Button>
    );
};

export default RoundedButton;
