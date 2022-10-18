import {
    Grid,
    Paper,
    Typography,
    ThemeProvider,
    createTheme,
    Stack,
    Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { FC } from "react";
import { FONTS, TEAMS, ELEVATION } from "./assets/constants";
import { Toss } from "./Toss";

type Props = {
    index: number;
};

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
            fontFamily: FONTS.join(","),
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
                        {TEAMS.map((name, index) => {
                            return (
                                <Button key={index} variant="contained">
                                    {name}
                                </Button>
                            );
                        })}
                    </Stack>
                </Grid>
                <Grid item>
                    <Toss></Toss>
                </Grid>
                <Grid item></Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
