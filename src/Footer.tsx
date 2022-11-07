import { Twitter, LinkedIn, GitHub, Language } from "@mui/icons-material";
import {
    Stack,
    Paper,
    IconButton,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { ELEVATION } from "./assets/constants";

type Props = {};

export const Footer = (props: Props) => {
    const matches = useMediaQuery("(min-width:700px)");
    return (
        <Stack
            direction="column"
            component={Paper}
            spacing={2}
            elevation={ELEVATION}
            width={matches ? "60vw" : "90vw"}
            alignItems="center"
            py={2}
        >
            <Stack direction="row" width="50%" justifyContent="space-around">
                <IconButton
                    target="_blank"
                    rel="noreferrer noopener"
                    href={"https://sawlachintan.github.io/personal-website"}
                >
                    <Language />
                </IconButton>
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
                Last updated on November 6, 2022
            </Typography>
        </Stack>
    );
};
