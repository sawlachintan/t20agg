import {
    Stack,
    Tooltip,
    Button,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import { useState } from "react";
import { useLocalStorage } from "react-use";
import { TEAMS } from "./assets/constants";

type Props = {};

type teamType = {
    abb: string;
    name: string;
    color: string;
};

export const TeamContainer = (props: Props) => {
    const [team, setTeam, removeTeam] = useLocalStorage<string>("team", "IND");

    return (
        <Stack
            direction="row"
            spacing={2}
            width="95vw"
            mx={1}
            overflow="scroll"
            justifyContent={"space-between"}
        >
            {TEAMS.map((a_team: teamType, index: number) => {
                return (
                    <ThemeProvider
                        theme={createTheme({
                            palette: {
                                primary: {
                                    main: a_team.color,
                                },
                            },
                        })}
                    >
                        <Tooltip key={index} title={a_team.name}>
                            <Button
                                variant={
                                    a_team.abb === team
                                        ? "contained"
                                        : "outlined"
                                }
                                size="large"
                                onClick={() => setTeam(a_team.abb)}
                                sx={{ borderWidth: "2px" }}
                            >
                                {a_team.abb}
                            </Button>
                        </Tooltip>
                    </ThemeProvider>
                );
            })}
        </Stack>
    );
};
