import { Stack, Paper, Typography, Divider } from "@mui/material";
import { ELEVATION } from "./assets/constants";

type Props = {};

export const Toss = (props: Props) => {
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
                    <Typography variant="h5" fontWeight={800} color="#E22F22">
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
                    <Typography variant="h5" fontWeight={800} color="#E22F22">
                        2
                    </Typography>
                    <Typography variant="body1" fontWeight={200}>
                        Losses
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};
