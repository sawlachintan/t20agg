import {
    Grid,
    Paper,
    Typography,
    ThemeProvider,
    createTheme,
    Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { FONTS } from "./assets/constants";
import { TeamContainer } from "./TeamContainer";

import { Toss } from "./Toss";

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
                    <TeamContainer />
                </Grid>
                <Grid item>
                    <Toss />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
