import {
    Grid,
    Paper,
    Typography,
    ThemeProvider,
    createTheme,
    Stack,
    Button,
    Card,
    Divider,
    CardHeader,
    CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { FC } from "react";
import { TestCard } from "./TestCard";

const ELEVATION: number = 8;

type Props = {
    index: number;
};

const array: number[] = [0, 1, 2, 3];

const SomeThing: FC<Props> = ({ index }) => (
    <Grid
        item
        component={motion.div}
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
            delay: 0.15 * 2,
            opacity: { duration: 1.25 },
            default: { ease: "linear" },
        }}
    >
        <Paper sx={{ width: "97.5vw" }} elevation={ELEVATION}>
            <Typography variant="h1">Hello</Typography>
            <Typography variant="h1">Hello</Typography>
        </Paper>
    </Grid>
);

function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
        typography: {
            fontFamily: [
                "Poppins",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(","),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid
                component={Paper}
                container
                spacing={3}
                square
                py={1.5}
                minHeight="105vh"
                alignItems={"center"}
                direction="column"
            >
                <Grid
                    item
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.15,
                        opacity: { duration: 1.25 },
                        default: { ease: "linear" },
                    }}
                >
                    <Stack
                        direction="row"
                        width="97.5vw"
                        justifyContent="center"
                    >
                        <Typography
                            textAlign={"center"}
                            fontWeight={600}
                            variant="h2"
                        >
                            TSN
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack
                        direction="row"
                        spacing={2}
                        width="95vw"
                        mx={1}
                        overflow="scroll"
                        justifyContent={"space-between"}
                    >
                        <Button variant="contained">IND</Button>
                        <Button variant="contained">AUS</Button>
                        <Button variant="contained">NZ</Button>
                        <Button variant="contained">PAK</Button>
                        <Button variant="contained">ENG</Button>
                        <Button variant="contained">SA</Button>
                        <Button variant="contained">BAN</Button>
                        <Button variant="contained">NAM</Button>
                        <Button variant="contained">SCO</Button>
                        <Button variant="contained">WI</Button>
                        <Button variant="contained">SL</Button>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack
                        width="95vw"
                        component={Paper}
                        elevation={ELEVATION}
                        py={2}
                    >
                        <Typography mx={1} variant="h4" fontWeight={600}>
                            TOSS
                        </Typography>
                        <Typography mx={3} variant="h5" fontWeight={200}>
                            When batting first,
                        </Typography>
                        <br />
                        <Stack
                            direction="row"
                            width="100%"
                            justifyContent="space-around"
                        >
                            <Stack
                                alignItems="center"
                                component={Paper}
                                elevation={ELEVATION}
                                direction="column"
                                width="35%"
                                spacing={1}
                                sx={{ backgroundColor: "#212121" }}
                            >
                                <Typography variant="h5" fontWeight={800}>
                                    2
                                </Typography>
                                <Typography variant="body1" fontWeight={200}>
                                    Wins
                                </Typography>
                            </Stack>
                            <Divider orientation="vertical" />
                            <Stack
                                alignItems="center"
                                component={Paper}
                                elevation={ELEVATION}
                                direction="column"
                                width="35%"
                                spacing={1}
                                sx={{ backgroundColor: "#212121" }}
                            >
                                <Typography variant="h5" fontWeight={800}>
                                    2
                                </Typography>
                                <Typography variant="body1" fontWeight={200}>
                                    Losses
                                </Typography>
                            </Stack>
                        </Stack>
                        <br />
                        <Divider variant="inset" />
                        <br />
                        <Typography mx={3} variant="h5" fontWeight={200}>
                            When fielding first,
                        </Typography>
                        <br />
                        <Stack
                            direction="row"
                            width="100%"
                            justifyContent="space-around"
                        >
                            <Stack
                                alignItems="center"
                                component={Paper}
                                elevation={ELEVATION}
                                direction="column"
                                width="35%"
                                spacing={1}
                                sx={{ backgroundColor: "#212121" }}
                            >
                                <Typography variant="h5" fontWeight={800}>
                                    2
                                </Typography>
                                <Typography variant="body1" fontWeight={200}>
                                    Wins
                                </Typography>
                            </Stack>
                            <Divider orientation="vertical" />
                            <Stack
                                alignItems="center"
                                component={Paper}
                                elevation={ELEVATION}
                                direction="column"
                                width="35%"
                                spacing={1}
                                sx={{ backgroundColor: "#212121" }}
                            >
                                <Typography variant="h5" fontWeight={800}>
                                    2
                                </Typography>
                                <Typography variant="body1" fontWeight={200}>
                                    Losses
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item></Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
