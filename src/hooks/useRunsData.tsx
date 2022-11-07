import { csv } from "d3-fetch";
import { useEffect, useState } from "react";

export const useRunsData = () => {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        // json("./hello.json").then(setData);
        // return () => {};
        csv("../../runs.csv", (row: any) => {
            row["count"] = +row["count"];
            row["value"] = +row["value"];
            return row;
        }).then(setData);

        return () => undefined;
    }, []);

    return data;
};
