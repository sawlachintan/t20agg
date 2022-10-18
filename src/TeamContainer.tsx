import { Stack, Tooltip, Button } from "@mui/material";
import { TEAMS } from "./assets/constants";

type Props = {};

type teamType = {
    abb: string;
    name: string;
};

export const TeamContainer = (props: Props) => {
    return (
        <Stack
            direction="row"
            spacing={2}
            width="95vw"
            mx={1}
            overflow="scroll"
            justifyContent={"space-between"}
        >
            {TEAMS.map((team: teamType, index: number) => {
                return (
                    <Tooltip key={index} title={team.name}>
                        <Button variant="contained">{team.abb}</Button>
                    </Tooltip>
                );
            })}
        </Stack>
    );
};
