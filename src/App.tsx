import {
    Grid,
    Paper,
    Typography,
    ThemeProvider,
    createTheme,
    Stack,
    Switch,
    FormControlLabel,
    FormGroup,
} from "@mui/material";
import { motion } from "framer-motion";
import { FONTS } from "./assets/constants";
import { TeamContainer } from "./components/TeamContainer";
import { Footer } from "./Footer";
import { createContext, ChangeEvent } from "react";
import { useLocalStorage } from "react-use";
import { useData } from "./hooks/useData";
import { Runs } from "./components/Runs/Runs";
import { Wickets } from "./components/Wickets/Wickets";
import { Toss } from "./components/Toss/Toss";

export const TeamContext = createContext<any>(undefined);

function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
            divider: "#2196f3",
        },
        typography: {
            fontFamily: FONTS.join(","),
        },
    });
    const [team, setTeam, removeTeam] = useLocalStorage<string>("team", "CSK");
    const data = useData();

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
                        width="100vw"
                        justifyContent="center"
                        sx={{
                            backgroundColor: "#121212",
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 100000,
                        }}
                    >
                        <Typography
                            textAlign={"center"}
                            fontWeight={600}
                            variant="h2"
                        >
                            T20 Stats
                        </Typography>
                    </Stack>
                </Grid>
                <TeamContext.Provider value={{ team, setTeam }}>
                    {/* Team Containers */}
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
                        mt={7}
                    >
                        <TeamContainer />
                    </Grid>
                    {/* Toss */}
                    <Grid
                        item
                        component={motion.div}
                        initial={{ opacity: 0, translateY: 50 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.15,
                            opacity: { duration: 1.25 },
                            translateY: { duration: 0.625 },
                            default: { ease: "linear" },
                        }}
                        container
                        width="100%"
                        spacing={2}
                        direction="column"
                        alignItems={"center"}
                    >
                        <Toss data={data} />

                        <Grid item container justifyContent="space-around">
                            <Grid item>
                                <Typography variant="h4" fontWeight={600}>
                                    Runs
                                </Typography>
                            </Grid>
                            <Grid item>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch disabled />}
                                        label={"Graph"}
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            component={motion.div}
                            initial={{ opacity: 0, translateY: 50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.15,
                                opacity: { duration: 1.25 },
                                translateY: { duration: 0.625 },
                                default: { ease: "linear" },
                            }}
                        >
                            <Runs />
                        </Grid>
                        <Grid item container justifyContent="space-around">
                            <Grid item>
                                <Typography variant="h4" fontWeight={600}>
                                    Wickets
                                </Typography>
                            </Grid>
                            <Grid item>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch disabled />}
                                        label={"Graph"}
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            component={motion.div}
                            initial={{ opacity: 0, translateY: 50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.15,
                                opacity: { duration: 1.25 },
                                translateY: { duration: 0.625 },
                                default: { ease: "linear" },
                            }}
                        >
                            <Wickets />
                        </Grid>
                    </Grid>
                </TeamContext.Provider>
                {/* Footer */}
                <Grid
                    item
                    component={motion.div}
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        opacity: { duration: 1.25 },
                        translateY: { duration: 0.625 },
                        default: { ease: "linear" },
                    }}
                >
                    <Footer />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
