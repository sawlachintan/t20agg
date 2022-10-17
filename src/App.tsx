import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC } from "react";
import { TestCard } from "./TestCard";
const ELEVATION: number = 8;

type Props = {
    index: number;
};

const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SomeThing: FC<Props> = ({ index }) => (
    <Grid
        item
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
            delay: 0.15 * index,
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
    return (
        <Grid justifyContent="center" container spacing={3}>
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
                <Paper sx={{ width: "97.5vw" }} elevation={ELEVATION}>
                    <Typography variant="h1">Toss Analysis</Typography>
                    <TestCard />
                </Paper>
            </Grid>
            {array.map((index) => {
                return <SomeThing index={index} />;
            })}
        </Grid>
    );
}

export default App;
