import {
    Stack,
    Paper,
    Grid,
    Typography,
    Divider,
    useMediaQuery,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import { useContext } from "react";
import { TeamContext } from "../../App";
import { ELEVATION, numberFormat } from "../../assets/constants";
import { useWicketsData } from "../../hooks/useWicketsData";

type Props = {};

type wicketRowType = {
    kind: string;
    count: number;
};

const WicketRow = ({ kind, count }: wicketRowType) => {
    return (
        <>
            <Grid item xs={9}>
                <Typography align="left" variant="subtitle1">
                    {kind}
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    color="#2196f3"
                    align="left"
                >
                    {numberFormat(count)}
                </Typography>
            </Grid>

            {kind !== "Total" && (
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

export const Wickets = (props: Props) => {
    const matches = useMediaQuery("(min-width:700px)");
    const { team } = useContext(TeamContext);
    const some = useWicketsData();
    const wicketsData: any[] = some && some.filter((d: any) => d.abb === team);
    console.log(wicketsData);
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
                <Grid item xs={9}>
                    <Typography variant="h5">Metric</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography align="left" variant="h5">
                        Count
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>
                {wicketsData &&
                    wicketsData.map((d: wicketRowType) => {
                        return <WicketRow {...d} key={d.kind} />;
                    })}
            </Grid>
        </Stack>
    );
};
