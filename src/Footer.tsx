import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import { Stack, Paper, IconButton, Typography } from "@mui/material";
import { ELEVATION } from "./assets/constants";

type Props = {};

export const Footer = (props: Props) => {
    return (
        <Stack
            direction="column"
            component={Paper}
            spacing={2}
            elevation={ELEVATION}
            width="95vw"
            alignItems="center"
            py={2}
        >
            <Stack direction="row" width="50%" justifyContent="space-around">
                <IconButton
                    target="_blank"
                    rel="noreferrer noopener"
                    href={"https://github.com/sawlachintan"}
                >
                    <GitHub />
                </IconButton>
                <IconButton
                    target="_blank"
                    rel="noreferrer noopener"
                    href={"https://twitter.com/sawlachintan"}
                >
                    <Twitter />
                </IconButton>
                <IconButton
                    target="_blank"
                    rel="noreferrer noopener"
                    href={"https://linkedin.com/in/chintansawla"}
                >
                    <LinkedIn />
                </IconButton>
            </Stack>
            <Typography variant="subtitle1">
                Data sourced from Cricsheet, Cricinfo
            </Typography>
            <Typography variant="subtitle1">
                Last updated on Oct 18, 2022
            </Typography>
        </Stack>
    );
};
