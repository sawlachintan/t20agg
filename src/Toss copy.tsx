import {
    Stack,
    Paper,
    Typography,
    Divider,
    useMediaQuery,
    Grid,
} from "@mui/material";
import { ELEVATION } from "./assets/constants";
import { FC, useContext } from "react";
import { TeamContext } from "./App";

import { sum } from "d3";

type Props = {
    data: any;
};

type rowProps = {
    tossSpacing: boolean;
    value?: number;
    metric?: string;
};

const TableRow: FC<rowProps> = ({ tossSpacing, value, metric }) => {
    return (
        <Grid
            item
            container
            direction="row"
            xs={12}
            spacing={2}
            justifyContent="space-between"
            px={2}
            mx={tossSpacing ? 10 : undefined}
        >
            <Grid item>
                <Typography variant="subtitle1">{metric}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" fontWeight={700} color="#2196f3">
                    {value}
                </Typography>
            </Grid>
        </Grid>
    );
};

export const Toss: FC<Props> = ({ data }) => {
    const { team } = useContext(TeamContext);

    const matches = useMediaQuery("(min-width:700px)");
    const tossSpacing = useMediaQuery("(min-width: 1100px)");

    const batWins: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "bat"),
            (d: any) => d.winner
        );
    const batMatches: number =
        data &&
        data.filter((d: any) => d.abb === team && d.decision === "bat").length;
    const batLosses: number = batMatches - batWins;

    const fieldWins: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "field"),
            (d: any) => d.winner
        );
    const fieldMatches: number =
        data &&
        data.filter((d: any) => d.abb === team && d.decision === "field")
            .length;
    const fieldLosses: number = fieldMatches - fieldWins;
    const fieldRuns: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "field"),
            (d: any) => d.runs
        );
    const batRuns: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "bat"),
            (d: any) => d.runs
        );
    const fieldWickets: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "field"),
            (d: any) => d.wickets
        );
    const batWickets: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "bat"),
            (d: any) => d.wickets
        );

    const batRows: { key: string; value: number }[] = [
        { key: "Matches", value: batMatches },
        { key: "Wins", value: batWins },
        { key: "Losses", value: batLosses },
        { key: "Runs", value: batRuns },
        { key: "Wickets", value: batWickets },
    ];
    const fieldRows: { key: string; value: number }[] = [
        { key: "Matches", value: fieldMatches },
        { key: "Wins", value: fieldWins },
        { key: "Losses", value: fieldLosses },
        { key: "Runs", value: fieldRuns },
        { key: "Wickets", value: fieldWickets },
    ];
    return (
        <Stack
            width={matches ? "60vw" : "90vw"}
            component={Paper}
            elevation={ELEVATION}
            py={2}
            direction="row"
            spacing={4}
        >
            <Grid container direction="row" spacing={2} mx={1}>
                <Grid item container direction="row" xs={6}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Batting</Typography>
                    </Grid>
                    <Grid item xs={12} pb={3}>
                        <Divider variant="middle" />
                    </Grid>
                    {batRows.map((d: { key: string; value: number }) => {
                        return (
                            <TableRow
                                tossSpacing={tossSpacing}
                                metric={d.key}
                                value={d.value}
                                key={d.key}
                            />
                        );
                    })}
                </Grid>
                <Grid item container direction="row" xs={6}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Fielding</Typography>
                    </Grid>
                    <Grid item xs={12} pb={3}>
                        <Divider variant="middle" />
                    </Grid>
                    {fieldRows.map((d: { key: string; value: number }) => {
                        return (
                            <TableRow
                                tossSpacing={tossSpacing}
                                metric={d.key}
                                value={d.value}
                                key={d.key}
                            />
                        );
                    })}
                </Grid>
            </Grid>
        </Stack>
    );
};
