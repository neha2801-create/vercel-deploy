import { Stack, Typography } from "@mui/material";
import React from "react";
import FilledTextField from "./FilledTextField";
import FilledTextFieldPassword from "./FilledTextFieldPassword";
import RoundedButton from "./RoundedButton";

import { motion } from "framer-motion";

const LoginForm = () => {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            exit={{
                x: -200,
                opacity: 0,
            }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
            }}
        >
            {/* LOGIN FORM */}
            <Typography
                variant="h6"
                fontWeight={600}
                borderLeft={"0px"}
                borderRight={"0px"}
            >
                Log into your canvas
            </Typography>
            <form id="loginForm" height={"100%"} style={{ flex: 1 }}>
                <Stack
                    height={"100%"}
                    alignContent={"space-between"}
                    justifyContent={"space-between"}
                >
                    <Stack gap={2}>
                        <FilledTextField
                            placeholder="someone@somewhere.com"
                            label="Email"
                            type="email"
                        />
                        <FilledTextFieldPassword
                            placeholder={"Password"}
                            label={"Password"}
                            type="password"
                        />
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <RoundedButton>Login</RoundedButton>
                            <a href="">Trouble signing in? </a>
                        </Stack>
                    </Stack>

                    {/* <a href="#">
                        <Stack direction="row" justifyContent={"right"}>
                            Or create a new account
                            <ChevronRightIcon />
                        </Stack>
                    </a> */}
                </Stack>
            </form>
        </motion.div>
    );
};

export default LoginForm;
