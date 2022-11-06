import { Stack, Paper, Typography, Divider } from "@mui/material";
import { ELEVATION } from "./assets/constants";
import { json } from "d3-fetch";
import { useContext } from "react";
import { TeamContext } from "./App";
import { useData } from "./hooks/useData";

type Props = {};

export const Toss = (props: Props) => {
    const { team } = useContext(TeamContext);

    const data = useData();

    console.log(
        data &&
            data.filter((d: any) => d.abb.toLowerCase() === team.toLowerCase())
    );
    return (
        <Stack width="95vw" component={Paper} elevation={ELEVATION} py={2}>
            <Typography mx={1} variant="h4" fontWeight={600}>
                TOSS
            </Typography>
            <Typography mx={3} variant="h5" fontWeight={200}>
                When batting first,
            </Typography>
            <br />
            <Stack direction="row" width="100%" justifyContent="space-around">
                <Stack
                    alignItems="center"
                    component={Paper}
                    elevation={ELEVATION}
                    direction="column"
                    width="35%"
                    spacing={1}
                    sx={{ backgroundColor: "#212121" }}
                >
                    <Typography variant="h5" fontWeight={800} color="#009639">
                        2
                    </Typography>
                    <Typography
                        sx={{ letterSpacing: 2.5 }}
                        variant="body1"
                        fontWeight={600}
                    >
                        WINS
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
                    <Typography variant="h5" fontWeight={800} color="#E22F22">
                        2
                    </Typography>
                    <Typography
                        sx={{ letterSpacing: 2.5 }}
                        variant="body1"
                        fontWeight={600}
                    >
                        LOSSES
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
            <Stack direction="row" width="100%" justifyContent="space-around">
                <Stack
                    alignItems="center"
                    component={Paper}
                    elevation={ELEVATION}
                    direction="column"
                    width="45%"
                    spacing={1}
                    sx={{ backgroundColor: "#212121" }}
                >
                    <Typography variant="h5" fontWeight={800} color="#009639">
                        2
                    </Typography>
                    <Typography
                        sx={{ letterSpacing: 2.5 }}
                        variant="body1"
                        fontWeight={600}
                    >
                        WINS
                    </Typography>
                </Stack>
                <Divider orientation="vertical" />
                <Stack
                    alignItems="center"
                    component={Paper}
                    elevation={ELEVATION}
                    direction="column"
                    width="45%"
                    spacing={1}
                    sx={{ backgroundColor: "#212121" }}
                >
                    <Typography variant="h5" fontWeight={800} color="#E22F22">
                        2
                    </Typography>
                    <Typography
                        sx={{ letterSpacing: 2.5 }}
                        variant="body1"
                        fontWeight={600}
                    >
                        LOSSES
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};
