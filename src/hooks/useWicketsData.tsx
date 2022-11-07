import { csv } from "d3-fetch";
import { useEffect, useState } from "react";

export const useWicketsData = () => {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        // json("./hello.json").then(setData);
        // return () => {};
        csv("../../wickets.csv", (row: any) => {
            row["count"] = +row["count"];
            return row;
        }).then(setData);

        return () => undefined;
    }, []);

    return data;
};
