import {
    Grid,
    Typography,
    FormGroup,
    FormControlLabel,
    Switch,
} from "@mui/material";
import { motion } from "framer-motion";
import { ChangeEvent, FC } from "react";
import { Chart } from "./Chart";
import { Table } from "./Table";
import { useLocalStorage } from "react-use";

type Props = {
    data: any;
};

export const Toss: FC<Props> = ({ data }) => {
    const [check, setCheck, removeCheck] = useLocalStorage<boolean>(
        "tossCheck",
        false
    );
    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setCheck(event.target.checked);
    return (
        <>
            <Grid item container justifyContent="space-around">
                <Grid item>
                    <Typography variant="h4" fontWeight={600}>
                        Toss
                    </Typography>
                </Grid>
                <Grid item>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={check}
                                    onChange={handleChange}
                                />
                            }
                            label={"Graph"}
                        />
                    </FormGroup>
                </Grid>
            </Grid>
            <Grid
                item
                component={motion.div}
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.15,
                    opacity: { duration: 1.25 },
                    translateY: { duration: 0.625 },
                    default: { ease: "linear" },
                }}
            >
                {check ? <Chart data={data} /> : <Table data={data} />}
            </Grid>
        </>
    );
};
