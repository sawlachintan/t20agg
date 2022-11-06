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
    useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { FONTS } from "./assets/constants";
import { TeamContainer } from "./TeamContainer";
import { Toss as Toss2 } from "./Toss copy";
import { Footer } from "./Footer";
import { createContext, ChangeEvent } from "react";
import { useLocalStorage } from "react-use";
import { useData } from "./hooks/useData";
import { TossChart } from "./TossChart";
import { Runs } from "./Runs";

export const TeamContext = createContext<any>(undefined);

function App() {
    const matches = useMediaQuery("(min-width:700px)");
    const theme = createTheme({
        palette: {
            mode: "dark",
            // background: {
            //     default: "#1F1E1E",
            //     paper: "#1F1E1E",
            // },
            divider: "#2196f3",
        },
        typography: {
            fontFamily: FONTS.join(","),
        },
    });
    const [team, setTeam, removeTeam] = useLocalStorage<string>("team", "CSK");
    const data = useData();
    const [checked, setChecked, removeChecked] = useLocalStorage<boolean>(
        "tossCheck",
        true
    );

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

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
                            default: { ease: "linaer" },
                        }}
                        mt={7}
                    >
                        <TeamContainer />
                    </Grid>
                    {/* Toss */}
                    {/* <Grid
                        item
                        component={motion.div}
                        initial={{ opacity: 0, translateY: 50 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.15,
                            opacity: { duration: 1.25 },
                            translateY: { duration: 0.625 },
                            default: { ease: "linaer" },
                        }}
                    >
                        <Toss />
                    </Grid> */}
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
                            default: { ease: "linaer" },
                        }}
                        container
                        width="100%"
                        spacing={2}
                        direction="column"
                        alignItems={"center"}
                    >
                        <Grid item container justifyContent="space-around">
                            <Grid item>
                                <Typography variant="h4" fontWeight={600}>
                                    Toss
                                </Typography>
                            </Grid>
                            <Grid item>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={checked}
                                                onChange={handleChange}
                                            />
                                        }
                                        label={"Graph"}
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>
                        {/* {checked && (
                            <Grid item width={matches ? "60vw" : "90vw"}>
                                <Typography textAlign={"right"}>
                                    Field first{" "}
                                    <span
                                        style={{
                                            width: "1.5vh",
                                            height: "1.5vh",
                                            backgroundColor: "#B4CDE6",
                                            borderRadius: "5%",
                                            display: "inline-block",
                                            marginRight: "6vw",
                                        }}
                                    ></span>{" "}
                                    Bat first{" "}
                                    <span
                                        style={{
                                            width: "1.5vh",
                                            height: "1.5vh",
                                            backgroundColor: "#2196f3",
                                            borderRadius: "5%",
                                            display: "inline-block",
                                        }}
                                    ></span>
                                </Typography>
                            </Grid>
                        )} */}
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
                                default: { ease: "linaer" },
                            }}
                        >
                            {checked ? (
                                <TossChart data={data} />
                            ) : (
                                <Toss2 data={data} />
                            )}
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
                        default: { ease: "linaer" },
                    }}
                >
                    <Footer />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
