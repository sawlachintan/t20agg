import {
    createTheme,
    Divider,
    Grid,
    Paper,
    Stack,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { FC, useContext } from "react";
import { TeamContext } from "./App";
import { ELEVATION, numberFormat } from "./assets/constants";
import { useRunsData } from "./hooks/useRunsData";

type Props = {};

type runRowType = {
    team?: string;
    metric: string;
    count: number;
    value: number;
};

const RunRow = ({ metric, count, value }: runRowType) => {
    return (
        <>
            <Grid item xs={5.75}>
                <Typography align="left" variant="subtitle1">
                    {metric}
                </Typography>
            </Grid>
            <Grid item xs={3.125}>
                <Typography align="left" variant="subtitle1">
                    {numberFormat(count)}
                </Typography>
            </Grid>
            <Grid item xs={3.125}>
                <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    color="#2196f3"
                    align="left"
                >
                    {numberFormat(value)}
                </Typography>
            </Grid>
            {metric !== "Total" && (
                <Grid item xs={12}>
                    <ThemeProvider
                        theme={createTheme({
                            palette: {
                                divider: "#444",
                            },
                        })}
                    >
                        <Divider />
                    </ThemeProvider>
                </Grid>
            )}
        </>
    );
};

export const Runs: FC<Props> = ({}) => {
    const matches = useMediaQuery("(min-width:700px)");
    const { team } = useContext(TeamContext);
    const some = useRunsData();
    const runsData: any[] = some && some.filter((d: any) => d.abb === team);
    const total: runRowType = {
        metric: "Total",
        count: runsData
            ? runsData.reduce(
                  (prev: number, curr: runRowType) => prev + curr.count,
                  0
              )
            : 0,
        value: runsData
            ? runsData.reduce(
                  (prev: number, curr: runRowType) => prev + curr.value,
                  0
              )
            : 0,
    };
    runsData && runsData.push(total);

    return (
        <Stack
            width={matches ? "60vw" : "90vw"}
            component={Paper}
            elevation={ELEVATION}
            py={2}
            direction="row"
            spacing={4}
        >
            <Grid container direction="row" spacing={2} mx={4}>
                <Grid item xs={5.75}>
                    <Typography variant="h5">Metric</Typography>
                </Grid>
                <Grid item xs={3.125}>
                    <Typography align="left" variant="h5">
                        Count
                    </Typography>
                </Grid>
                <Grid item xs={3.125}>
                    <Typography align="left" variant="h5">
                        Sum
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                {runsData &&
                    runsData.map((d: runRowType) => {
                        return <RunRow {...d} key={d.metric} />;
                    })}
            </Grid>
        </Stack>
    );
};
