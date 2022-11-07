import { Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import {
    Axis,
    axisBottom,
    axisLeft,
    max,
    scaleBand,
    scaleLinear,
    select,
    stack,
    sum,
} from "d3";
import { FC, useContext, useEffect, useRef } from "react";
import { TeamContext } from "../../App";
import { ELEVATION } from "../../assets/constants";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import "./TossChart.css";
type Props = {
    data?: any;
};

type DataProps = {
    metric: string;
    "Bat First": number;
    "Field First": number;
};

const summarize = (data: any[], team: string) => {
    const batWins: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "bat"),
            (d: any) => d.winner
        );
    const batMatches: number =
        data &&
        data.filter((d: any) => d.abb === team && d.decision === "bat").length;
    const batLosses: number = batMatches - batWins;

    const fieldWins: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "field"),
            (d: any) => d.winner
        );
    const fieldMatches: number =
        data &&
        data.filter((d: any) => d.abb === team && d.decision === "field")
            .length;
    const fieldLosses: number = fieldMatches - fieldWins;
    const fieldRuns: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "field"),
            (d: any) => d.runs
        );
    const batRuns: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "bat"),
            (d: any) => d.runs
        );
    const fieldWickets: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "field"),
            (d: any) => d.wickets
        );
    const batWickets: number =
        data &&
        sum(
            data.filter((d: any) => d.abb === team && d.decision === "bat"),
            (d: any) => d.wickets
        );
    return {
        batMatches,
        fieldMatches,
        batRuns,
        fieldRuns,
        batWins,
        fieldWins,
        batLosses,
        fieldLosses,
        batWickets,
        fieldWickets,
    };
};

const fraction = (numerator: number, anchor: number) => {
    const value: number = (numerator * 100) / (numerator + anchor);
    return parseFloat(value.toFixed(2));
};

export const TossChart: FC<Props> = ({ data }) => {
    const { team } = useContext(TeamContext);
    const matches = useMediaQuery("(min-width:700px)");

    const {
        batMatches,
        fieldMatches,
        batRuns,
        fieldRuns,
        batWins,
        fieldWins,
        batLosses,
        fieldLosses,
        batWickets,
        fieldWickets,
    } = summarize(data, team);

    const tossData: DataProps[] = [
        {
            metric: "Wins",
            "Bat First": 100,
            "Field First": fraction(fieldWins, batWins),
        },
        {
            metric: "Losses",
            "Bat First": 100,
            "Field First": fraction(fieldLosses, batLosses),
        },
        {
            metric: "Runs",
            "Bat First": 100,
            "Field First": fraction(fieldRuns, batRuns),
        },
        {
            metric: "Wickets",
            "Bat First": 100,
            "Field First": fraction(fieldWickets, batWickets),
        },
        {
            metric: "Matches",
            "Bat First": 100,
            "Field First": fraction(fieldMatches, batMatches),
        },
    ];

    const keys: string[] = ["Bat First", "Field First"];

    const svgRef = useRef<any>();
    const wrapperRef = useRef<any>();
    const dimensions = useResizeObserver(wrapperRef);
    const translateX = 50;
    const margin = {
        top: 30,
        left: 50,
        right: matches ? 20 : 40,
        bottom: 30,
    };

    useEffect(() => {
        if (data) {
            const svg = select(svgRef.current);
            const { width, height } =
                dimensions || wrapperRef.current.getBoundingClientRect();
            const svgWidth = width - margin.right;
            const stackGenerator = stack().keys(keys);
            const layers = stackGenerator(tossData as any);
            const extent: any = [0, 100];

            const yScale = scaleBand()
                .domain(tossData.map((d: DataProps) => d.metric))
                .range([0, height])
                .padding(0.25);
            const yAxis: any = axisLeft(yScale);

            svg.select(".y-axis")
                .attr("transform", `translate(${translateX}, 0)`)
                .call(yAxis)
                .selectAll("text")
                .attr("transform", "rotate(-45)")
                .attr("dx", ".7em")
                .attr("dy", "-1.5em");

            const xScale = scaleLinear().domain(extent).range([0, svgWidth]);
            const xAxis: any = axisBottom(xScale).tickFormat((x) => `${x}%`);
            svg.select(".x-axis")
                .attr("transform", `translate(${translateX}, ${height})`)
                .call(xAxis);

            svg.selectAll(".layer")
                .data(layers)
                .join("g")
                .attr("class", "layer")
                .attr("fill", (layer: any): any => {
                    return layer.key === "Bat First" ? "#B4CDE6" : "#2196f3";
                })
                .selectAll("rect")
                .data((layer) => layer)
                .join("rect")
                .attr("y", (sequence: any): any => {
                    return yScale(sequence.data.metric);
                })
                .attr("height", yScale.bandwidth())
                .attr("x", `${translateX + 1}`)
                .attr(
                    "width",
                    (sequence: any) => xScale(sequence[1]) - xScale(sequence[0])
                );
        }
    }, [tossData, dimensions]);
    return (
        <Stack
            width={matches ? "60vw" : "90vw"}
            component={Paper}
            elevation={ELEVATION}
            py={2}
            direction="column"
            spacing={2}
        >
            <Typography align={"center"}>
                Bat first{" "}
                <span
                    style={{
                        width: "1.5vh",
                        height: "1.5vh",
                        backgroundColor: "#2196f3",
                        borderRadius: "5%",
                        display: "inline-block",
                        marginRight: "6vw",
                    }}
                ></span>{" "}
                Field first{" "}
                <span
                    style={{
                        width: "1.5vh",
                        height: "1.5vh",
                        backgroundColor: "#B4CDE6",
                        borderRadius: "5%",
                        display: "inline-block",
                    }}
                ></span>{" "}
            </Typography>
            <div
                ref={wrapperRef}
                className="wrapper"
                style={{ marginBottom: "1vh" }}
            >
                <svg ref={svgRef}>
                    <g className="y-axis" />
                    <g className="x-axis" />
                </svg>
            </div>
        </Stack>
    );
};
