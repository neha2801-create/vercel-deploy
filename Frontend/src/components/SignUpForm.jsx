import { Stack, Typography } from "@mui/material";
import React from "react";
import FilledTextField from "./FilledTextField";
import FilledTextFieldPassword from "./FilledTextFieldPassword";
import RoundedButton from "./RoundedButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { AnimatePresence, motion } from "framer-motion";

const SignUpForm = () => {
    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            exit={{
                x: 200,
                opacity: 0,
            }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
            }}
        >
            {/* SIGN UP FORM */}
            <Typography
                variant="h6"
                fontWeight={600}
                borderLeft={"0px"}
                borderRight={"0px"}
            >
                Sign up for a new account
            </Typography>
            <form id="signUpForm" height={"100%"} style={{ flex: 1 }}>
                <Stack
                    height={"100%"}
                    alignContent={"space-between"}
                    justifyContent={"space-between"}
                >
                    <Stack gap={2}>
                        <FilledTextField
                            placeholder="Hello!"
                            label="Full name"
                            type="text"
                        />
                        <FilledTextField
                            placeholder="someone@somewhere.com"
                            label="Your email"
                            type="email"
                        />
                        <FilledTextFieldPassword
                            placeholder={"AaBbCc@$%#000"}
                            label={"Set password"}
                            type="password"
                        />

                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"right"}
                        >
                            <RoundedButton>
                                Next <ArrowForwardIcon sx={{ marginLeft: 1 }} />{" "}
                            </RoundedButton>
                        </Stack>
                    </Stack>
                    {/* <a href="#">
                        <Stack direction={"row"}>
                            <ChevronLeftIcon />
                            Already have an account? Login
                        </Stack>
                    </a> */}
                </Stack>
            </form>
        </motion.div>
    );
};

export default SignUpForm;
