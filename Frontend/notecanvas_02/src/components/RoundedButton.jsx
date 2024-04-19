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
    borderRadius = "11px",
    type = "button",
    hoverBGColor = "#00000080",
}) => {
    return (
        <Button
            variant={variant}
            type={type}
            onClick={onClick}
            disabled={disabled}
            disableRipple={variant == "text" ? true : false}
            sx={{
                ":disabled": {
                    color: "#ffffff30",
                },
                ":hover": {
                    backgroundColor: hoverBGColor,
                },
                padding: "10px 20px",
                mt: mt,
                maxWidth: "fit-content",
                bgcolor: bgcolor,
                borderRadius: borderRadius,
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
