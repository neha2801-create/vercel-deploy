import { Container, Stack, Typography, Box } from "@mui/material";
import React from "react";
import LoginPageCard from "../components/LoginPageCard";
import LogoOrange from "../assets/logo_orange.svg";
import InDevelopmentTypo from "../assets/in_development_typo.png";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

const Login = () => {
    return (
        <Container sx={{ border: 1, margin: 0, padding: 2 }}>
            {/* ----TITLE CARD---- */}
            <LoginPageCard
                bgcolor={"#FFB591"}
                borderRadius={"50px 50px 0px 50px"}
            >
                <Stack>
                    <div>
                        <img src={LogoOrange} height={112} alt="" srcset="" />
                    </div>

                    <Typography variant="h4" fontWeight={600}>
                        NoteCanvas hello <ContentPasteIcon />
                    </Typography>
                </Stack>

                <div>
                    Esse pariatur proident sunt irure irure. Ullamco aliqua
                    adipisicing incididunt Lorem ea aliqua. Esse aute amet
                    exercitation voluptate adipisicing do sint esse ex
                    exercitation.
                </div>
            </LoginPageCard>
            {/* ----STATUS CARD---- */}
            <LoginPageCard
                borderRadius={"50px 0px 50px 50px"}
                border={"1px dashed #000"}
                padding={0}
            >
                <Typography
                    variant="h6"
                    fontWeight={600}
                    padding={"0 25px"}
                    border={"1px dashed #ff000080"}
                    borderLeft={"0px"}
                    borderRight={"0px"}
                    margin={"25px 0 0 0"}
                >
                    Status
                </Typography>
                <Typography
                    variant="h1"
                    fontWeight={600}
                    lineHeight={0.8}
                    border={"1px dashed #ff000080"}
                    padding={"0 0 0 25px"}
                    borderLeft={"0px"}
                    borderRight={"0px"}
                    margin={"0 0 0 0"}
                >
                    In developement
                </Typography>

                <Stack
                    border={"1px dashed #ff000080"}
                    padding={"0 25px"}
                    borderLeft={"0px"}
                    borderRight={"0px"}
                    direction={"row"}
                    gap={5}
                >
                    <Stack padding={"20px 0px"}>
                        <strong>Currently working on</strong>
                        <p>User Login & registration</p>
                    </Stack>
                    <Stack padding={"20px 0px"}>
                        <strong>Upcoming</strong>
                        <p>
                            Note taking <br />
                            Canvas UI <br />
                            Account settings/preferences
                        </p>
                    </Stack>
                </Stack>
            </LoginPageCard>
        </Container>
    );
};

export default Login;
