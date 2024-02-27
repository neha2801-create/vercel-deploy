import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const FilledTextFieldPassword = ({ placeholder, label, type = "text" }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <TextField
            variant="filled"
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            label={label}
            InputProps={{
                disableUnderline: true,
                sx: { borderRadius: "10px" },

                endAdornment:
                    type === "password" ? (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleTogglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <VisibilityIcon />
                                ) : (
                                    <VisibilityOffIcon />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ) : null,
            }}
        />
    );
};

export default FilledTextFieldPassword;
