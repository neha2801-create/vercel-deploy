import {
    Container,
    Stack,
    Typography,
    Box,
    Avatar,
    Grid,
    TextField,
    Input,
    inputClasses,
    Button,
    FilledInput,
} from "@mui/material";
import React from "react";
import LoginPageCard from "../components/LoginPageCard";
import LogoOrange from "../assets/logo_orange.svg";
import InDevelopmentTypo from "../assets/in_development_typo.png";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Developers from "../components/Developer";
import Developer from "../components/Developer";
import Tag from "../components/Tag";
import { motion } from "framer-motion";
import OrangeBlobBG from "../assets/bg-blob.svg";
import GridElement from "../assets/plus-grid-element.png";
import zIndex from "@mui/material/styles/zIndex";

import FilledTextFieldPassword from "../components/FilledTextFieldPassword";
import FilledTextField from "../components/FilledTextField";
import RoundedButton from "../components/RoundedButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Login = () => {
    return (
        <>
            <Stack
                sx={{
                    zIndex: 1,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                height={"calc(87vh)"}
                alignContent={"center"}
                justifyContent={"center"}
                padding={10}
                flexWrap={"wrap"}
            >
                {/* ----TOP ROW---- */}
                <Stack direction="row">
                    {/* ----TITLE CARD---- */}
                    <LoginPageCard
                        bgcolor={"#FFB59150"}
                        borderRadius={"50px 50px 0px 50px"}
                        // width={350}

                        height={350}
                    >
                        <Stack>
                            <div>
                                <img src={LogoOrange} height={112} alt="" />
                            </div>

                            <Typography variant="h4" fontWeight={600}>
                                NoteCanvas
                            </Typography>
                        </Stack>

                        <div>
                            Esse pariatur proident sunt irure irure. Ullamco
                            aliqua adipisicing incididunt Lorem ea aliqua. Esse
                            aute amet exercitation voluptate adipisicing do sint
                            esse ex exercitation.
                        </div>
                    </LoginPageCard>

                    {/* ----FEATURES CARD---- */}
                    <LoginPageCard
                        borderRadius={"50px 0px 50px 50px"}
                        // width={"calc(1050px / 3)"}
                        height={350}
                    >
                        <Typography
                            variant="h6"
                            fontWeight={600}
                            borderLeft={"0px"}
                            borderRight={"0px"}
                        >
                            Tentative features
                        </Typography>

                        <Stack
                            borderLeft={"0px"}
                            borderRight={"0px"}
                            direction={"row"}
                            gap={1}
                            flexWrap={"wrap"}
                        >
                            <Tag text="Create notes" bgcolor={"#F5F5F5"} />
                            <Tag text="Canvas layout" bgcolor={"#D9D9D9"} />
                            <Tag
                                text="Organize notes into categories"
                                bgcolor={"#D9D9D9"}
                            />
                            <Tag
                                text="Notes customization"
                                bgcolor={"#F5F5F5"}
                            />
                            <Tag text="Attach files" bgcolor={"#F5F5F5"} />
                            <Tag text="Command bar" bgcolor={"#FF8246"} />
                            <Tag text="Note pinning" bgcolor={"#D9D9D9"} />
                            <Tag
                                text="Keyboard shortcuts"
                                bgcolor={"#F5F5F5"}
                            />
                            <Tag text="Collab session" bgcolor={"#FF8246"} />
                            <Tag
                                text="Chat with collaborators"
                                bgcolor={"#F5F5F5"}
                            />
                            <Tag text="Export notes" bgcolor={"#D9D9D9"} />
                            <Tag text="Search notes" bgcolor={"#F5F5F5"} />
                            <Tag text="Markdown" bgcolor={"#FF8246"} />
                            <Tag
                                text="...and we are thinking of more."
                                color="grey"
                            />
                        </Stack>
                    </LoginPageCard>
                    {/* ----LOGIN CARD---- */}
                    <LoginPageCard
                        borderRadius={"50px 50px 0px 50px"}
                        height={350}
                        // bgcolor="#FF5300"
                        // border={1}
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
                        <form
                            id="loginForm"
                            height={"100%"}
                            style={{ flex: 1 }}
                        >
                            <Stack
                                height={"100%"}
                                alignContent={"space-between"}
                                justifyContent={"space-between"}
                            >
                                <Stack gap={2}>
                                    <FilledTextField
                                        placeholder="Email"
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

                                <a href="#">
                                    <Stack
                                        direction="row"
                                        justifyContent={"right"}
                                    >
                                        Or create a new account
                                        <ChevronRightIcon />
                                    </Stack>
                                </a>
                            </Stack>
                        </form>
                        {/* SIGN UP FORM */}
                        {/* <Typography
                            variant="h6"
                            fontWeight={600}
                            borderLeft={"0px"}
                            borderRight={"0px"}
                        >
                            Sign up for a new account
                        </Typography>
                        <form
                            id="loginForm"
                            height={"100%"}
                            style={{ flex: 1 }}
                        >
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
                                            Next{" "}
                                            <ArrowForwardIcon
                                                sx={{ marginLeft: 1 }}
                                            />{" "}
                                        </RoundedButton>
                                    </Stack>
                                </Stack>
                                <a href="#">
                                    <Stack direction={"row"}>
                                        <ChevronLeftIcon />
                                        Already have an account? Login
                                    </Stack>
                                </a>
                            </Stack>
                        </form> */}
                    </LoginPageCard>
                </Stack>
                {/* ----TOP ROW ENDS---- */}

                {/* ----BOTTOM ROW STARTS---- */}
                <Stack direction={"row"}>
                    {/* ----STATUS CARD---- */}
                    {/* <motion.div></motion.div> */}
                    <LoginPageCard
                        borderRadius={"50px 50px 0px 50px"}
                        padding={3.5}
                        flex={2}
                        height={350}
                        bgImage={GridElement}
                    >
                        <Typography
                            variant="h6"
                            fontWeight={600}
                            borderLeft={"0px"}
                            borderRight={"0px"}
                        >
                            Status
                        </Typography>
                        <motion.div
                            initial={{ opacity: 0, x: 200, border: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{ duration: 1, ease: "backInOut" }}
                        >
                            <Typography
                                variant="h1"
                                fontWeight={600}
                                lineHeight={0.8}
                                borderLeft={"0px"}
                                borderRight={"0px"}
                            >
                                In developement
                            </Typography>
                        </motion.div>

                        <Stack
                            borderLeft={"0px"}
                            borderRight={"0px"}
                            direction={"row"}
                            gap={5}
                        >
                            <Stack>
                                <strong>Currently working on</strong>
                                <p>User Login & registration</p>
                            </Stack>
                            <Stack>
                                <strong>Upcoming</strong>
                                <p>
                                    Note taking <br />
                                    Canvas UI <br />
                                    Account settings/preferences
                                </p>
                            </Stack>
                        </Stack>
                    </LoginPageCard>

                    {/* ----DEVELOPERS CARD---- */}
                    <LoginPageCard
                        // bgcolor={"#FFB591"}
                        borderRadius={"50px 50px 50px 0px"}
                        // width={350}
                        height={350}
                        // flex={1}
                    >
                        <Stack>
                            <Typography
                                variant="h6"
                                fontWeight={600}
                                borderLeft={"0px"}
                                borderRight={"0px"}
                            >
                                Developers
                            </Typography>

                            <Stack
                                paddingTop={3}
                                direction={"row"}
                                justifyContent={"space-around"}
                                flexWrap={"wrap"}
                                gap={3}
                                // border={1}
                            >
                                <Developer
                                    name="Neha Pathak"
                                    description="Frontend/Code"
                                />
                                <Developer
                                    name="Shubhdeep Sarkar"
                                    description="Frontend/Design"
                                />
                                <Developer
                                    name="Surbhi Sharma"
                                    description="Backend"
                                />
                                <Developer
                                    name="Deep Shah"
                                    description="Backend"
                                />
                            </Stack>
                        </Stack>
                    </LoginPageCard>
                </Stack>
            </Stack>
        </>
    );
};

export default Login;
