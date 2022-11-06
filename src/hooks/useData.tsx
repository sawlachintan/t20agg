import { csv } from "d3-fetch";
import { useEffect, useState } from "react";

export const useData = () => {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        // json("./hello.json").then(setData);
        // return () => {};
        csv("../../test.csv", (row: any) => {
            row["winner"] = +row["winner"];
            row["runs"] = +row["runs"];
            row["wickets"] = +row["wickets"];
            return row;
        }).then(setData);

        return () => undefined;
    }, []);

    return data;
};
